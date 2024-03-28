function showChatMessage(blog) {
    for (let msg of blog.msg)
        addMSGTOChat(msg);
}
function addInputChatEvents() {
    document.getElementById('button-chat').addEventListener('click', sendMessage);
    document.getElementById('input-chat').addEventListener('keyup', sendMessage);
}
function addMSGTOChat(msg) {
    const chatDiv = document.getElementById('chat-div');
    chatDiv.innerHTML += chatMessageHTML(msg);
}
function chatMessageHTML(msg) {
    return `
		<div class="msg ${msg.username == user.userName ? 'msg-own' : 'msg-foreign'}">
			<p class="username"> ${msg.userName}</p>
			<p class="msg-text"> ${msg.text}</p>
		</div>
	`;
}
function sendMessage(event) {
    if (event.target.matches('input')) {
        if (event.keyCode != 13)
            return;
    }
    const input = document.getElementById('input-chat');
    if (!input.value)
        return;
    const msg = {
        text: input.value,
        username: user.username
    };
    addMSGTOChat(msg);
    input.value = '';
}
