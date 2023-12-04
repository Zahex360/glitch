document.addEventListener('DOMContentLoaded', function() {
    const apiKey = '6077c170b1f143dbbf5415134984853d';

    const apiUrl = 'https://newsapi.org/v2/everything?q=Computer Science &apiKey=6077c170b1f143dbbf5415134984853d';


    

    // Your JavaScript code here
    
function fetchNews() {
    fetch(apiUrl, {
        headers: {
            'Authorization': `Bearer ${"6077c170b1f143dbbf5415134984853d"}`
        }
    })
    .then(response => response.json())
    .then(data => {
        // Process and display the news data
        displayNews(data.articles);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
function displayNews(articles) {
    const article = document.querySelector("article");
    const imageElement = article.querySelector(".article-image");
    const titleElement = article.querySelector(".article-title");
    const dateElement = article.querySelector(".article-date");
    const contentElement = article.querySelector(".article-content");

    articles.forEach((articleData) => {
        imageElement.src = articleData.urlToImage;
        titleElement.textContent = articleData.title;
        // dateElement.textContent = articleData.publishedAt;
        contentElement.textContent = articleData.description;

        // You can also add a link to read the full article, if needed
        const readMoreLink = document.createElement("a");
        readMoreLink.textContent = "Read more";
        readMoreLink.href = articleData.url;
        readMoreLink.target = "_blank";

        contentElement.appendChild(readMoreLink);

        // Clone the article element for additional articles
        const newArticle = article.cloneNode(true);
        article.parentElement.appendChild(newArticle);
    });
}

dateElement.textContent = formatTimestamp(articleData.publishedAt);

function formatTimestamp(timestamp) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return new Date(timestamp).toLocaleDateString('en-US', options);
}


// Initial API call
fetchNews();

// Schedule periodic API calls (every 10 seconds)
setInterval(fetchNews, 10000);
});