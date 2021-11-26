import logo from '../../images/logo.png';
import './footer.css';

function Footer() {
  return (
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-12 col-lg-10">
                    <div className="row">

                        <div className="col-sm-12 col-md-3 footer-block footer-block1">
                            <a href="#" className="footer_logo">
                                <img alt="" src={logo}/>
                            </a>
                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out</p>
                            <a href="#" className="footer_social_link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12.928" height="24.03" viewBox="0 0 12.928 24.03"><path d="M13.257,12.9V8.315h3.7V6.007A6.039,6.039,0,0,1,18.58,1.754,5.158,5.158,0,0,1,22.508,0h3.677V4.59H22.508a.81.81,0,0,0-.648.4,1.61,1.61,0,0,0-.288.973V8.314h4.613V12.9H21.571V24.03H16.958V12.9Z" transform="translate(-13.257)"/></svg>
                            </a>
                            <a href="#" className="footer_social_link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="23.496" height="19.083" viewBox="0 0 23.496 19.083"><path d="M21.081,8.137c.015.209.015.417.015.626a13.607,13.607,0,0,1-13.7,13.7A13.608,13.608,0,0,1,0,20.3a9.962,9.962,0,0,0,1.163.06A9.644,9.644,0,0,0,7.141,18.3a4.824,4.824,0,0,1-4.5-3.34,6.073,6.073,0,0,0,.909.075,5.093,5.093,0,0,0,1.267-.164A4.816,4.816,0,0,1,.954,10.149v-.06a4.85,4.85,0,0,0,2.177.611A4.823,4.823,0,0,1,1.64,4.26,13.688,13.688,0,0,0,11.569,9.3a5.436,5.436,0,0,1-.119-1.1A4.82,4.82,0,0,1,19.784,4.9,9.481,9.481,0,0,0,22.84,3.739a4.8,4.8,0,0,1-2.117,2.654A9.654,9.654,0,0,0,23.5,5.647a10.352,10.352,0,0,1-2.415,2.49Z" transform="translate(0 -3.381)"/></svg>
                            </a>
                            <a href="#" className="footer_social_link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21.939" height="21.939" viewBox="0 0 21.939 21.939"><path d="M4.911,21.94H.362V7.292H4.911ZM2.634,5.294A2.647,2.647,0,1,1,5.268,2.635,2.656,2.656,0,0,1,2.634,5.294Zm19.3,16.646H17.4v-7.13c0-1.7-.034-3.879-2.365-3.879-2.365,0-2.727,1.846-2.727,3.756V21.94H7.76V7.292h4.362v2h.064a4.779,4.779,0,0,1,4.3-2.365c4.6,0,5.45,3.031,5.45,6.969V21.94Z" transform="translate(0 0)"/></svg>
                            </a>
                        </div>

                        <div className="col-sm-4 col-md-3 footer-block">
                            <h3 className="footer-header">About</h3>
                            <ul>
                                <li>
                                    <a href="#">Our Company</a>
                                </li>
                                <li>
                                    <a href="#">FAQ</a>
                                </li>
                                <li>
                                    <a href="#">Press</a>
                                </li>
                                <li>
                                    <a href="#">Pricing</a>
                                </li>
                                <li>
                                    <a href="#">Careers</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-sm-4 col-md-3 footer-block">
                            <h3 className="footer-header">Resources</h3>
                            <ul>
                                <li>
                                    <a href="#">Planning Tool</a>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                                <li>
                                    <a href="#">Forum</a>
                                </li>
                                <li>
                                    <a href="#">Marketplace</a>
                                </li>
                                <li>
                                    <a href="#">Advance Directive Forms</a>
                                </li>
                                <li>
                                    <a href="#">Trusted Decision Maker Form</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-sm-4 col-md-3 footer-block">
                            <h3 className="footer-header">Other</h3>
                            <ul>
                                <li>
                                    <a href="#">Terms of Use</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#">Code of Conduct</a>
                                </li>
                                <li>
                                    <a href="#">Account Help</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="col-md-12 col-lg-10 footer_copyright">
                    <p>Copyright © 2020, Company Name</p>
                </div>

            </div>
        </div>
    </div>
  );
}
export default Footer;






