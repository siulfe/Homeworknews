let messageSending = false

function showChatMessage(blog) {
    clearChat()

    for (let msg of blog.msg)
        addMSGTOChat(msg);
}

function addInputChatEvents() {
    document.getElementById('button-chat').addEventListener('click', sendMessage);
    document.getElementById('input-chat').addEventListener('keyup', sendMessage);
}

function clearChat(){
    const chatDiv = document.getElementById('chat-div');
    chatDiv.innerHTML = '';
}

function addMSGTOChat(msg) {
    const chatDiv = document.getElementById('chat-div');
    chatDiv.innerHTML += chatMessageHTML(msg);
}

function chatMessageHTML(msg) {
    return `
		<div class="msg ${msg.userName == user.username ? 'msg-own' : 'msg-foreign'}">
			<p class="username"> ${msg.userName}</p>
			<p class="msg-text"> ${msg.text}</p>
		</div>
	`;
}

async function sendMessage(event) {
    if (event.target.matches('input'))
        if (event.keyCode != 13)
            return;

    if(messageSending) return

    messageSending = true

    const input = document.getElementById('input-chat');

    if (!input.value)
        return;

    const payload = {
        id: blogUsed.id,
        msg: [
            {
                text: input.value,
                userName: user.username
            }
        ]
    };


    await axios.put('http://localhost:8080/blog',payload)

    blogUsed.msg.push(payload.msg[0])

    addMSGTOChat(payload.msg[0]);

    input.value = '';

    messageSending = false
}
