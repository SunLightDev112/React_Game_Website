import './downloadLinks.css';
import download_links_group from '../../images/download_links_group.png';
import App_Store_Badge from '../../images/App_Store_Badge.png';
import Play_Store_badge from '../../images/Play_Store_badge.png';

function DownloadLinks() {
  return (
    <div className="downloadLinks">
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-sm-7 col-md-6 col-lg-6 downloadLinks_text">
                    <h1>Join 5 Million Members<br/><span>Who Saved This Game</span></h1>
                    <a href="#">
                        <img className="store_badge" alt="" src={App_Store_Badge}/>
                    </a>
                    <a href="#">
                        <img className="store_badge" alt="" src={Play_Store_badge}/>
                    </a>
                </div>
                <div className="col-sm-5 col-md-4 col-lg-4 downloadLinks_image">
                    <img alt="" src={download_links_group}/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default DownloadLinks;
