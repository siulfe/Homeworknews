var blogUse = undefined;

function showBlog(blog){
	const list = document.getElementById('chat')

	list.innerHTML = ''

	for(let msg of blog.msg)
		showBlogMessage(list, msg)

	showBlogInput()

	blogUse = blog;
}

function addMSGEvent(){
	document.getElementById('msg-button').addEventListener('click', eventSendMessage)
	document.getElementById('msg-input').addEventListener('keyup', eventSendMessage)
}

function chatBlogEvents(callback: (event, classSearch: string)=> void): void {
	const blogsC = document.getElementsByClassName('sidebar-blog-container')

	for(let blog of blogsC)
		blog.addEventListener('click', (event)=> callback(event, '.sidebar-blog-container'))
}

function showChatBlogList(){
	const list = document.getElementById('chat-blog-list')

	list.innerHTML = ''

	for(let blog of blogs)
		list.innerHTML += getBlogSidebarItemHTML(blog)
}

async function send(msg, blog){
	const oldMsg = blog.msg

	blog.msg = [msg]

	const data = await updateBlog(blog)

	blog.msg = oldMsg

	if(data.status == 200) blog.msg.push(msg);

	return 
}

function request(msg, blog){
	const list = document.getElementById('chat')

	if(!blog.msg) blog.msg = [];

	showBlogMessage(list, msg)
}

function showBlogMessage(list, msg){
	list.innerHTML += getBlogMSGHTML(msg)
}

function showBlogInput(){
	document.getElementById('input-msg-container').innerHTML = getInputMSGHTML()
}

function getBlogMSGHTML(msg){
	return `
		<div class="row">
			<div class="col-12 ${ msg.userName.toLowerCase() == user.username?.toLowerCase() ? 'msg-own': 'msg-foreign'}">
				<p class="b username">${msg.userName}</p>
				<p class="msg">${msg.text}</p>
			</div>
		</div>
	`
}

function getInputMSGHTML(){
	return `
	 	<div class="col-10 mr-0 p-0">
 			<input type="text" name="msg" id="msg-input" class="w-100 h-100">
        </div>
	 	<div class="col-2 ml-0 p-0" >
        	<button class="btn-small btn-primary w-100" id="msg-button">Enviar</button>
        </div>
	`
}

function getBlogSidebarItemHTML(data){
	return `
		<div class="container sidebar-blog-container">
            <span class="d-none">${data.id}</span>
			<div class="row">
               <div class="col-2">
					<a class="avatar">
						<img src="${data.img}" alt="Profile Image" class="sidebar-blog-img">
					</a>
               </div>
               <div class="col-10 sidebar-title-zone">
               		<div class="row">
               			<div class="col-12 sidebar-blog-title">
               				${data.title}
               			</div>
               		</div>
               		<div class="row">
               			<div class="col-12 sidebar-blog-pre-title">
							${data.preTitle}
               			</div>
               		</div>
               </div>
			</div>
		</div>
	`
}

function eventSendMessage(event){
	if(event.target.matches('input')){
		if(event.keyCode != 13) //13 = enter
			return
	}

	if(!user.username){
		alert('No hay una sesión activa')
		return
	}

	const input: HTMLInputElement = document.getElementById('msg-input') as HTMLInputElement

	if(!input.value) return

	const msg = {
		text: input.value,
		userName: user.username
	}

	send(msg, blogUse)
	
	input.value = ''

	request(msg, blogUse)
}

/*
<div class="single-post post-style-2 post-style-3">
                <span class="d-none">${data.id}</span>
                <div class="blog-info">
                   <h6 class="pre-title"><a href="#"><b>${data.preTitle}</b></a></h6>
                   <h4 class="title">
                   	<a href="#"><b>${data.title}</b></a>
                   </h4>
                   <p>${data.description}</p>
                   <div class="avatar-area">
                      <a class="avatar" href="#"><img src="${data.img}" alt="Profile Image"></a>
                      <div class="right-area">
                         <a class="name" href="#"><b>${data.username}</b></a>
                         <h6 class="date" href="#">${data.createdAt}</h6>
                      </div>
                   </div>
                </div>
             </div>
*/
