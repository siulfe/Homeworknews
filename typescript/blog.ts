function showBlog(blog){
	const list = document.getElementById('chat')

	for(let msg of blog.msg)
		list.innerHTML += getBlogMSGHTML(msg)
}

function getBlogMSGHTML(msg){
	return `
		<div class="row">
			<div class="col-12">
				<p class="msg ${ msg.userName == 'luis' ? 'msg-own': 'msg-foreign'}"><span class="b">${msg.userName}:</span> ${msg.text}</p>
			</div>
		</div>
	`
}