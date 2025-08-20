import React from "react";
import { Blogs } from "../../utils/data";
import BlogCard from "../blogCard";

const Blog = () => {
    return (
        <section className="blog py-5">
            <div className="container">
                <div className="row">
                    {
                        Blogs.map(blog => {
                            return (

                                <div className="col-md-4 py-3" key={blog.id}>
                                    <BlogCard
                                        image={blog.imgSrc}
                                        title={blog.title}
                                        desc={blog.description}
                                        date={blog.date}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Blog;