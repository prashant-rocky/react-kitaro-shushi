import React from "react";
import "../../assets/style.css"; // Import your custom styles
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "../../components/slider";
import Story from "../../components/ourStory";
import Services from "../../components/services";
import Menu from "../../components/menu";
import Gallery from "../../components/gallary";
import Chef from "../../components/chefs";
import Testimonial from "../../components/testimonial";
import Blog from "../../components/blog";
import Menuitem from "../../components/menu";

const Home = () => {
    return (
        <>
        
        < Slider />
        <hr />
        < Story />
        <hr />
        <Services/>
        <hr />
        <Menuitem />
        <hr />
        <Gallery />
        <hr />
        <Chef />
        <hr />
        <Testimonial />
        <hr />
        <Blog />
        </>
        
    )
}
export default Home;