import axios from "axios";
import { useState } from "react";


export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const SendMessage =()=>{
        axios.post('http://techsolutions-bd.com/gymadmin/api/store_message', {
            name: name,
            email: email,
            message: message
          })
          .then(function (response) {
            setName('');
            setEmail('');
            setMessage('');
            console.log(response.data.message);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <>
            <div className="container">
            <div className="section-title">
                <h3>Send Us a Message</h3>
                <p>Always free from repetition repeat predefined chunks injected humour</p>
            </div>
            <div className="contact-form">
              <div id="contact-form">
                    <div className="messages"></div>
                    <div className="controls">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <input id="form_name" type="text" name="name" onChange={(e)=>setName(e.target.value)} className="form-control custome-form" placeholder="Name" required="required" data-error="Firstname is required." value={name}/>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <input id="form_email" type="email" name="email" onChange={(e)=>setEmail(e.target.value)} className="form-control custome-form" placeholder="Email address" required="required" data-error="Valid email is required." value={email}/>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <textarea id="form_message" name="message" onChange={(e)=>setMessage(e.target.value)} className="form-control custome-form" placeholder="Your message" rows="3" required="required" data-error="Please,leave us a message." value={message}></textarea>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                        </div>
                        <div className="btn-send"><p><input type="submit" className="btn btn-custom btn-custom-small" value="SEND MESSAGE" onClick={SendMessage}/></p></div>
                    </div>
                </div>
            </div> 
        </div>
        </>
    );
}