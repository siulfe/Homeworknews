document.getElementById('button-username').addEventListener('click', async ()=> {
	const username = document.getElementById('input-username').value

	if(!username) return

	const payload = {
		Username: username
	}

	const data = await axios.post('http://localhost:8080/login', payload)

	if(data.status == 200)
		user.username = username;
})