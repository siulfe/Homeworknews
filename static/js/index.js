const user = {
    username: undefined,
}

let blogs = []
let blogUsed = undefined
let sectionIndex = 0

loadLabels(blogClick)

function blogClick(event){
    let element = event.target

    while(!element.matches('.single-post'))
        element = element.parentElement

    const id = element.firstElementChild.innerHTML
    blogUsed = blogs.find(x => x.id == id)

    showSection(1)
    showChatMessage(blogUsed)
    addInputChatEvents()
}


document.getElementById('img-logo').addEventListener('click',setMainSection)
document.getElementById('HomeWorkNews').addEventListener('click',setMainSection)

function setMainSection(){
    if(sectionIndex == 0) return

    blogUsed = undefined;

    loadLabels(blogClick)

    showSection(0)
}

