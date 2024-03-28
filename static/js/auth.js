document.getElementById('button-username').addEventListener('click', async ()=> {
	const username = document.getElementById('input-username').value

	if(!username) return

	const payload = {
		Username: username
	}

	const data = await axios.post('http://localhost:8080/login', payload)

	if(data.status == 200)
		userLogged(username)
})

document.getElementById('button-close-session').addEventListener('click', async ()=> {
	if(!sessionStorage.getItem('username')) return

	const payload = {
		Username: sessionStorage.getItem('username')
	}

	const data = await axios.post('http://localhost:8080/logout', payload)

	if(data.status == 200)
		userLogout()
})

function userLogged(username){
	user.username = username;

	document.getElementById('span-username').innerHTML = username

	if(!sessionStorage.getItem('username'))
		sessionStorage.setItem('username', username)

	document.getElementById('div-user-not-logged').classList.add('d-none')
	document.getElementById('div-user-logged').classList.remove('d-none')

	document.getElementById('input-username').value = ''

	if(blogUsed)
		showChatMessage(blogUsed)
}

function userLogout(){
	user.username = undefined;

	document.getElementById('span-username').innerHTML = ''

	sessionStorage.removeItem('username')

	document.getElementById('div-user-not-logged').classList.remove('d-none')
	document.getElementById('div-user-logged').classList.add('d-none')

	if(blogUsed)
		showChatMessage(blogUsed)
}

if(sessionStorage.getItem('username'))
	userLogged(sessionStorage.getItem('username'))