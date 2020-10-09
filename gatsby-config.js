module.exports = {
	siteMetadata: {
		title: `OnTouch`,
		description: `This is the OnTouch Site`,
		author: `OnTouch`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			// options: {
			// 	name: `images`,
			// 	path: `${__dirname}/src/images`,
			// },
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-offline`,
	],
}
