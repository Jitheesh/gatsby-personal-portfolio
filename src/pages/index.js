import React from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const IndexPage = ({
  data: {
    site,
  },
}) => {

  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
        <div className="header-agileinfo">
            <div className="header-banner text-center">
                <div className="container">
                    <div className="header-bottom">
                        <div className="col-md-4 col-sm-4 header-left">
                            <span className="fa fa-envelope-o icon" aria-hidden="true"></span>
                            <a href="mailto:jitheeshvo@gmail.com">jitheeshvo@gmail.com</a>
                        </div>
                        <div className="col-md-4 col-sm-4 logo">
                            <h1 className="main-title">
                                <a href="index.html">Jworks</a>

                            </h1>
                        </div>
                        <div className="col-md-4 col-sm-4 header-right">
                            <span className="fa fa-phone icon" aria-hidden="true"></span>
                            <p>+91 9895006626</p>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="banner-text">
                        <h4>welcome to my site!</h4>
                        <h3>i'm Jitheesh</h3>
                        <div className="banner-slide">
                            <h2 className="bnrtext">I'm a</h2>
                            <b>
							<span className="span1">
                                <br/>
								Magento developer
								<br/> PHP developer
								<br/> web developer
								<br/>
							</span>
                            </b>

                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="clear"></div>
            <nav className="navbar navbar-default">

                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse"
                            data-target="#bs-megadropdown-tabs">Menu
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
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
                    <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur sunt in culpa qui
                        .Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        sunt in culpa qui officia
                        deserunt mollit anim id est laboth. Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu
                        fugiat nulla pariatur sunt in culpa qui .</p>
                    <ul className="about-list">
                        <li>
                            <a href="#contact" className="wthree- about-link scroll">hire me</a>
                        </li>
                        <li>
                            <a href="#" className="wthree- about-link">download cv</a>
                        </li>
                    </ul>
                </div>
                <div className="about-btm-w3_agileits">
                    <div className="grid-flex">
                        <div className="ab1 main-about-grid1">
                            <span className="fa fa-graduation-cap  wthree-title-list" aria-hidden="true"></span>
                            <h4 className="aboutbtm-head">education</h4>
                            <h5>Phd Computer Science</h5>
                            <p>Ncididunt ut labore et t enim ad minim.</p>
                            <h5>University</h5>
                            <p>Ncididunt ut labore et t enim ad minim.</p>
                            <h5>High School</h5>
                            <p>Ncididunt ut labore et t enim ad minim.</p>
                        </div>
                        <div className="ab1 main-about-grid2">
                            <span className="fa fa-shield  wthree-title-list" aria-hidden="true"></span>
                            <h4 className="aboutbtm-head">expertise</h4>
                            <h5>Senior Interface Designer</h5>
                            <p>20XX-20XX</p>
                            <h5>Graphic Designer</h5>
                            <p>20XX-20XX</p>
                            <h5>Web Designer</h5>
                            <p>20XX-20XX</p>
                        </div>
                        <div className="ab1 main-about-grid3">
                            <span className="fa fa-trophy" aria-hidden="true"></span>
                            <h4 className="aboutbtm-head">awards</h4>
                            <h5>best website design</h5>
                            <p>Ncididunt ut labore et t enim ad minim.</p>
                            <h5>site of the day</h5>
                            <p>Ncididunt ut labore et t enim ad minim.</p>
                            <h5>premier UX award</h5>
                            <p>Ncididunt ut labore et t enim ad minim.</p>
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
                        <h3 className="progress-title">HTML5</h3>
                        <div className="progress  green">
                            <div className="progress-bar"  style={{ backgroundColor: '#5fad56', width: '90%' }}>
                                <div className="progress-value">90%</div>
                            </div>
                        </div>
                        <h3 className="progress-title">PHOTOSHOP</h3>
                        <div className="progress pink">
                            <div className="progress-bar"  style={{ backgroundColor: '#ff4b7d', width: '90%' }}>
                                <div className="progress-value">90%</div>
                            </div>
                        </div>
                        <h3 className="progress-title">JAVASCRIPT</h3>
                        <div className="progress yellow">
                            <div className="progress-bar" style={{ backgroundColor: '#e8d324', width: '80%' }}>
                                <div className="progress-value">80%</div>
                            </div>
                        </div>

                        <h3 className="progress-title">CSS3</h3>
                        <div className="progress blue">
                            <div className="progress-bar" style={{ backgroundColor: '#3485ef', width: '75%' }}>
                                <div className="progress-value">75%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="portfolio section-w3layouts main-pos" id="port">
            <h4 className="sec-title">recent works</h4>
        </div>

        <div className="contact-bottom section-w3layouts main-pos" id="contact">
            <h3 className="pos-title">get in touch</h3>
            <h4 className="sec-title">nice to meet you!</h4>
            <div className="contact-right-w3l">
                <h3 className="title-contact text-center">Have a question or just want to Get in Touch?</h3>
                <form action="#" method="post">
                    <div className="contact-input">
                        <input type="text" className="name" name="name" placeholder="First Name" required=""/>
                    </div>
                    <div className="contact-input">
                        <input type="text" className="name" name="name" placeholder="Last Name" required=""/>
                    </div>
                    <div className="contact-input">
                        <input type="email" className="name" name="name" placeholder="Email" required=""/>
                    </div>
                    <div className="contact-input">
                        <input type="text" className="name" name="name" placeholder="Subject" required=""/>
                    </div>
                    <div className="contact-input">
                        <textarea placeholder="Your Message" required=""></textarea>
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
      }
    }
  }
`
