import ActiongymBottom from "./ActiongymBottom";
import ActiongymTop from "./ActiongymTop";
import Banner from "./Banner";
import Menu from "./Menu";
import PushYourself from "./PushYourself";
import Trainers from "./Trainers";
import Gallery from "./Gallery";
import Opinion from "./Opinion";
import Membership from "./Membership";
import LatestNews from "./LatestNews";
import Footer from "./Footer";

export default function HomePage(){
 return(
<>
<header>
        <Menu/>
        <Banner/>
</header>
    
    <section>
        <div className="container">
            <div className="section-title">
                <h2>Welcome to ActionGym</h2>
                <hr className="center"/>
                <p>Always free from repetition repeat predefined chunks injected humour</p>
            </div>
           <ActiongymTop />
        </div>
        
        <ActiongymBottom />
        
        <Trainers />
        
        <PushYourself />
        
      <Gallery />
        
        <Opinion/>
        
        <Membership />
        
        <LatestNews/>
    
    </section>
    
   <Footer />

</>

 )

 

}



