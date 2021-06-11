import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../assets/scss/main.scss'

const Layout = ({ children, location }) => {

  let content;

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title,
              url
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
          >
            <html lang="en" />
            <meta key={1} name='description' content='MAPLE is a cultural assessment tool designed at the Rotman School that helps people understand their place in a diverse and multicultural workplace. Try the beta version of this tool and get a first glimpse of how MAPLE is set to change the way we relate to our work, and each other.' />
            <meta key={2} name='keywords' content='maple, intercultural' />
            <meta key={3} name='og:type' content='website' />
            <meta key={4} name='og:url' content='https://interculturalskillslab.com' />
            <meta key={5} name='og:title' content='MAPLE beta 2.1' />
            <meta key={6} name='og:description' content='MAPLE is a cultural assessment tool designed at the Rotman School that helps people understand their place in a diverse and multicultural workplace. Try the beta version of this tool and get a first glimpse of how MAPLE is set to change the way we relate to our work, and each other.' />
            <meta key={7} name='og:image' content={`${data.site.siteMetadata.url}/preview.png`} />
            <meta key={8} name='twitter:card' content='summary_large_image' />
            <meta key={9} name='twitter:url' content='https://interculturalskillslab.com' />
            <meta key={10} name='twitter:title' content='MAPLE beta 2.1' />
            <meta key={11} name='twitter:description' content='MAPLE is a cultural assessment tool designed at the Rotman School that helps people understand their place in a diverse and multicultural workplace. Try the beta version of this tool and get a first glimpse of how MAPLE is set to change the way we relate to our work, and each other.' />
            <meta key={12} name='twitter:url' content='https://interculturalskillslab.com' />
            <meta key={7} name='twitter:image' content={`${data.site.siteMetadata.url}/preview.png`} />
          </Helmet>
          <div>
            {children}
          </div>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
