import React from "react";
import food from '../../assets/food.png'

const Slider = () => {
    return (
        <section className="slider py-5">
            <div className="container py-md-5">
                <div className="row">
                    <div className="col-md-6 py-5">
                        <h1>Authentic Japanese Flavors, Crafted with Heart</h1>
                        <p className="py-3">Step into a world where tradition meets creativity. Our chefs bring the finest seasonal ingredients from Japan’s markets to your table, transforming each dish into an unforgettable dining experience.</p>
                        <button className="mainBtn">Book Table</button>
                    </div>
                    <div className="col-md-6">
                        <img src={food} alt="error" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Slider;