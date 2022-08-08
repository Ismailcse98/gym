export default function Gallery() {
    return (
        <>
              <div className="container filterable-portfolio">
            <div className="section-title">
                <h2>Photo Gallery</h2>
                <hr className="center"/>
            </div>
              <ul className="nav nav-pills center-pills portfolio-filter">
                <li role="presentation" className="active"><a href="#" data-filter="*">All</a></li>
                <li role="presentation"><a href="#" data-filter=".workout">Workout</a></li>
                <li role="presentation"><a href="#" data-filter=".spinning">Spinning</a></li>
                <li role="presentation"><a href="#" data-filter=".fitness">Fitness</a></li>
             </ul>
          <div className="row portfolio-items">
            <figure className="portfolio-item col-md-4 workout">
              <div className="magnific-img">
                <a className="image-popup-vertical-fit" href="img/images/gallery1.jpg">
                    <img src="/assets/img/images/gallery1.jpg" alt="" />
                </a>
              </div>
            </figure>
            <figure className="portfolio-item col-md-4 spinning">
              <div className="magnific-img">
                <a className="image-popup-vertical-fit" href="img/images/gallery4.jpg">
                    <img src="/assets/img/images/gallery4.jpg" alt="" />
                </a>
              </div>
            </figure>
            <figure className="portfolio-item col-md-4 spinning">
              <div className="magnific-img">
                <a className="image-popup-vertical-fit" href="img/images/gallery5.jpg">
                    <img src="/assets/img/images/gallery5.jpg" alt="" />
                </a>
              </div>
            </figure>
            <figure className="portfolio-item col-md-4 workout">
              <div className="magnific-img">
                <a className="image-popup-vertical-fit" href="img/images/gallery2.jpg">
                    <img src="/assets/img/images/gallery2.jpg" alt="" />
                </a>
              </div>
            </figure>
            <figure className="portfolio-item col-md-4 fitness">
              <div className="magnific-img">
                <a className="image-popup-vertical-fit" href="img/images/gallery7.jpg">
                    <img src="/assets/img/images/gallery7.jpg" alt="" />
                </a>
              </div>
            </figure>
            <figure className="portfolio-item col-md-4 design fitness">
              <div className="magnific-img">
                <a className="image-popup-vertical-fit" href="img/images/gallery8.jpg">
                    <img src="/assets/img/images/gallery8.jpg" alt="" />
                </a>
              </div>
            </figure>
            <figure className="portfolio-item col-md-4 workout">
              <div className="magnific-img">
                <a className="image-popup-vertical-fit" href="img/images/gallery3.jpg">
                    <img src="/assets/img/images/gallery3.jpg" alt="" />
                </a>
              </div>
            </figure>
            <figure className="portfolio-item col-md-4 fitness">
              <div className="magnific-img">
                <a className="image-popup-vertical-fit" href="img/images/gallery9.jpg">
                    <img src="/assets/img/images/gallery9.jpg" alt="" />
                </a>
              </div>
            </figure>
            <figure className="portfolio-item col-md-4 spinning">
              <div className="magnific-img">
                <a className="image-popup-vertical-fit" href="img/images/gallery6.jpg">
                    <img src="/assets/img/images/gallery6.jpg" alt="" />
                </a>
              </div>
            </figure>
          </div>
        </div>
        </>
    );
}