import './performance.css';
import performace_img from '../../images/performace_img.png';

export default function Performance() {
  return (
    <div className="performance">
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-sm-5 col-lg-4 order-2 order-sm-1 performance_image_wraper">
                    <img alt="" src={performace_img}/>
                </div>
                <div className="col-sm-7 col-lg-5 order-1 order-sm-2 performance_text">
                    <h3>Access your<br/>Game Performance</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has.</p>
                    <a href="#" className="btn">Download App</a>
                </div>
            </div>
        </div>
    </div>
  );
}
