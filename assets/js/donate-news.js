fetch('../data/news.json')
  .then(response => response.json())
  .then(data => {
    const newsContainer = document.querySelector('.news-container');
    data.news.forEach(item => {
      const newsItem = document.createElement('div');
      newsItem.classList.add('news-item');
      newsItem.innerHTML = `
        <img src="${item.image}" alt="News Image" />
        <div class="text">
          <h2>${item.title}</h2>
          <p>${item.description}</p>
        </div>
      `;
      newsItem.onclick = () => window.location.href = item.link;
      newsContainer.appendChild(newsItem);
    });

  });
