function clearList() {
    document.getElementById('blog-list').innerHTML = '';
}
function createLabel(data) {
    var list = document.getElementById('blog-list');
    var html = getLabelHTML(data);
    list.innerHTML += html;
    return true;
}
function getLabelHTML(data) {
    return "\n\t\t<div class=\"col-lg-4 col-md-6\">\n          <div class=\"card h-100\">\n             <div class=\"single-post post-style-2 post-style-3\">\n                <div class=\"blog-info\">\n                   <h6 class=\"pre-title\"><a href=\"#\"><b>".concat(data.preTitle, "</b></a></h6>\n                   <h4 class=\"title\">\n                   \t<a href=\"#\"><b>").concat(data.title, "</b></a>\n                   </h4>\n                   <p>").concat(data.description, "</p>\n                   <div class=\"avatar-area\">\n                      <a class=\"avatar\" href=\"#\"><img src=\"").concat(data.img, "\" alt=\"Profile Image\"></a>\n                      <div class=\"right-area\">\n                         <a class=\"name\" href=\"#\"><b>").concat(data.username, "</b></a>\n                         <h6 class=\"date\" href=\"#\">").concat(data.createdAt, "</h6>\n                      </div>\n                   </div>\n                </div>\n             </div>\n          </div>\n       </div>\n\t");
}
function labelEvents() {
    var labels = Array.prototype.slice.call(document.getElementsByClassName('single-post'));
    for (var _i = 0, labels_1 = labels; _i < labels_1.length; _i++) {
        var label = labels_1[_i];
        label.addEventListener('click', function (event) {
            var target = event.target;
            var title = target.children[1].children[0].lastChild.innerHTML;
            var labelEncontrada = labels.find(function (x) { return x.children[0].children[1].children[0].lastChild.innerHTML == title; });
            console.log(labelEncontrada);
        });
    }
}
