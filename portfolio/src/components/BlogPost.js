import "./styles/BlogPost.css";
import React from "react";
import logo from "../logo.svg";

const BlogPost = React.memo(() => {

    return (
        <section id="blog" className="blogpost">
            <h3 className="blog-indicator">Blog</h3>
            <div className="title-image-wrapper">
                <h1 className="blog-title">How to organize your CSS</h1>
                <img className="blog-image" src={logo}  alt="blog"></img>
            </div>
            <p className="blog-explanation">In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi.  

            Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.
            </p>

            <a className="blog-link" href="#home">dev.to</a>
        </section>
    )
})
export default BlogPost;