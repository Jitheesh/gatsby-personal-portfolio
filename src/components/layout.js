import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="site-wrapper">
      {children}
        <div className="footer-main">
            <div className="footer-social">
                <h4>follow me</h4>
                <ul>
                    <li>
                        <a href="http://facebook.com/jitheesh.vo">
                            <span className="fa fa-facebook "></span>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Jitheesh/">
                            <span className="fa fa-github"></span>
                        </a>
                    </li>
                    <li>
                        <a href="https://in.linkedin.com/in/jitheeshvo">
                            <span className="fa fa-linkedin"></span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="cpy-right">
                <p>© {new Date().getFullYear()} Jworks. All rights reserved | Design by
                    <a href="http://w3layouts.com"> W3layouts.</a>
                </p>
            </div>
        </div>
    </div>
  )
}
