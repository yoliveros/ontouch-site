import React from 'react'

const driveApi = () => {
	return fetch('https://www.googleapis.com/drive/v3/files/0BwwA4oUTeiV1UVNwOHItT0xfa2M')
		.then(data => console.log(data))
		.catch(err => console.log(err))
}

const Fit = () => {
	driveApi()

	return (
		<section>
			Hola guorld
		</section>
	)
}

export default Fit