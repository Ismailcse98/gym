import Banner from "./Banner";
import Menu from "./Menu";

import Footer from "./Footer";
import Touch from "./Touch";
import ContactForm from "./ContactForm";

export default function ContactPage(){
 return(
<>
<header>
        <Menu/>
        <Banner/>
</header>
    
    <section>
        <Touch />
        <ContactForm />
    
    </section>
    
   <Footer />

</>

 )

 

}



