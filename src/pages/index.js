import React from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import HeroHeaderBanner from "../components/HeroHeaderBanner"
import ProjectLink from "../components/project-link"

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {

    const Projects = edges
            .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
            .map(edge => <ProjectLink key={edge.node.id} post={edge.node} />)
  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
        <div className="header-agileinfo">
            <HeroHeaderBanner/>
            <div className="clear"></div>
            <nav className="navbar navbar-default">

                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse"
                            data-target="#bs-megadropdown-tabs">Menu
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
                    <ul>
                        <li>
                            <a href="index.html" className="active">Home</a>
                        </li>
                        <li>
                            <a href="#about" className="scroll">About Me</a>
                        </li>
                        <li>
                            <a href="#skills" className="scroll">my Skills</a>
                        </li>
                        <li>
                            <a href="#port" className="scroll">My Work</a>
                        </li>
                        <li>
                            <a href="#contact" className="scroll">Contact me</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

        <div className="about section-w3layouts main-pos" id="about">
            <h3 className="pos-title">about me</h3>
            <div className="container">
                <h4 className="sec-title">profile</h4>
                <div className="main-about-grid text-center">
                    <p>
                        {site.siteMetadata.home.description}
                    </p>
                    <ul className="about-list">
                        <li>
                            <a href="#contact" className="wthree- about-link scroll">hire me</a>
                        </li>
                        <li>
                            <a href={'files/jitheeshvo.pdf'} rel="noopener noreferrer"   target="_blank" className="wthree- about-link">download cv</a>
                        </li>
                    </ul>
                </div>
                <div className="about-btm-w3_agileits">
                    <div className="grid-flex">
                        <div className="ab1 main-about-grid1">
                            <span className="fa fa-graduation-cap  wthree-title-list" aria-hidden="true"></span>
                            <h4 className="aboutbtm-head">education</h4>
                            <h5>BACHELOR OF TECHNOLOGY</h5>
                            <p>Cochin university of science and technology </p>
                            <h5>HIGHER SECONDARY BOARD OF EDUCATION</h5>
                            <p>Brahmanandodayam Higher secondary School</p>
                            <h5>High School</h5>
                            <p>St.Sebastian H.S</p>
                        </div>
                        <div className="ab1 main-about-grid2">
                            <span className="fa fa-shield  wthree-title-list" aria-hidden="true"></span>
                            <h4 className="aboutbtm-head">expertise</h4>
                            <h5>TECHNICAL LEAD - Digital Boutique</h5>
                            <p>2019-present</p>
                            <h5>TEAM LEAD - Luminescent Digital</h5>
                            <p>2017-2019</p>
                            <h5>SENIOR SOFTWARE ENGINEER - Luminescent Digital</h5>
                            <p>2013-2017</p>
                            <h5>SOFTWARE ENGINEER - Luminescent Digital</h5>
                            <p>2011-2013</p>
                        </div>
                        <div className="ab1 main-about-grid3">
                            <span className="fa fa-trophy" aria-hidden="true"></span>
                            <h4 className="aboutbtm-head">awards</h4>
                            <h5>Magento certification</h5>
                            <p>M70-101</p>
                            <h5>Magento community contributor</h5>
                            <p>Helped Magento community to resolve both functionality and security issues</p>
                            <h5>Best Employ of the year</h5>
                            <p>After delivering multiple projects within deadlines</p>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        </div>

        <div className="skills section-w3layouts main-pos" id="skills">
            <h3 className="pos-title">expertise</h3>
            <div className="container">
                <h4 className="sec-title">my skills</h4>

                <div className="row">
                    <div className="skills-bar">
                        <h3 className="progress-title">Magento 2</h3>
                        <div className="progress  green">
                            <div className="progress-bar"  style={{ backgroundColor: '#5fad56', width: '95%' }}>
                                <div className="progress-value">95%</div>
                            </div>
                        </div>
                        <h3 className="progress-title">Magento 1</h3>
                        <div className="progress green">
                            <div className="progress-bar"  style={{ backgroundColor: '#ff4b7d', width: '90%' }}>
                                <div className="progress-value">90%</div>
                            </div>
                        </div>

                        <h3 className="progress-title">PHP</h3>
                        <div className="progress pink">
                            <div className="progress-bar"  style={{ backgroundColor: '#de907c', width: '90%' }}>
                                <div className="progress-value">90%</div>
                            </div>
                        </div>


                        <h3 className="progress-title">MYSQL</h3>
                        <div className="progress green">
                            <div className="progress-bar"  style={{ backgroundColor: '#271eb1', width: '85%' }}>
                                <div className="progress-value">85%</div>
                            </div>
                        </div>

                        <h3 className="progress-title">JAVASCRIPT</h3>
                        <div className="progress yellow">
                            <div className="progress-bar" style={{ backgroundColor: '#e8d324', width: '80%' }}>
                                <div className="progress-value">80%</div>
                            </div>
                        </div>

                        <h3 className="progress-title">CSS3</h3>
                        <div className="progress green">
                            <div className="progress-bar" style={{ backgroundColor: '#1f7a83', width: '75%' }}>
                                <div className="progress-value">75%</div>
                            </div>
                        </div>

                        <h3 className="progress-title">HTML5</h3>
                        <div className="progress green">
                            <div className="progress-bar" style={{ backgroundColor: '#3485ef', width: '75%' }}>
                                <div className="progress-value">75%</div>
                            </div>
                        </div>

                        <h3 className="progress-title">Version Control/Git</h3>
                        <div className="progress green">
                            <div className="progress-bar" style={{ backgroundColor: '#4a9656', width: '85%' }}>
                                <div className="progress-value">85%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="portfolio section-w3layouts main-pos" id="port">
            <h4 className="sec-title">Projects</h4>
            <div className="filtr-container">
                {Projects}
            </div>
        </div>

        <div className="contact-bottom section-w3layouts main-pos" id="contact">
            <h3 className="pos-title">get in touch</h3>
            <h4 className="sec-title">nice to meet you!</h4>
            <div className="contact-right-w3l">
                <h3 className="title-contact text-center">Have a question or just want to Get in Touch?</h3>
                <form action="https://sendmail.w3layouts.com/SubmitContactForm" method="post" target="_blank" rel="noopener noreferrer" >
                    <div className="contact-input">
                        <input type="text" className="name" name="w3lName" placeholder="Name" required=""/>
                    </div>
                    <div className="contact-input">
                        <input type="email" className="name" name="w3lSender" placeholder="Email" required=""/>
                    </div>
                    <div className="contact-input">
                        <input type="text" className="name" name="w3lSubject" placeholder="Subject" required=""/>
                    </div>
                    <div className="contact-input">
                        <textarea placeholder="Your Message" required="" name="w3lMessage"></textarea>
                    </div>
                    <input type="submit" value="SEND MESSAGE"/>
                </form>
            </div>
            <div className="clearfix"></div>
        </div>
    </Layout>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query indexPageQuery {
      site {
          siteMetadata {
              title
              description
              home {
                  title
                  description
              }
          }
      }
      allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { template: { eq: "ProjectPost" } } }
      ) {
          edges {
              node {
                  id
                  excerpt(pruneLength: 250)
                  frontmatter {
                      date(formatString: "MMMM DD, YYYY")
                      name
                      thumbnail
                  }
              }
          }
      }
  }
`
