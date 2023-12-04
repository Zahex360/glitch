"use strict";

var blogPosts = [{
  title: "The Craft of Web Development",
  date: "October 6, 2023",
  imageSrc: "images/webdev.jpeg",
  content: "Web development marries artistry and technology to breathe life into digital experiences. It serves as the backbone of the online world, translating ideas into captivating websites and applications. Front-end developers paint the user interface with creativity, while back-end engineers build the functionality that powers it all. This dynamic field evolves continually, embracing new technologies and trends. In this blog, we'll delve into the captivating world of web development, exploring its intricacies, trends, and boundless possibilities."
}, {
  title: "Spicing Up Your Website with Stunning Backgrounds",
  date: "October 6, 2023",
  imageSrc: "images/background.jpg",
  content: "The background of a website can set the tone, captivate visitors, and make a lasting impression. In this blog post, we'll dive into the art of using stunning backgrounds to enhance your web design. Whether it's vibrant colors, subtle textures, eye-catching images, or creative patterns, we'll explore how backgrounds can add flair and personality to your website. Whether you're a seasoned designer or just getting started, join us for a visually inspiring journey as we transform the backdrop of your web pages from ordinary to extraordinary!"
}, {
  title: "Embracing the Power of Web Animation",
  date: "October 6, 2023",
  imageSrc: "images/WebAnim.gif",
  content: "Web animation breathes life into static web pages, creating engaging and memorable user experiences. In this blog post, we'll unravel the enchanting world of web animation, from subtle hover effects to attention-grabbing animations. Whether you're a web designer or developer, we'll provide insights, tips, and resources to help you harness the creative potential of animations, making your websites come alive. Join us on a captivating journey through the world of web animation, where a touch of motion can transform your web projects into delightful and interactive adventures!"
}];

var createArticle = function createArticle(post) {
  var article = document.createElement("article");
  article.className = "postcard";

  var createFigure = function createFigure() {
    var figure = document.createElement("figure");
    var img = document.createElement("img");
    img.src = post.imageSrc;
    figure.appendChild(img);
    return figure;
  };

  var createDiv = function createDiv() {
    var div = document.createElement("div");
    div.className = "head_body";

    var createTitleDateContainer = function createTitleDateContainer() {
      var titleDateContainer = document.createElement("div");
      titleDateContainer.className = "title-date-container";
      var h2 = document.createElement("h2");
      h2.textContent = post.title;
      var date = document.createElement("p");
      date.className = "date";
      date.textContent = post.date;
      titleDateContainer.appendChild(h2);
      titleDateContainer.appendChild(date);
      return titleDateContainer;
    };

    var p = document.createElement("p");
    p.className = "par";
    p.textContent = post.content;
    div.appendChild(createTitleDateContainer());
    div.appendChild(p);
    return div;
  };

  article.appendChild(createFigure());
  article.appendChild(createDiv());
  return article;
}; // Check if the blogContainer element exists


var blogContainer = document.getElementById("container");

if (blogContainer) {
  // Here I used the map function to create articles from blogPosts
  var articles = blogPosts.map(function (post) {
    return createArticle(post);
  });
  articles.forEach(function (article) {
    blogContainer.appendChild(article);
  });
} else {
  console.error("blogContainer not found.");
}