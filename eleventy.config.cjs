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

	if(process.env.NODE_ENV==="deployment"){
		eleventyConfig.addGlobalData('date', 'git Last Modified');
	}
}
