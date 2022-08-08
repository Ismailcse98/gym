import Banner from "./Banner";
import Menu from "./Menu";
import PushYourself from "./PushYourself";
import Opinion from "./Opinion";
import Membership from "./Membership";
import LatestNews from "./LatestNews";
import Footer from "./Footer";
import Package from "./Package";

export default function PackagePage(){
 return(
<>
<header>
        <Menu/>
        <Banner/>
</header>
    
    <section>
        <Package />
        <PushYourself />
        
        <Opinion/>
        
        <Membership />
        
        <LatestNews/>
    
    </section>
    
   <Footer />

</>

 )

 

}



