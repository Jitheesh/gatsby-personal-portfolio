import React from "react"

const ProjectLink = ({ post }) => (
    <div className="filtr-item">

        <a src={post.frontmatter.thumbnail} alt={post.frontmatter.name + "- Featured Shot"} className="b-link-stripe b-animate-go  thickbox">

            <figure className="port-gird">
                {!!post.frontmatter.thumbnail && (
                <img width="462" height="347" src={post.frontmatter.thumbnail} alt={post.frontmatter.name + "- Featured Shot"}  className="img-responsive"/>
                )}
                <figcaption className="port-gird-caption-agileits_w3layouts">
                    <h3> {post.frontmatter.name}</h3>
                </figcaption>
            </figure>
        </a>
    </div>
)
export default ProjectLink
