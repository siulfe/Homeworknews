const user = {
    username: undefined,
}

let blogs = []

loadLabels(blogClick)

function blogClick(event){
    let element = event.target

    while(!element.matches('.single-post'))
        element = element.parentElement

    const id = element.firstElementChild.innerHTML
    const blog = blogs.find(x => x.id == id)

    showSection(1)
    showChatMessage(blog)
    addInputChatEvents()
}