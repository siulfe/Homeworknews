"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLabel = exports.clearList = void 0;
function clearList() {
    document.getElementById('blog-list').innerHTML = '';
}
exports.clearList = clearList;
function createLabel(data) {
    var list = document.getElementById('blog-list');
    var html = getLabelHTML(data);
    list.innerHTML += html;
    return true;
}
exports.createLabel = createLabel;
function getLabelHTML(data) {
    return "\n\t\t<div class=\"col-lg-4 col-md-6\">\n          <div class=\"card h-100\">\n             <div class=\"single-post post-style-2 post-style-3\">\n                <div class=\"blog-info\">\n                   <h6 class=\"pre-title\"><a href=\"#\"><b>".concat(data.preTitle, "</b></a></h6>\n                   <h4 class=\"title\">\n                   \t<a href=\"#\"><b>").concat(data.title, "</b></a>\n                   </h4>\n                   <p>").concat(data.description, "</p>\n                   <div class=\"avatar-area\">\n                      <a class=\"avatar\" href=\"#\"><img src=\"").concat(data.img, "\" alt=\"Profile Image\"></a>\n                      <div class=\"right-area\">\n                         <a class=\"name\" href=\"#\"><b>").concat(data.username, "</b></a>\n                         <h6 class=\"date\" href=\"#\">").concat(data.createAt, "</h6>\n                      </div>\n                   </div>\n                </div>\n             </div>\n          </div>\n       </div>\n\t");
}
