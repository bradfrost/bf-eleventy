export default {
	tags: [
		"posts"
	],
	"layout": "layouts/post.njk",
	permalink: function(data) {
		// Get the input path (e.g., "content/blog/2025-12-15-melissa-graduated.md")
		const inputPath = data.page.inputPath;
		
		// Extract the filename without extension
		const filename = inputPath.split('/').pop().replace(/\.md$/, '');
		
		// Remove the date prefix (YYYY-MM-DD-) from the beginning
		const slug = filename.replace(/^\d{4}-\d{2}-\d{2}-/, '');
		
		// Return the permalink in the format /blog/post/[slug]
		return `/blog/post/${slug}/`;
	}
};
