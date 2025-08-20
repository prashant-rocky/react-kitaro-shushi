import React from "react";
import { Blogs2 } from "../../utils/data";

const BlogDetail = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    {
                        Blogs2.map(blog => {
                            return (
                                <div className="col-md-12 py-3" key={blog.id}>
                                    <div className="blog-card">
                                        <div className="blogImg">
                                            <img src={blog.imgSrc} alt="Blog" className="img-fluid w-100" />
                                        </div>
                                        <div className="content py-3">

                                            <h2>{blog.title}</h2>
                                            <p className="py-2">20 August 2025</p>
                                            <p>{blog.content}</p>
                                            <button className="mainBtn">read more</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}
export default BlogDetail;