let allArticles;
retrieveArticles();

function renderArticles() {
  let article = "";

  for (let i = 0; i < allArticles.length; i++) {
    article += `
        <div class="article ${crypto.randomUUID()}">
          <div class="action">
            <p>${allArticles[i].title}</p>
            <span class="addedBtn">
              <button onclick="updateArticle(${i})" id="update">Update</button>
              <button onclick="deleteArticle(${i})" id="delete">Delete</button>
            </span>
          </div>
          <p>${allArticles[i].article}</p>
          <div class="date">
            <p>${allArticles[i].author}</p>
            <span>${allArticles[i].date}</span>
          </div>
        </div>`;
  }
  document.getElementById("articles").innerHTML = article;
}
renderArticles();

// clear article
function clearArticles() {
  $inputTitle.value = "";
  $articleContent.value = "";
  $authorName.value = "";
  $titleRequired.style.display = "none";
  $textareaRequired.style.display = "none";
  $authorRequired.style.display = "none";
}

// delete article
function deleteArticle(i) {
  allArticles.splice(i, 1);
  localStorage.articles = JSON.stringify(allArticles);
  mood = "publish";
  $publishBtn.innerHTML = "Publish";
  clearArticles();
  renderArticles();
}

// store articles in local storage
function storeArticles() {
  localStorage.setItem("articles", JSON.stringify(allArticles));
}

// retrieve articles from local storage
function retrieveArticles() {
  if (localStorage.articles != null) {
    allArticles = JSON.parse(localStorage.articles);
  } else {
    allArticles = [];
  }
}

// update article
function updateArticle(i) {
  clearArticles();
  $inputTitle.value = allArticles[i].title;
  $articleContent.value = allArticles[i].article;
  $authorName.value = allArticles[i].author;
  $publishBtn.innerHTML = "Update";
  mood = "update";
  altIndex = i;

  scroll({
    top: 0,
    behavior: "smooth",
  });
}
