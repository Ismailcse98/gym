import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
export default function Menu() {
    const [data, setData]= useState({})
    useEffect(() =>{
        fetch('http://127.0.0.1:8000/api/general')
        .then(res=>res.json())
        .then(data=>setData(data.data))
    },[])
    return (
        <>
            <div className="top-header">
                <div className="container">
                    <div className="leftside">
                        <div className="email-top"><p>{data.email}</p></div>
                        <div className="phone-top"><p>{data.phone}</p></div>
                        <div className="address-top"><p>{data.location}</p></div>
                    </div>
                    <div className="rightside">
                        <div className="social-items"><p><a href={data.facebook}><i className="fa fa-facebook" aria-hidden="true"></i></a></p></div>
                        <div className="social-items"><p><a href={data.twitter}><i className="fa fa-twitter" aria-hidden="true"></i></a></p></div>
                        <div className="social-items"><p><a href={data.instagram}><i className="fa fa-instagram" aria-hidden="true"></i></a></p></div>
                    </div>
                </div>
            </div>

            <nav>
                <div className="container">
                    <hr className="top" />
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand" href="index.html"><div className="logo-brand"><img src={'http://127.0.0.1:8000/assets/uploads/'+data.logo} alt="" /></div></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbar1">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">HOME</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">ABOUT</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/classes">CLASSES</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/package">PACKAGES</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/blog">BLOG</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="contact">CONTACT</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </nav>
        </>
    );
}