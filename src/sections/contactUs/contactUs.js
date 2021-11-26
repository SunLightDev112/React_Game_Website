import React, { Component } from "react";
import './contactUs.css';
import contactUs_image from '../../images/contactUs_image.png';
import spinner from '../../images/spinner.svg';
import validate from "../../utility/validation";
import axios from 'axios';

export default class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            controls: {
                name: {
                  value: "",
                  valid: false,
                  validationRules: {
                    minLength: 3
                  }
                },
                email: {
                  value: "",
                  valid: false,
                  validationRules: {
                    isEmail: true
                  }
                },
                message: {
                  value: "",
                  valid: false,
                  validationRules: {
                    minLength: 3
                  }
                }
            },
            formSpinner: false,
            formvalid: true,
            mailSent: false,
            error:null,
        }
    }

    updateInputState = (key, value) => {
        this.setState(prevState => {
          return {
            controls: {
              ...prevState.controls,
              [key]: {
                ...prevState.controls[key],
                value: value,
                valid: validate(
                  value,
                  prevState.controls[key].validationRules
                )
              }
            }
          };
        });
    };
    resetForm(){
        this.setState({controls: {name: {value:'',valid: false}, email: {value:'',valid: false}, message: {value:'',valid: false}} })
    }
    handleFormSubmit( e ) {
        e.preventDefault();
        this.setState({ mailSent:false, error:null });
        if(!this.state.controls.name.valid || !this.state.controls.email.valid || !this.state.controls.message.valid){
            this.setState({ formvalid: false });
        }else{
            this.setState({ formvalid: true, formSpinner:true });
            console.log(this.state.controls);
            axios({
              method: 'post',
              url: 'mail.php',
              headers: { 'content-type': 'application/json' },
              data: this.state.controls
            })
            .then(result => {
              if(typeof result.data === 'object'){
                this.setState({
                  mailSent: result.data.sent,
                  error: result.data.message,
                  formSpinner:false
                })
                if(result.data.sent){
                  this.resetForm();
                }
              }else{
                this.setState({ 
                  error: 'Something went wrong.',
                  formSpinner:false
                })
              }
              console.log(result.data);
            })
            .catch(error => {
              console.log(error);
              this.setState({ 
                error: error.message,
                formSpinner:false
              })
              console.log(error.message);
            });
        }
    }
  render() {
    return (
        <div className="contactUs">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-8 col-md-5 contactUs-head">
                        <h3>Contact Us</h3>
                        <p>Lorem ipsum is typically a corrupted version of De finibus</p>
                    </div>
                </div>
                <div className="row justify-content-center contactUs_row">
                    <div className="col-md-6 col-lg-5 contactUs_image">
                        <img alt="" src={contactUs_image}/>
                    </div>
                    <div className="col-md-6 col-lg-5 contactUs_form">
                        {
                        (this.state.formSpinner) ? 
                        <div className="loader">
                            <img alt="" src={spinner}/>
                        </div>
                        : null
                        }
                        {
                        (this.state.mailSent) ? 
                        <h3 className="msg_sent">Thank you for Contacting Us. We will contact you soon.</h3>
                        : null
                        }
                        {
                        (this.state.error != null) ? 
                        <h3 className="msg_err"><span className="msg_err_icon">!</span>{this.state.error}</h3>
                        : null
                        }
                        <form onSubmit={e => this.handleFormSubmit(e)} method="POST">
                            <div className="form-group">
                                <svg xmlns="http://www.w3.org/2000/svg" width="19.12" height="20.518" viewBox="0 0 19.12 20.518"><g transform="translate(-17.44)"><g transform="translate(17.44 11.557)"><path d="M27,288.389c-6.165,0-9.56,2.916-9.56,8.212a.749.749,0,0,0,.749.749H35.811a.749.749,0,0,0,.749-.749C36.56,291.306,33.165,288.389,27,288.389Zm-8.035,7.463c.295-3.96,2.994-5.966,8.035-5.966s7.741,2.006,8.035,5.966Z" transform="translate(-17.44 -288.389)" /></g><g transform="translate(22.033)"><path d="M137.016,0a4.908,4.908,0,0,0-4.967,5.067,4.984,4.984,0,1,0,9.934,0A4.908,4.908,0,0,0,137.016,0Zm0,8.961a3.7,3.7,0,0,1-3.47-3.894,3.405,3.405,0,0,1,3.47-3.569,3.443,3.443,0,0,1,3.47,3.569A3.7,3.7,0,0,1,137.016,8.961Z" transform="translate(-132.049)"/></g></g></svg>
                                <input type="text" className="form-control form-group-svg" name="name" placeholder="Enter Your Name" 
                                    value={this.state.controls.name.value} onChange={e => this.updateInputState("name", e.target.value)}
                                />
                                {
                                (!this.state.controls.name.valid && !this.state.formvalid) ? <div className="feedback-invalid">Please provide your name.</div> : null
                                }
                            </div>
                            <div className="form-group">
                                <svg xmlns="http://www.w3.org/2000/svg" width="19.683" height="14.762" viewBox="0 0 19.683 14.762"><g transform="translate(0 -64)"><g transform="translate(0 64)"><path d="M18.043,64H1.64A1.642,1.642,0,0,0,0,65.64V77.122a1.642,1.642,0,0,0,1.64,1.64h16.4a1.642,1.642,0,0,0,1.64-1.64V65.64A1.642,1.642,0,0,0,18.043,64Zm-16.4.82h16.4a.78.78,0,0,1,.17.034c-1.42,1.3-6.129,5.607-7.777,7.092a.823.823,0,0,1-1.191,0C7.6,70.462,2.889,66.154,1.47,64.855A.784.784,0,0,1,1.64,64.82Zm-.82,12.3V65.64a.792.792,0,0,1,.046-.227c1.087.995,4.372,4,6.5,5.938-2.123,1.824-5.41,4.94-6.505,5.984A.79.79,0,0,1,.82,77.122Zm17.223.82H1.64a.784.784,0,0,1-.185-.037c1.132-1.079,4.439-4.213,6.525-6l.716.648a1.638,1.638,0,0,0,2.289,0l.717-.648c2.086,1.784,5.393,4.918,6.525,6A.783.783,0,0,1,18.043,77.942Zm.82-.82a.792.792,0,0,1-.043.214c-1.1-1.045-4.382-4.161-6.505-5.984,2.13-1.937,5.415-4.943,6.5-5.938a.792.792,0,0,1,.046.227Z" transform="translate(0 -64)"/></g></g></svg>
                                <input type="email" className="form-control form-group-svg" name="email" placeholder="Enter Your Email"
                                    value={this.state.controls.email.value} onChange={e => this.updateInputState("email", e.target.value)}
                                />
                                {
                                (!this.state.controls.email.valid && !this.state.formvalid) ? <div className="feedback-invalid">Please provide your valid email</div> : null
                                }
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" rows="5" name="message" placeholder="Type Your Message"
                                    value={this.state.controls.message.value} onChange={e => this.updateInputState("message", e.target.value)}
                                ></textarea>
                                {
                                (!this.state.controls.message.valid && !this.state.formvalid) ? <div className="feedback-invalid">Please provide a message</div> : null
                                }
                            </div>
                            <button type="submit" className="btn">Send Message <svg xmlns="http://www.w3.org/2000/svg" width="20.834" height="17.857" viewBox="0 0 20.834 17.857"><path d="M17.456,23.206,24.9,15.765a1.488,1.488,0,0,0,0-2.1L17.456,6.22a1.488,1.488,0,0,0-2.1,2.1l4.9,4.9H5.987a1.488,1.488,0,1,0,0,2.976H20.252l-4.9,4.9a1.488,1.488,0,0,0,2.1,2.1Z" transform="translate(-4.499 -5.784)"/></svg></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
