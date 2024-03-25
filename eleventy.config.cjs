const { inspect } = require("node:util");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig){

	eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
	eleventyConfig.addPassthroughCopy({
		"./node_modules/@picocss/pico/css/pico.min.css": "./3rdparty/pico.min.css",
		"./aca.css": "./aca.css",
	}, {debug: true})
	eleventyConfig.addPassthroughCopy("**/*.jpg");

	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

	eleventyConfig.addFilter(
		"debug",
		(content) => `<pre>${inspect(content)}</pre>`
	);
	eleventyConfig.addDataExtension("yml,yaml", (content) => {
		return require('js-yaml').load(content)
	})
	eleventyConfig.addPairedShortcode("markdownify", function async (content) {
		return require('markdown-it')().render(content);
	})
	eleventyConfig.addShortcode("date", function async (date) {
		return `<time datetime=${date.toJSON()}>
			${date.toLocaleDateString('fr-FR',
				{year: 'numeric', month: 'long', day: 'numeric'}
		)}</time>`
	})

	if(process.env.NODE_ENV==="deployment"){
		eleventyConfig.addGlobalData('date', 'git Last Modified');
	}
}
