function clearLabelList() {
    document.getElementById('blog-list').innerHTML = '';
}
function createLabel(item) {
    var list = document.getElementById('blog-list');
    list.innerHTML += __getLabelHTML(item);
}
function __getLabelHTML(item) {
    return "\n\t\t<div class=\"col-lg-4 col-md-6\">\n          <div class=\"card h-100\">\n             <div class=\"single-post post-style-2 post-style-3\">\n                <div class=\"blog-info\">\n                   <h6 class=\"pre-title\"><a href=\"#\"><b>".concat(item.preTitle, "</b></a></h6>\n                   <h4 class=\"title\"><a href=\"#\"><b>").concat(item.title, "</b></a>\n                   </h4>\n                   <p>").concat(item.description, "</p>\n                   <div class=\"avatar-area\">\n                      <a class=\"avatar\" href=\"#\"><img src=\"").concat(item.img, "\" alt=\"Profile Image\"></a>\n                      <div class=\"right-area\">\n                         <a class=\"name\" href=\"#\"><b>").concat(item.username, "</b></a>\n                         <h6 class=\"date\" href=\"#\">").concat(item.createdAt, "</h6>\n                      </div>\n                   </div>\n                </div>\n             </div>\n          </div>\n       </div>\n\t");
}
var blog = {
    title: 'Prueba',
    preTitle: 'Blog',
    description: 'lorem ipsum',
    username: 'luis',
    createdAt: '06-02-2024',
    img: '../static/img/icons8-team-355979.jpg'
};
createLabel(blog);
