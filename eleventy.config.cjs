const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig){

	eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
	eleventyConfig.addPassthroughCopy({
		"./node_modules/@picocss/pico/css/pico.min.*": "./",
		"./aca.css": "./",
	}, {debug: true})
	eleventyConfig.addPassthroughCopy("**/*.jpg");

	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
}
