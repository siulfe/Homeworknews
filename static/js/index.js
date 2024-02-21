const blogs = [
    {
        id: 1,
        preTitle: 'Prueba 1',
        title: 'Esta funcionando',
        description: 'lorem ipsum',
        img: '../static/img/icons8-team-355979.jpg',
        msg: [
            {
                text: "lorem ipsum",
                userName: "luis"
            },
            {
                text: "lorem ipsum",
                userName: "ricardo"
            },
            {
                text: "lorem ipsum",
                userName: "kevin"
            }
        ]
    },
    {
        id: 2,
        preTitle: 'Prueba 2',
        title: 'Esta funcionando',
        description: 'lorem ipsum',
        img: '../static/img/icons8-team-355979.jpg',
        msg: [
            {
                text: "lorem ipsum",
                userName: "yo"
            },
            {
                text: "lorem ipsum",
                userName: "yo"
            },
            {
                text: "lorem ipsum",
                userName: "yo"
            }
        ]
    },
    {
        id: 3,
        preTitle: 'Prueba 3',
        title: 'Esta funcionando',
        description: 'lorem ipsum',
        img: '../static/img/icons8-team-355979.jpg',
        msg: [
            {
                text: "lorem ipsum",
                userName: "yo"
            },
            {
                text: "lorem ipsum",
                userName: "yo"
            },
            {
                text: "lorem ipsum",
                userName: "yo"
            }
        ]
    }
];
function labelClick(event) {
    let element = event.target;
    while (!element.matches('.single-post'))
        element = element.parentElement;
    const id = element.firstElementChild.innerHTML;
    const blog = blogs.find(x => x.id == id);
    clearList();
    showSection(1);
    showBlog(blog);
    addMSGEvent();
}
for (let blog of blogs)
    createLabel(blog);
labelEvents(labelClick);
