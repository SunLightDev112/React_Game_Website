import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './testimonials.css';
import testimonial_img from '../../images/testimonial_img.jpg';

export default class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="testimonials">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-8 col-md-5 testimonials-head">
                        <h3>Testimonials</h3>
                    </div>
                </div>
                <div className="row justify-content-center testimonials_slider">
                    <div className="col-sm-12 col-lg-10 ">
                        <Slider ref={c => (this.slider = c)} {...settings}>
                            <div key={1}>
                                <div className="row align-items-center testimonial_item">
                                    <div className="col-sm-12 col-md-6 col-lg-6 testimonial_image_wrapper">
                                        <div className="testimonial_image">
                                            <img alt="" src={testimonial_img}/>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="140" height="120" viewBox="0 0 140 120"><g transform="translate(-882 -3821)"><path d="M52.724,29.615a20,20,0,0,1,34.551,0l35.179,60.307A20,20,0,0,1,105.179,120H34.821A20,20,0,0,1,17.545,89.923Z" transform="translate(882 3821)" fill="#18ff00"/><path d="M8.355,24.457V39.273H23.171V24.457H15.763s0-7.408,7.408-7.408V9.64S8.355,9.64,8.355,24.457ZM45.4,17.048V9.64S30.58,9.64,30.58,24.457V39.273H45.4V24.457H37.988S37.988,17.048,45.4,17.048Z" transform="translate(924.646 3871.36)" fill="#fff"/></g></svg>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-6 testimonial_info">
                                        <h3 className="testimonial_title">Help Us to Improve<br/>Our Gaming Lavel</h3>
                                        <p>
                                            <svg className="testimonial_star fill" xmlns="http://www.w3.org/2000/svg" width="20.501" height="19.622" viewBox="0 0 20.501 19.622"><path d="M10.592.682,8.09,5.755l-5.6.816a1.227,1.227,0,0,0-.678,2.092l4.05,3.947-.958,5.575a1.225,1.225,0,0,0,1.778,1.291l5.008-2.633L16.7,19.477a1.226,1.226,0,0,0,1.778-1.291L17.52,12.61l4.05-3.947a1.227,1.227,0,0,0-.678-2.092l-5.6-.816L12.791.682a1.227,1.227,0,0,0-2.2,0Z" transform="translate(-1.441 0.001)"/></svg>
                                            <svg className="testimonial_star fill" xmlns="http://www.w3.org/2000/svg" width="20.501" height="19.622" viewBox="0 0 20.501 19.622"><path d="M10.592.682,8.09,5.755l-5.6.816a1.227,1.227,0,0,0-.678,2.092l4.05,3.947-.958,5.575a1.225,1.225,0,0,0,1.778,1.291l5.008-2.633L16.7,19.477a1.226,1.226,0,0,0,1.778-1.291L17.52,12.61l4.05-3.947a1.227,1.227,0,0,0-.678-2.092l-5.6-.816L12.791.682a1.227,1.227,0,0,0-2.2,0Z" transform="translate(-1.441 0.001)"/></svg>
                                            <svg className="testimonial_star fill" xmlns="http://www.w3.org/2000/svg" width="20.501" height="19.622" viewBox="0 0 20.501 19.622"><path d="M10.592.682,8.09,5.755l-5.6.816a1.227,1.227,0,0,0-.678,2.092l4.05,3.947-.958,5.575a1.225,1.225,0,0,0,1.778,1.291l5.008-2.633L16.7,19.477a1.226,1.226,0,0,0,1.778-1.291L17.52,12.61l4.05-3.947a1.227,1.227,0,0,0-.678-2.092l-5.6-.816L12.791.682a1.227,1.227,0,0,0-2.2,0Z" transform="translate(-1.441 0.001)"/></svg>
                                            <svg className="testimonial_star fill" xmlns="http://www.w3.org/2000/svg" width="20.501" height="19.622" viewBox="0 0 20.501 19.622"><path d="M10.592.682,8.09,5.755l-5.6.816a1.227,1.227,0,0,0-.678,2.092l4.05,3.947-.958,5.575a1.225,1.225,0,0,0,1.778,1.291l5.008-2.633L16.7,19.477a1.226,1.226,0,0,0,1.778-1.291L17.52,12.61l4.05-3.947a1.227,1.227,0,0,0-.678-2.092l-5.6-.816L12.791.682a1.227,1.227,0,0,0-2.2,0Z" transform="translate(-1.441 0.001)"/></svg>
                                            <svg className="testimonial_star fill" xmlns="http://www.w3.org/2000/svg" width="20.501" height="19.622" viewBox="0 0 20.501 19.622"><path d="M10.592.682,8.09,5.755l-5.6.816a1.227,1.227,0,0,0-.678,2.092l4.05,3.947-.958,5.575a1.225,1.225,0,0,0,1.778,1.291l5.008-2.633L16.7,19.477a1.226,1.226,0,0,0,1.778-1.291L17.52,12.61l4.05-3.947a1.227,1.227,0,0,0-.678-2.092l-5.6-.816L12.791.682a1.227,1.227,0,0,0-2.2,0Z" transform="translate(-1.441 0.001)"/></svg>
                                        </p>
                                        <p className="testimonial_text">Lorem ipsum, or lipsum as it is sometimes known, is  the dummy text used in laying out print, graphic or web nam designs. The passage is attributed to an unknown loper typesetter in the 15th century.</p>
                                        <h4 className="testimonial_name">Serena wiliams</h4>
                                        <p className="testimonial_role">Senior consultant</p>
                                    </div>
                                </div>
                            </div>
                            <div key={2}>
                                <div className="row align-items-center testimonial_item">
                                    <div className="col-sm-12 col-md-6 col-lg-6  testimonial_image_wrapper">
                                        <div className="testimonial_image">
                                            <img alt="" src={testimonial_img}/>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="140" height="120" viewBox="0 0 140 120"><g transform="translate(-882 -3821)"><path d="M52.724,29.615a20,20,0,0,1,34.551,0l35.179,60.307A20,20,0,0,1,105.179,120H34.821A20,20,0,0,1,17.545,89.923Z" transform="translate(882 3821)" fill="#18ff00"/><path d="M8.355,24.457V39.273H23.171V24.457H15.763s0-7.408,7.408-7.408V9.64S8.355,9.64,8.355,24.457ZM45.4,17.048V9.64S30.58,9.64,30.58,24.457V39.273H45.4V24.457H37.988S37.988,17.048,45.4,17.048Z" transform="translate(924.646 3871.36)" fill="#fff"/></g></svg>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-6 testimonial_info">
                                        <h3 className="testimonial_title">Help Us to Improve<br/>Our Gaming Lavel</h3>
                                        <p>
                                            <svg className="testimonial_star fill" xmlns="http://www.w3.org/2000/svg" width="20.501" height="19.622" viewBox="0 0 20.501 19.622"><path d="M10.592.682,8.09,5.755l-5.6.816a1.227,1.227,0,0,0-.678,2.092l4.05,3.947-.958,5.575a1.225,1.225,0,0,0,1.778,1.291l5.008-2.633L16.7,19.477a1.226,1.226,0,0,0,1.778-1.291L17.52,12.61l4.05-3.947a1.227,1.227,0,0,0-.678-2.092l-5.6-.816L12.791.682a1.227,1.227,0,0,0-2.2,0Z" transform="translate(-1.441 0.001)"/></svg>
                                            <svg className="testimonial_star fill" xmlns="http://www.w3.org/2000/svg" width="20.501" height="19.622" viewBox="0 0 20.501 19.622"><path d="M10.592.682,8.09,5.755l-5.6.816a1.227,1.227,0,0,0-.678,2.092l4.05,3.947-.958,5.575a1.225,1.225,0,0,0,1.778,1.291l5.008-2.633L16.7,19.477a1.226,1.226,0,0,0,1.778-1.291L17.52,12.61l4.05-3.947a1.227,1.227,0,0,0-.678-2.092l-5.6-.816L12.791.682a1.227,1.227,0,0,0-2.2,0Z" transform="translate(-1.441 0.001)"/></svg>
                                            <svg className="testimonial_star fill" xmlns="http://www.w3.org/2000/svg" width="20.501" height="19.622" viewBox="0 0 20.501 19.622"><path d="M10.592.682,8.09,5.755l-5.6.816a1.227,1.227,0,0,0-.678,2.092l4.05,3.947-.958,5.575a1.225,1.225,0,0,0,1.778,1.291l5.008-2.633L16.7,19.477a1.226,1.226,0,0,0,1.778-1.291L17.52,12.61l4.05-3.947a1.227,1.227,0,0,0-.678-2.092l-5.6-.816L12.791.682a1.227,1.227,0,0,0-2.2,0Z" transform="translate(-1.441 0.001)"/></svg>
                                            <svg className="testimonial_star fill" xmlns="http://www.w3.org/2000/svg" width="20.501" height="19.622" viewBox="0 0 20.501 19.622"><path d="M10.592.682,8.09,5.755l-5.6.816a1.227,1.227,0,0,0-.678,2.092l4.05,3.947-.958,5.575a1.225,1.225,0,0,0,1.778,1.291l5.008-2.633L16.7,19.477a1.226,1.226,0,0,0,1.778-1.291L17.52,12.61l4.05-3.947a1.227,1.227,0,0,0-.678-2.092l-5.6-.816L12.791.682a1.227,1.227,0,0,0-2.2,0Z" transform="translate(-1.441 0.001)"/></svg>
                                            <svg className="testimonial_star fill" xmlns="http://www.w3.org/2000/svg" width="20.501" height="19.622" viewBox="0 0 20.501 19.622"><path d="M10.592.682,8.09,5.755l-5.6.816a1.227,1.227,0,0,0-.678,2.092l4.05,3.947-.958,5.575a1.225,1.225,0,0,0,1.778,1.291l5.008-2.633L16.7,19.477a1.226,1.226,0,0,0,1.778-1.291L17.52,12.61l4.05-3.947a1.227,1.227,0,0,0-.678-2.092l-5.6-.816L12.791.682a1.227,1.227,0,0,0-2.2,0Z" transform="translate(-1.441 0.001)"/></svg>
                                        </p>
                                        <p className="testimonial_text">Lorem ipsum, or lipsum as it is sometimes known, is  the dummy text used in laying out print, graphic or web nam designs. The passage is attributed to an unknown loper typesetter in the 15th century.</p>
                                        <h4 className="testimonial_name">Serena wiliams</h4>
                                        <p className="testimonial_role">Senior consultant</p>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                        <div className="testimonials_slider_controls">
                            <button className="btn_nav" onClick={this.previous}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="31.759" height="15.938" viewBox="0 0 31.759 15.938"><g transform="translate(1.832 1.061)"><line x1="29.927" transform="translate(0 6.914)" fill="none" stroke="#707070" strokeWidth="3"/><path d="M10619.153,4303.146l-6.91,6.909,6.91,6.907" transform="translate(-10611.953 -4303.146)" fill="none" stroke="#707070" strokeWidth="3"/></g></svg>
                            </button>
                            <button className="btn_nav" onClick={this.next}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="31.759" height="15.938" viewBox="0 0 31.759 15.938"><g transform="translate(0 1.06)"><line x2="29.927" transform="translate(0 6.914)" fill="none" stroke="#707070" strokeWidth="3"/><path d="M10612.243,4303.146l6.91,6.909-6.91,6.907" transform="translate(-10589.517 -4303.146)" fill="none" stroke="#707070" strokeWidth="3"/></g></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
  }
}
