import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Fit = () =>
(
	<Layout>
		<SEO title='FIT' />
		<section style={{ marginTop: '10vh' }} >
			<a style={{
				padding: '2rem',
				backgroundColor: '#663399',
				borderRadius: '25%',
				textDecoration: 'none',
				color: '#FFF',
				fontSize: '18px'
			}}
				href="https://github.com/yoliveros/ontouch-site/raw/master/src/FitInstaller/FitInstaller.msi"
				download>
				Descargar FIT
			</a>
		</section>
	</Layout>
)

export default Fit