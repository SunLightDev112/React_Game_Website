import Header from '../header/header';
import hero_mobile from '../../images/hero_mobile.png';
import './hero.css';

export default function Hero() {
  return (
    <div className="hero">
      <Header/>
      <div className="hero_wrapper">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-sm-7 col-lg-6 hero_text">
              <h1>The simpler way <br/><span>to deal with Game</span></h1>
              <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
              <a href="#" className="btn">Download App</a>
            </div>
            <div className="col-sm-5 col-lg-4 hero_image_wrapper">
              <img className="hero_image" alt="" src={hero_mobile}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
