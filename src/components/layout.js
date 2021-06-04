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
            meta={[
              { name: 'title', content: 'MAPLE beta 2.1' },
              { name: 'description', content: 'A cultural assessment tool from the Intercultural Skills Lab' },
              { name: 'keywords', content: 'maple, intercultural' },
              { name: 'og:type', content: 'website' },
              { name: 'og:url', content: 'https://interculturalskillslab.com' },
              { name: 'og:title', content: 'MAPLE beta 2.1' },
              { name: 'og:description', content: 'A cultural assessment tool from the Intercultural Skills Lab' },
              { name: 'og:image', content: `${data.site.siteMetadata.url}/preview.png` },
              { name: 'twitter:card', content: 'summary_large_image' },
              { name: 'twitter:url', content: 'https://interculturalskillslab.com' },
              { name: 'twitter:title', content: 'MAPLE beta 2.1' },
              { name: 'twitter:description', content: 'A cultural assessment tool from the Intercultural Skills Lab' },
              { name: 'twitter:image', content: `${data.site.siteMetadata.url}/preview.png` },

            ]}
          >
            <html lang="en" />
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
