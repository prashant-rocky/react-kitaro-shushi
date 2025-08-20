import React from "react";
import MasterChefImg from "../../assets/master-chef.png";

const ContactForm = () => {
    return(
        <section className="masterchef pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6"> 
                        <img src={MasterChefImg} alt="error" className="img-fluid" />
                    </div> 
                    <div className="col-md-6 ps-5 pt-5"> 
                        <form id="form">
                            <h3>Send A Message</h3>
                            <h2 className="py-3">We’d Love to Hear From You</h2>
                            <div className="row">
                                <div className="col-md-6 py-2">
                                    <input type="text" required placeholder="Name"/>
                                </div>
                                <div className="col-md-6 py-2">
                                    <input type="email" required placeholder="Email"/>
                                </div>
                                <div className="col-md-6 py-2">
                                    <input type="tel" required placeholder="Phone"/>
                                </div>
                                <div className="col-md-6 py-2">
                                    <input type="text" required placeholder="website"/>
                                </div>
                                <div className="col-md-12 py-2">
                                    <textarea rows="5"className="w-100 p-3" required placeholder="Message" ></textarea>
                                </div>
                            </div>
                                <button className="mainBtn w-100">Send Message</button>
                        </form>
                    </div> 
                </div>
            </div>
        </section>
    )
}
export default ContactForm;