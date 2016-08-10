//this is a test comment
function getURLSlug(words) {
	return words
		.replace(/\s+/g, '-')
		.toLowerCase();
}