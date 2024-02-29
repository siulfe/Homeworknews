let blogs = []

// ../static/img/icons8-team-355979.jpg


function blogClick(event, classSearch){
	let element = event.target

	while(!element.matches(classSearch))
		element = element.parentElement

	const id = element.firstElementChild.innerHTML
	const blog = blogs.find(x => x.id == id)

	clearList()
	showSection(1)
	showBlog(blog)
	addMSGEvent()
	showChatBlogList()
	chatBlogEvents(blogClick)
}

async function init(){
	const data = await getBlogs()

	if(data.status == 200)
		blogs = data.data

	for(let blog of blogs)
		createLabel(blog)

	labelEvents(blogClick)
}

init()

