<?php
header("Access-Control-Allow-Origin: *");

define('admin_email','admin@yoursite.com'); // Change admin email here for example admin@yoursite.com
define('website_name','yoursite.com'); // Change website name here for example yoursite.com
define('website_url', 'http://'.$_SERVER['HTTP_HOST']);
define('EMAIL_FROM', 'noreply@'.$_SERVER['HTTP_HOST']);


$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['name']['value']) && empty($_POST['email']['value']) && empty($_POST['message']['value'])) die();

function strict_secure($str){
	$str = strip_tags(trim($str));
	return $str;
}
function sendEmail($to,$from,$subject,$message,$headname){
	$headers="MIME-Version: 1.0" . "\r\n";
	$headers.="Content-type: text/html; charset=utf-8" . "\r\n";
	$headers.="From: ".$headname.'<'.$from.'>';
	return mail ($to,$subject,$message,$headers);
}

if (isset($_POST))
{
	
	$path =  $_SERVER['HTTP_REFERER'];

	$admin_message = '<p>Dear Admin, Form submitted on '.website_url.'<br>Detail is as following.</p>';
	$admin_message .= '<p>Name : '.$_POST['name']['value'].'</p>';	
	$admin_message .= '<p>Email : '.$_POST['email']['value'].'</p>';	
	$admin_message .= '<p>Message : '.$_POST['message']['value'].'</p>';	
	$admin_message .= '<p>Form submitted on URL:<a href="'.$path.'">'.$path.'</a></p>';
	$admin_message .= '<br><br>';
	$admin_message .= 'Regards,<br />
	'.website_name.'<br />
	'.website_url.'
	';

	
	$user_message = 'Dear '.strict_secure($_POST['name']['value']).',<br>';
	$user_message .= 'Thank you for submitting information. We will contact you soon.<br />';
	$user_message .= 'Regards,<br />
	'.website_name.'<br />
	'.website_url.'
	';

	$admin_subject = 'Form Received From '.website_name;
	$user_subject = 'Thank you - '.website_name;
	
	$sendToAdmin = $sendToUsers = '';

	$sendToAdmin = sendEmail(admin_email,EMAIL_FROM,$admin_subject,$admin_message,website_name);
	if( isset( $_POST['email']['value'] ) && ! empty( $_POST['email']['value'] ) ){
		$sendToUsers = sendEmail(strict_secure($_POST['email']['value']),EMAIL_FROM,$user_subject,$user_message,website_name);
	}
	
	if($sendToAdmin || $sendToUsers)
	{
		echo json_encode(array(
			"sent" => true
		));	
	}else{
		echo json_encode(array(
			"sent" => false,
			"message" => "Something went wrong"
		));
	}
}
exit();
?>