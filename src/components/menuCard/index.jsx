import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MenuCard = ({ image, title, description, price }) => {
    return (
        <div className="menuCardBox text-center d-flex no-wrap">
            <div className="menuCardImage">
                <img src={image} alt="error" height={100} width={100} />
            </div>
            <div className="content text-start m-3">
                <h5 className="d-inline-block">{title}</h5>
                <span>..............</span>
                <h5 className="d-inline-block float-end">{price}</h5>
                <p>{description}</p>
            </div>

        </div>
    )
}
export default MenuCard;