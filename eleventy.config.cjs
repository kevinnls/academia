const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig){

	eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
	eleventyConfig.addPassthroughCopy({
		"./node_modules/@picocss/pico/css/pico.min.*": "./",
	}, {debug: true})

	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
}
