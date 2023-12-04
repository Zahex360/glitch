"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Article = function Article(title, date, content, imageSrc) {
  _classCallCheck(this, Article);

  this.title = title;
  this.date = date;
  this.content = content;
  this.imageSrc = imageSrc;
};

var articles = [new Article("The Future of Artificial Intelligence: Trends to Watch in 2023 and Beyond", "October 20, 2023", "Artificial Intelligence (AI) is rapidly evolving, shaping the future of computer science...", "images/AI.jpg"), new Article("The Importance of Cybersecurity Education: Protecting the Digital World", "October 20, 2023", "In our increasingly digital world, cybersecurity education is paramount...", "images/cyber.jpg")];

function populateArticles() {
  var container = document.getElementById("container");
  articles.forEach(function (article) {
    var articleElement = document.createElement("article");
    articleElement.innerHTML = "\n        <div class=\"postcard\">\n          <figure>\n            <img src=\"".concat(article.imageSrc, "\" alt=\"Article Image\" class=\"img-fluid\" />\n          </figure>\n          <div class=\"head_body\">\n            <div class=\"title-date-container\">\n              <h2>").concat(article.title, "</h2>\n              <p class=\"date\">").concat(article.date, "</p>\n            </div>\n            <p class=\"par\">").concat(article.content, "</p>\n          </div>\n        </div>\n      ");
    container.appendChild(articleElement);
  });
}

window.addEventListener("load", function () {
  populateArticles();
});