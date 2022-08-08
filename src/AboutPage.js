import Banner from "./Banner";
import Menu from "./Menu";
import PushYourself from "./PushYourself";
import Trainers from "./Trainers";
import Gallery from "./Gallery";
import Opinion from "./Opinion";
import Membership from "./Membership";
import LatestNews from "./LatestNews";
import Footer from "./Footer";
import About from "./About";

export default function AboutPage(){
 return(
<>
<header>
        <Menu/>
        <Banner/>
</header>
    
    <section>
        <About />
        
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



