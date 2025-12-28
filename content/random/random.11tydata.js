export default {
	tags: [
		"random"
	],
	"layout": "layouts/post.njk",
	permalink: function(data) {
		// Get the input path (e.g., "content/random/2025-12-15-sample-random.md")
		const inputPath = data.page.inputPath;
		
		// Extract the filename without extension
		const filename = inputPath.split('/').pop().replace(/\.md$/, '');
		
		// Remove the date prefix (YYYY-MM-DD-) from the beginning
		const slug = filename.replace(/^\d{4}-\d{2}-\d{2}-/, '');
		
		// Return the permalink in the format /random/post/[slug]
		return `/random/post/${slug}/`;
	}
};

