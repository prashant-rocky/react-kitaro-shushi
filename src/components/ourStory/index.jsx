import React from 'react';
import img from'../../assets/storyImg.jpg';
import { useNavigate } from 'react-router-dom'; // 👈 import useNavigate hook
const Story = () => {
    const navigate = useNavigate(); // 👈 hook for navigation

  const goToAbout = () => {
    navigate("/about"); // 👈 this will take you to /about
  };
    return (
        <section className='ourStory py-5'>
            <div className="container text-center">
                <h1 className='mb-5'>Our Story, Rooted in Tradition</h1>
                <div className="row">
                    <div className="col-md-6 py-2">
                        <div className="img-box w-100 h-100">
                            <img src={img} alt="error" className='w-100'/>
                        </div>
                    </div>
                    <div className="col-md-6 text-start py-2 ps-5">
                        <h3>Our Story</h3>
                        <h2 className='py-2'>Where Craft Meets Japanese Hospitality</h2>
                        <p>Born from a passion for preserving Japan’s timeless culinary heritage, our restaurant celebrates the artistry of sushi and the spirit of true hospitality. Every dish begins with carefully chosen seasonal ingredients, sourced fresh to highlight the delicate balance of flavor, texture, and tradition.</p>
                        <p>Born from a passion for preserving Japan’s timeless culinary heritage, our restaurant celebrates the artistry of sushi and the spirit of true hospitality. </p>
                        <button className='mainBtn' onClick={goToAbout}>know more</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Story;