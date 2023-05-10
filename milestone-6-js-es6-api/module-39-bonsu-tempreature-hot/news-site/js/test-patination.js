const loadData = async () => {
  const url = "data/news.json";
  const res = await fetch(url);
  const data = await res.json();
  const totalPageRequired = pageCalculate(data.articles);
  generateLink(totalPageRequired);
  displayData(data.articles);
};

const pagination = {
  total_page: 0,
  per_page_item: 10,
};
const pageCalculate = (data) => {
  const itemsLength = data.length;
  const perPageItem = pagination.per_page_item;
  const reminderItem = itemsLength % perPageItem;
  let totalPage = 0;
  if (reminderItem > 0) {
    totalPage = (itemsLength - reminderItem) / perPageItem;
    totalPage++;
  } else {
    totalPage = itemsLength / perPageItem;
  }

  // set total page in a object
  pagination.total_page = totalPage;
  return totalPage;
};

// generate link
const generateLink = (totalPage = 0) => {
  if (totalPage < 2 || isNaN(totalPage)) {
    return;
  }
  // create link
  const linkCon = document.getElementById("pagination-link-container");
  const ul = document.createElement("ul");
  ul.classList.add("pagination");
  let link = `
  <li class="page-item">
    <a id="previous-link" class="page-link" style="cursor: pointer;" onclick="goPreviousPage()">Previous</a>
  </li>
  `;
  // page link
  for (let i = 1; i <= totalPage; i++) {
    link += `
    <li class="page-item" >
      <a class="page-link" href="?page=${i}">${i}</a>
    </li>
    `;
  }
  // next link button
  link += `
    <li class="page-item" style="cursor: pointer;">
      <a id="next-link" class="page-link" onclick="goNextPage()">Next</a>
    </li>`;

  // ul into link push
  ul.innerHTML = link;
  linkCon.appendChild(ul);
  // disable next or previous button link
  disableLink();
};

// get current page
const currentPageNum = () => {
  const url = location.href;
  const searchPage = url.includes("?page=");
  if (searchPage) {
    const equalSym = url.indexOf("=") + 1;
    const pageNum = url.slice(equalSym, url.length);
    return Number(pageNum);
  }
  return 1;
};


// disable any button by id
const disableBtn = (id) => {
  document.getElementById(id).classList.add("disabled");
};

// disable next or previous button link
const disableLink = () => {
  const currentPage = currentPageNum();
  if (currentPage == 1) {
    disableBtn("previous-link");
  } else if (currentPage == 10) {
    disableBtn("next-link");
  }
};

// go next page
const goNextPage = () => {
  const currentPage = currentPageNum();
  const nextPage = currentPage + 1;
  location.href = `?page=${nextPage}`;
};

// go next page
const goPreviousPage = () => {
  const currentPage = currentPageNum();
  const previousPage = currentPage - 1;
  location.href = `?page=${previousPage}`;
};

const displayData = (data) => {
  // const currentPageNum = currentPageNum();
  // stop
  let no = 1;
  const newsCon = document.getElementById("news-container");
  data.forEach((news) => {
    const { title } = news;
    const newsDiv = document.createElement("div");
    newsDiv.className = "card mb-3 mx-4";
    newsDiv.innerHTML = `
            <div class="border">
                <h4>${no++} &nbsp; ${title}</h4>
            </div>`;
    newsCon.appendChild(newsDiv);
  });
};
loadData();
