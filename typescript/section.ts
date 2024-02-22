function showSection(number){
	const sections = document.getElementsByTagName('section')

	for(let i =0; i< sections.length; i++){
		if(i == number)
			sections[i].classList.remove('d-none')
		else
			sections[i].classList.add('d-none')
	}
}