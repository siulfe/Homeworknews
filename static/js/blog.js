function showBlog(blog) {
    const list = document.getElementById('chat');
    for (let msg of blog.msg)
        showBlogMessage(list, msg);
    showBlogInput();
}
function addMSGEvent() {
    document.getElementById('msg-button').addEventListener('click', (event) => {
        const input = document.getElementById('msg-input');
        if (!input.value)
            return;
        const msg = input.value;
        const resp = send(msg, 'luis');
        if (resp) {
            input.value = '';
            request(msg, 'luis');
        }
    });
}
function send(msg, username) {
    return true;
}
function request(text, userName) {
    const list = document.getElementById('chat');
    showBlogMessage(list, { text, userName });
}
function showBlogMessage(list, msg) {
    list.innerHTML += getBlogMSGHTML(msg);
}
function showBlogInput() {
    document.getElementById('input-msg-container').innerHTML = getInputMSGHTML();
}
function getBlogMSGHTML(msg) {
    return `
		<div class="row">
			<div class="col-12 ${msg.userName == 'luis' ? 'msg-own' : 'msg-foreign'}">
				<p class="b username">${msg.userName}</p>
				<p class="msg">${msg.text}</p>
			</div>
		</div>
	`;
}
function getInputMSGHTML() {
    return `
	 	<div class="col-10 mr-0 p-0">
 			<input type="text" name="msg" id="msg-input" class="w-100 h-100">
        </div>
	 	<div class="col-2 ml-0 p-0" >
        	<button class="btn-small btn-primary w-100" id="msg-button">Enviar</button>
        </div>
	`;
}
