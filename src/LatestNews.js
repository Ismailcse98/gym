export default function LatestNews(params) {
    return (
        <>
        <div className="container">
            <div className="section-title">
                <h2>Latest News</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                <hr className="center"/>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="blog-preview">
                  <figure className="thumb-preview"><a href="#"><img src="/assets/img/images/blogs2.jpg" alt=""/></a></figure>
                  <div className="fig-caption">
                    <h3><a href="#">How To build muscle</a></h3>
                    <p>Explorer of the truth the master-builder of human happiness with no one rejects, because those who. </p>
                    <hr/>
                    <div className="preview-post-detalils">
                        <div className="post-categorie-left">
                            <p className="categorie">Yoga</p>
                        </div> 
                        <div className="post-stats-right">
                            <p className="comment">212</p>
                            <p className="share">89</p>
                        </div>  
                    </div>
                  </div>
                </div>  
              </div>
              <div className="col-lg-4  center-box">
                <div className="blog-preview">
                  <figure className="thumb-preview"><a href="#"><img src="/assets/img/images/blogs1.jpg" alt=""/></a></figure>
                  <div className="fig-caption">
                    <h3><a href="#">Exersicing your body</a></h3>
                    <p>Randomised words which don't look even slightly believable, versions have evolved over the years. </p>
                    <hr/>
                    <div className="preview-post-detalils">
                        <div className="post-categorie-left">
                            <p className="categorie">Cardio</p>
                        </div> 
                        <div className="post-stats-right">
                            <p className="comment">77</p>
                            <p className="share">133</p>
                        </div>  
                    </div>
                  </div>
                </div>  
              </div>
              <div className="col-lg-4">
                <div className="blog-preview">
                  <figure className="thumb-preview"><a href="#"><img src="/assets/img/images/blogs3.jpg" alt=""/></a></figure>
                  <div className="fig-caption">
                    <h3><a href="#">Best Yoga poses</a></h3>
                    <p>Page editors now use Lorem Ipsum as their default model text, established fact that a reader for all. </p>
                    <hr/>
                    <div className="preview-post-detalils">
                        <div className="post-categorie-left">
                            <p className="categorie">Muscle</p>
                        </div> 
                        <div className="post-stats-right">
                            <p className="comment">111</p>
                            <p className="share">193</p>
                        </div>  
                    </div>
                  </div>
                </div>  
              </div>
            </div>
        </div>
        </>
    );
}