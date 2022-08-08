import { useEffect, useState } from "react";
import ShowActionTop from "./ShowActionTop";

export default function ActiongymTop() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    fetch('http://127.0.0.1:8000/api/action-top')
    .then(res=>res.json())
    .then(data=>setData(data.data))
  },[]);
    return(
        <>
             <div className="row hover-effects image-hover">
              {
                data.map((data, key)=>(key<3)? <ShowActionTop data={data} key={key} />:'')
              }

            </div>
        </>
    );
}