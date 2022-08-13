import { useEffect, useState } from "react";
import ShowActionBottomLeft from "./ShowActionBottomLeft";
import ShowActionBottomRight from "./ShowActionBottomRight";

export default function ActiongymBottom() {
    const[actionBottom, setActionBottom] = useState([]);
    useEffect(()=>{
        fetch('http://techsolutions-bd.com/gymadmin/api/action-bottom')
        .then(res=>res.json())
        .then(data=>setActionBottom(data.data))
    },[]);
    return (
        <>
            <div className="container-fluid inner-color">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="aside-left">
                                {
                            actionBottom.map((data, key)=>(key<3)?<ShowActionBottomLeft data={data} key={key} /> :'')
                                }
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <figure className="center-pic"><img src="/assets/img/images/img1.png" alt="" /></figure>
                        </div>
                        <div className="col-lg-4">
                            <div className="aside-right">
                                {
                                    actionBottom.map((data,key)=>(key>2 && key<6)? <ShowActionBottomRight data={data} key={key}/> :'')
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}