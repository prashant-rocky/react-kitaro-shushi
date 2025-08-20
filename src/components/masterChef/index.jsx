import React from "react";
import MasterChefImg from "../../assets/master-chef.png";

const Masterchef = () => {
    return(
        <section className="masterchef pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6"> 
                        <img src={MasterChefImg} alt="error" className="img-fluid" />
                    </div> 
                    <div className="col-md-6 ps-5 py-5"> 
                        <h2 className="pt-5">Meet Our Master Chef</h2>
                        <h3 className="py-4">Crafted by the Hands of Experience</h3>
                        <p>Our Master Chef brings years of dedication, precision, and passion to every dish. Trained in the timeless traditions of Japanese cuisine, he carefully balances artistry and flavor, ensuring each plate is both visually stunning and unforgettable in taste. With a deep respect for seasonal ingredients and a commitment to excellence, his creations reflect not just skill, but a genuine love for sharing the heart of Japan through food.</p>
                    </div> 
                </div>
            </div>
        </section>
    )
}
export default Masterchef;