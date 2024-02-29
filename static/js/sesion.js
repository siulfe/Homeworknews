const user = {
	username: Cookies.get('username', { path: '' })
}

document.getElementById('button-username').addEventListener('click', login)
document.getElementById('button-close-session').addEventListener('click', logout)

async function login(event){
    const username = document.getElementById('input-username')['value']

    if(!username) return

    const payload = { username }

    const data = await axios.post('http://localhost:8080/login', payload)

    if(data.status != 200) return

	user.username = username;   
	
	userLogged() 
}

async function logout(event){
	const data = await axios.post('http://localhost:8080/logout', user)

    if(data.status != 200) return

    user.username = undefined

	userLogout()
}

function userLogged(){
	Cookies.set('username', user.username, { path: '', expires: 36500 })

	document.getElementById('div-user-not-logged').classList.add('d-none')
	document.getElementById('div-user-logged').classList.remove('d-none')

	document.getElementById('span-username').innerHTML = user.username
}

function userLogout(){
	Cookies.remove('username', { path: '' })

	document.getElementById('div-user-not-logged').classList.remove('d-none')
	document.getElementById('div-user-logged').classList.add('d-none')

	document.getElementById('span-username').innerHTML = ''
}
