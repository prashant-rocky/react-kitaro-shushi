import React from "react";
import AboutSlider from "../../components/aboutSlider";
import Story from "../../components/ourStory";
import Services from "../../components/services";
import Masterchef from "../../components/masterChef";

const About = () => {
    return(
        <>
            < AboutSlider />
            <hr />
            <Story />
            <hr />
            <Services />
            <hr />
            <Masterchef />

        </>
    )
}
export default About;