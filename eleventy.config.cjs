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

	eleventyConfig.addTemplateFormats("scss");
	eleventyConfig.addExtension("scss", {
		outputFileExtension: "css",
		compile: async function(input) {
			return async (data) => { require("sass").compileString(input).css };
		},
	});
	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

	eleventyConfig.addFilter(
		"debug",
		(content) => `<pre>${inspect(content)}</pre>`
	);

	if(process.env.NODE_ENV==="deployment"){
		eleventyConfig.addGlobalData('date', 'git Last Modified');
	}
}
