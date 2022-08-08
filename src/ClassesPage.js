import Banner from "./Banner";
import Menu from "./Menu";
import PushYourself from "./PushYourself";
import Gallery from "./Gallery";
import Opinion from "./Opinion";
import Membership from "./Membership";
import LatestNews from "./LatestNews";
import Footer from "./Footer";
import Classes from "./Classes";

export default function ClassesPage(){
 return(
<>
<header>
        <Menu/>
        <Banner/>
</header>
    
    <section>
        <Classes />
        
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



