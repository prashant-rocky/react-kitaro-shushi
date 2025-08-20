import React from "react";

const ServiceCard = ({ image, title, description }) => {
    return (

        <div className="serviceCardBox text-center">
            <div className="serviceCardImage">
                <img src={image} alt="error" />
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
            <button className="mainBtn">Read More</button>
        </div>
    )
}
export default ServiceCard;