function clearList(){
	document.getElementById('blog-list').innerHTML = ''
}

function createLabel(data){
	const list = document.getElementById('blog-list')

	const html = getLabelHTML(data)

	list.innerHTML += html

	return true
}

function getLabelHTML(data){
	return `
		<div class="col-lg-4 col-md-6">
          <div class="card h-100">
             <div class="single-post post-style-2 post-style-3">
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
          </div>
       </div>
	`
}

const item = {
  preTitle: 'Prueba',
  title: 'Esta funcionando',
  description: 'lorem ipsum',
  img: '../static/img/icons8-team-355979.jpg',
  username: 'Luis',
  createdAt: '05/02/2024 21:26:00'
}

clearList()
createLabel(item)