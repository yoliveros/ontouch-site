import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<h1>OnTouch</h1>
		<Link to="/page-2/">Go to page 2</Link> <br />
		<Link to="/using-typescript/">Go to "Using TypeScript"</Link>
	</Layout>
)

export default IndexPage
