//Blog section
async function getBlogs(){
	return await axios.get('http://localhost:8080/blog')	
}

async function createBlog(blog){
	return await axios.post('http://localhost:8080/blog', blog)	
}

async function updateBlog(blog){
	return await axios.put('http://localhost:8080/blog', blog)	
}

