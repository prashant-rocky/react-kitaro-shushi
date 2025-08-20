import React from "react";
import food from '../../assets/aboutFood.png'

const AboutSlider = () => {
    return (
        <section className="slider py-5">
            <div className="container py-md-5">
                <div className="row">
                    <div className="col-md-6 py-5 mt-md-3">
                        <h1 className="pt-5">About Us</h1>
                        <p>We blend Japanese tradition with modern hospitality, serving seasonal sushi and crafted dishes that create unforgettable dining experiences.</p>
                    </div>
                    <div className="col-md-6">
                        <img src={food} alt="error" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSlider;