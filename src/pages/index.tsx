import React, { FC } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage: FC = () => (
	<Layout>
		<SEO title="Home" />
		<Link to='Fit'>Fit</Link>
	</Layout>
)

export default IndexPage
