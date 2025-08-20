import React from "react";

const BlogCard = ({ title, desc, image, date }) => {
    return (
        <div className="blog-card">
            <div className="imgBox">
                <img src={image} alt="error" className="w-100"/>
            </div>
            <div className="detailbox">
                <h5 className="py-3">{title}</h5>
                <p><span>{date}</span></p>
                <p>{desc}</p>
                <hr />
                <button className="mainBtn">read More</button>
                <p className="d-inline float-end"><span>10</span>Likes</p>
            </div>
        </div>
    );
}
export default BlogCard;