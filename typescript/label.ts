
function clearLabelList(): void {
	document.getElementById('blog-list').innerHTML = ''
}

function createLabel(item): void {
	const list = document.getElementById('blog-list')

	list.innerHTML += __getLabelHTML(item)
}

function __getLabelHTML(item): string {
	return `
		<div class="col-lg-4 col-md-6">
          <div class="card h-100">
             <div class="single-post post-style-2 post-style-3">
                <div class="blog-info">
                   <h6 class="pre-title"><a href="#"><b>${item.preTitle}</b></a></h6>
                   <h4 class="title"><a href="#"><b>${item.title}</b></a>
                   </h4>
                   <p>${item.description}</p>
                   <div class="avatar-area">
                      <a class="avatar" href="#"><img src="${item.img}" alt="Profile Image"></a>
                      <div class="right-area">
                         <a class="name" href="#"><b>${item.username}</b></a>
                         <h6 class="date" href="#">${item.createdAt}</h6>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
	`
}

const blog = {
	title: 'Prueba',
	preTitle: 'Blog',
	description: 'lorem ipsum',
	username: 'luis',
	createdAt: '06-02-2024',
	img: '../static/img/icons8-team-355979.jpg'
}

createLabel(blog)