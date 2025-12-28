export default {
	tags: [
		"client-works"
	],
	"layout": "layouts/post.njk",
	permalink: function(data) {
		// Get the input path (e.g., "content/client-works/2025-12-15-sample-client-work.md")
		const inputPath = data.page.inputPath;
		
		// Extract the filename without extension
		const filename = inputPath.split('/').pop().replace(/\.md$/, '');
		
		// Remove the date prefix (YYYY-MM-DD-) from the beginning
		const slug = filename.replace(/^\d{4}-\d{2}-\d{2}-/, '');
		
		// Return the permalink in the format /client-works/post/[slug]
		return `/client-works/post/${slug}/`;
	}
};

