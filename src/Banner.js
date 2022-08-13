import { useEffect, useState } from "react";

export default function Banner() {
    const [banner, setBanner] = useState({});
    useEffect(()=>{
        fetch('http://techsolutions-bd.com/gymadmin/api/banner')
        .then(res=>res.json())
        .then(data=>setBanner(data.data));
    },[]);
    return (
        <>


            <div className="carousel">
                <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel">
                    
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="carousel-img-1" style={{backgroundImage: `url(http://127.0.0.1:8000/assets/uploads/${banner.image})`}}></div>
                            <div className="carousel-caption">
                                <h1 className="animated fadeInLeft">{banner.heading}</h1>
                                <h5 className="animated fadeInUp">{banner.description}</h5>
                                <div className="slider-btn">
                                    <div className="animated inner-btn fadeInUp"><a href="#" className="btn btn-custom">START NOW</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}