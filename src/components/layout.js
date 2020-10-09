/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

	return (
		<div style={{
			position: 'relative',
			minHeight: '100vh',
			textAlign: 'center'
		}}>
			<Header siteTitle={data.site.siteMetadata?.title || `Title`} />
			<main style={{
				paddingBottom: '2.5rem'
			}}>
				{children}
			</main>
			<footer style={{
				position: 'absolute',
				bottom: '0',
				width: '100%',
				height: '2.5rem'
			}}>
				© {new Date().getFullYear()}, OnTouch
			</footer>
		</div>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
