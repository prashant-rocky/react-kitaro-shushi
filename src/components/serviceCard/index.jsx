import React from "react";
import { useNavigate } from "react-router-dom";
const ServiceCard = ({ image, title, description }) => {
    const navigate = useNavigate();
    const goToMenu = () => {
        navigate("/menu");
    }   
    return (

        <div className="serviceCardBox text-center">
            <div className="serviceCardImage">
                <img src={image} alt="error" />
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
            <button className="mainBtn" onClick={goToMenu}>Read More</button>
        </div>
    )
}
export default ServiceCard;