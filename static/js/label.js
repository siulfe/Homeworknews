let labelsLoading = false

async function loadLabels(callback){
  if(labelsLoading) return

  labelsLoading = true

  const data = await axios.get('http://localhost:8080/blog')

  blogs = data.data

  clearLabelList()

  for(let blog of blogs)
    createLabel(blog)

  addLabelEvents(callback)

  labelsLoading = false
}

function clearLabelList() {
  document.getElementById('blog-list').innerHTML = ''
}

function createLabel(item) {
  const list = document.getElementById('blog-list')

  list.innerHTML += __getLabelHTML(item)
}

function addLabelEvents(callback){
  const blogs = document.getElementsByClassName('single-post')

  for(let blog of blogs)
    blog.addEventListener('click', callback)
}

function __getLabelHTML(item) {
  return `
    <div class="col-lg-4 col-md-6">
          <div class="card h-100">
             <div class="single-post post-style-2 post-style-3">
                <span class="d-none">${item.id}</span>
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