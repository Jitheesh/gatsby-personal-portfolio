import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingBannerQuery {
        site {
          siteMetadata {
           title
           description
           email
           phone
            home {
              title
              description
              welcome
              summary
            }
          }
        }
      }
    `}
    render={data => (
          <div className="header-banner text-center">
              <div className="container">
                  <div className="header-bottom">
                      <div className="col-md-4 col-sm-4 header-left">
                          <span className="fa fa-envelope-o icon" aria-hidden="true"></span>
                          <a href="mailto:jitheeshvo@gmail.com">{data.site.siteMetadata.email}</a>
                      </div>
                      <div className="col-md-4 col-sm-4 logo">
                          <h1 className="main-title">
                              <a href="index.html">{data.site.siteMetadata.title}</a>

                          </h1>
                      </div>
                      <div className="col-md-4 col-sm-4 header-right">
                          <span className="fa fa-phone icon" aria-hidden="true"></span>
                          <p>{data.site.siteMetadata.phone}</p>
                      </div>
                      <div className="clearfix"></div>
                  </div>
                  <div className="banner-text">
                      <h4>welcome to my site!</h4>
                      <h3>{data.site.siteMetadata.home.title}</h3>
                      <div className="banner-slide">
                          <h2 className="bnrtext">I'm a </h2>
                          <b>
                           <span className="span1">
                                <br/>
								Magento developer
								<br/> PHP developer
								<br/> web developer
								<br/>
							</span>
                          </b>
                          <p>{data.site.siteMetadata.home.summary}</p>
                          <div className="clearfix"></div>
                      </div>
                  </div>
              </div>
      </div>
    )}
  />
)