import React from "react";
import food from '../../assets/aboutFood.png'

const BlogSlider = () => {
    return (
        <section className="slider py-5">
            <div className="container py-md-5">
                <div className="row">
                    <div className="col-md-6 py-5 mt-md-3">
                        <h1 className="pt-5">From Our Kitchen Stories</h1>
                        <p>Explore the art of Japanese dining beyond the plate. Our blog shares culinary traditions, seasonal inspirations, chef’s insights, and stories that bring our food and culture closer to you.</p>
                    </div>
                    <div className="col-md-6">
                        <img src={food} alt="error" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogSlider;