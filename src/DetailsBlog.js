import Banner from "./Banner";
import Menu from "./Menu";
import Footer from "./Footer";

export default function DetailsBlog(){
 return(
<>
<header>
        <Menu/>
        <Banner/>
</header>
    
    <section>
    <div class="container">
            <div class="row">
              <div class="col-lg-9">
                <div class="post-content">
                    <div class="post-caption-image">
                      <figure><img src="assets/img/images/post4.jpg" alt=""/></figure>
                      <div class="date-label">
                        <h6>10 NOV. 2018</h6>
                      </div>
                    </div>  
                    <div class="fig-caption">
                        <h2>Yoga positions that will help you be flexible</h2>
                        <div class="post-preview-details">
                           <p>By: John Doe &nbsp; / &nbsp; gym, fitness &nbsp; / &nbsp; 90 Comments </p> 
                        </div>
                        <div class="post-text">
                            <p>Majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable, has a more or less normal distribution of letters, as opposed to using</p>

                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                            <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated</p>
                        </div>
                    </div> 
                    
                </div>
              </div>
              <div class="col-lg-3">
                <aside class="blogs-right-side">
                    <div class="inner-sidebar">
                        <h5>Categories</h5>  
                        <hr class="short"/>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item"><a href="#">Muscle</a></li>
                          <li class="list-group-item"><a href="#">Cario Exercices</a></li>
                          <li class="list-group-item"><a href="#">Body Builder</a></li>
                          <li class="list-group-item"><a href="#">Yoga</a></li>
                          <li class="list-group-item"><a href="#">Pilates</a></li>
                        </ul>
                      </div>
                      <div class="inner-sidebar">
                          <h5>Recent News</h5>
                          <hr class="short"/>
                          <div class="media-list">
                            <div class="media-post">
                                <figure class="media-thumb"><a href="#"><img src="assets/img/images/post-thumb1.jpg" alt=""/></a></figure>
                              <div class="media-caption">
                                <h5><a href="#">Best Exercices Tips</a></h5> 
                                <p>6 Nov 2018</p>
                              </div>
                            </div>
                            <div class="media-post">
                              <figure class="media-thumb"><a href="#"><img src="assets/img/images/post-thumb2.jpg" alt=""/></a></figure>
                              <div class="media-caption">
                                <h5><a href="#">How to increase your biceps.</a></h5> 
                                <p>18 Oct 2018</p>
                              </div>
                            </div>
                            <div class="media-post">
                              <figure class="media-thumb"><a href="#"><img src="assets/img/images/post-thumb3.jpg" alt=""/></a></figure>
                              <div class="media-caption">
                                <h5><a href="#">Tips to improve your performance.</a></h5> 
                                <p>18 Sep 2018</p>
                              </div>
                            </div>
                            <div class="media-post">
                              <figure class="media-thumb"><a href="#"><img src="assets/img/images/post-thumb4.jpg" alt=""/></a></figure>
                              <div class="media-caption">
                                <h5><a href="#">Next Gen brands discuss terms.</a></h5> 
                                <p>12 Sep 2018</p>
                              </div>
                            </div>
                          </div>
                      </div>
                    <div class="inner-sidebar">
                        <h5>Tags</h5>
                        <hr class="short"/>
                        <div class="tags-lists">
                            <button class="btn btn-custom btn-tags" type="submit"><i class="fa fa-tags" aria-hidden="true"></i>&nbsp; Yoga</button>
                            <button class="btn btn-custom btn-tags" type="submit"><i class="fa fa-tags" aria-hidden="true"></i>&nbsp; Triceps</button>
                            <button class="btn btn-custom btn-tags" type="submit"><i class="fa fa-tags" aria-hidden="true"></i>&nbsp; Cardio</button>
                            <button class="btn btn-custom btn-tags" type="submit"><i class="fa fa-tags" aria-hidden="true"></i>&nbsp; Zumba</button>
                            <button class="btn btn-custom btn-tags" type="submit"><i class="fa fa-tags" aria-hidden="true"></i>&nbsp; Jogging</button>
                        </div>
                    </div>
                </aside>  
              </div>
            </div>
        </div>
    
    </section>
    
   <Footer />

</>

 )

 

}



