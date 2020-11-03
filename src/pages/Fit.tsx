import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Fit = () =>
(
	<Layout>
		<SEO title='FIT' />
		<section style={{ position: 'relative', height: '70vh' }} >
			<a style={{
				padding: '2rem',
				backgroundColor: '#663399',
				borderRadius: '2%',
				textDecoration: 'none',
				color: '#FFF',
				fontSize: '18px',
				margin: 'auto',
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)'
			}}
				href="https://github.com/yoliveros/ontouch-site/raw/master/src/FitInstaller/FitInstaller.msi"
				download>
				Descargar FIT: Version de Prueba
			</a>
		</section>
	</Layout>
)

export default Fit