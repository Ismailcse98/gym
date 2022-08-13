import { useEffect, useState } from "react";
import ShowTrainers from "./ShowTrainers";

export default function Trainers(params) {
    const [traindata, setData] = useState([]);
    useEffect(()=>{
        fetch('http://techsolutions-bd.com/gymadmin/api/trainer-info')
        .then(res=>res.json())
        .then(data=>setData(data.data))
    },[]);
    return (
        <>
            <div className="container">
                <div className="section-title">
                    <h2>Our Trainers</h2>
                    <hr className="center" />
                    <p>Always free from repetition repeat predefined chunks injected humour</p>
                </div>
                <div className="row">
                    {
                        traindata.map((data, key)=> (key<3)?<ShowTrainers  data={data} key={key}/>:'')
                    }
                    
                </div>
            </div>
        </>
    );
}