const user = {
    username: 'Yo',
};
const blogs = [
    {
        id: 1,
        title: 'Prueba',
        preTitle: 'Blog',
        description: 'lorem ipsum',
        username: 'luis',
        createdAt: '06-02-2024',
        img: '../static/img/icons8-team-355979.jpg',
        msg: [
            {
                text: 'Lorem ipsum',
                username: 'Yo'
            }
        ]
    },
    {
        id: 2,
        title: 'Prueba',
        preTitle: 'Blog',
        description: 'lorem ipsum',
        username: 'luis',
        createdAt: '06-02-2024',
        img: '../static/img/icons8-team-355979.jpg',
        msg: [
            {
                text: 'Lorem ipsum',
                username: 'Yo'
            }
        ]
    },
    {
        id: 3,
        title: 'Prueba',
        preTitle: 'Blog',
        description: 'lorem ipsum',
        username: 'luis',
        createdAt: '06-02-2024',
        img: '../static/img/icons8-team-355979.jpg',
        msg: [
            {
                text: 'Lorem ipsum',
                username: 'Yo'
            },
            {
                text: 'Lorem ipsum',
                username: 'Alguien'
            }
        ]
    }
];
for (let blog of blogs)
    createLabel(blog);
addLabelEvents(blogClick);
function blogClick(event) {
    let element = event.target;
    while (!element.matches('.single-post'))
        element = element.parentElement;
    const id = element.firstElementChild.innerHTML;
    const blog = blogs.find(x => x.id == id);
    showSection(1);
    showChatMessage(blog);
    addInputChatEvents();
}
