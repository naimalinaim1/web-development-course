// load news
const loadNews = () => {
  // const url = `https://newsapi.org/v2/everything?q=apple&from=2023-03-03&to=2023-03-03&sortBy=popularity&apiKey=c344e2be54044f0c829e72397d726720`;
  const url = 'data/news.json';
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayData(data.articles))
    .catch((e) => console.log(e));
};
// display data
const displayData = (data) => {
  const url = location.href.trim();
  const newsCon = document.getElementById("news-container");
  data.forEach((news) => {
    const {
      author,
      content,
      description,
      title,
      url,
      urlToImage,
      publishedAt,
    } = news;
    const newsDiv = document.createElement("div");
    newsDiv.className = "card mb-3 mx-4";
    if (urlToImage) {
      newsDiv.innerHTML = `
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${urlToImage}" class="img-fluid rounded" alt="${title}" style="height: 100%; padding: 10px;">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${
                          title ? title : "No title"
                        }</h5>
                        <p class="card-text">${
                          description ? description : "No description"
                        }</p>
                        <p class="card-text">${content}</p>
                        <p class="card-text"><small class="text-muted">${
                          publishedAt ? publishedAt : "No publish date"
                        }</small></p>
                        <p class="card-text"><a href="${
                          url ? url : ""
                        }" target="_blank">Go to website</a></p>
                    </div>
                    <div class="card-footer">
                        <p><small class="text-muted">${
                          author ? author : "No author"
                        }</small></p>
                  </div>
                </div>
            </div>`;
      newsCon.appendChild(newsDiv);
    }
  });
};

loadNews();
