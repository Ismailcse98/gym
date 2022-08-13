import { useEffect, useState } from "react";
import ShowActionTop from "./ShowActionTop";

export default function ActiongymTop() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    fetch('http://techsolutions-bd.com/gymadmin/api/action-top')
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