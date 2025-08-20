import React from "react";
import food from '../../assets/aboutFood.png'

const MenuSlider = () => {
    return (
        <section className="slider py-5">
            <div className="container py-md-5">
                <div className="row">
                    <div className="col-md-6 py-5 mt-md-3">
                        <h1 className="pt-5">Our Signature Menu</h1>
                        <p>Experience authentic Japanese flavors with our curated menu, featuring fresh sushi, sashimi, tempura, and chef’s seasonal specialties crafted to delight every guest.</p>
                    </div>
                    <div className="col-md-6">
                        <img src={food} alt="error" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MenuSlider;