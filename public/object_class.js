class Article {
    constructor(title, date, content, imageSrc) {
      this.title = title;
      this.date = date;
      this.content = content;
      this.imageSrc = imageSrc;
    }
  }

  const articles = [
    new Article(
      "The Future of Artificial Intelligence: Trends to Watch in 2023 and Beyond",
      "October 20, 2023",
      "Artificial Intelligence (AI) is rapidly evolving, shaping the future of computer science...",
      "images/AI.jpg"
    ),
    new Article(
      "The Importance of Cybersecurity Education: Protecting the Digital World",
      "October 20, 2023",
      "In our increasingly digital world, cybersecurity education is paramount...",
      "images/cyber.jpg"
    ),
  ];

  function populateArticles() {
    const container = document.getElementById("container");

    articles.forEach((article) => {
      const articleElement = document.createElement("article");
      articleElement.innerHTML = `
        <div class="postcard">
          <figure>
            <img src="${article.imageSrc}" alt="Article Image" class="img-fluid" />
          </figure>
          <div class="head_body">
            <div class="title-date-container">
              <h2>${article.title}</h2>
              <p class="date">${article.date}</p>
            </div>
            <p class="par">${article.content}</p>
          </div>
        </div>
      `;

      container.appendChild(articleElement);
    });
  }

  window.addEventListener("load", () => {
    populateArticles();
  });