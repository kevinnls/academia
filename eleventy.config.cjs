const { inspect } = require("node:util");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig){

	eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
	eleventyConfig.addPassthroughCopy({
		//"./node_modules/@picocss/pico/css/pico.min.*": "./",
		"./pico.min.css": "./pico.min.css",
		"./aca.css": "./aca.css",
	}, {debug: true})
	eleventyConfig.addPassthroughCopy("**/*.jpg");

	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

	eleventyConfig.addFilter(
		"debug",
		(content) => `<pre>${inspect(content)}</pre>`
	);
}
