module.exports = function(eleventyConfig) {
	// pass files through
	eleventyConfig.addPassthroughCopy("src/css");
	eleventyConfig.addPassthroughCopy("src/js");
	return {
		dir: {
			// build -from- this dir
			input: "src",
			
			// build into this dir
			output: "_site"
		}
	};
};