let allArticles;
if (localStorage.articles != null) {
  allArticles = JSON.parse(localStorage.articles);
} else {
  allArticles = [];
}

function renderArticles() {
  var date = new Date().toLocaleString();

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
            <span>${date}</span>
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

// retrieve articles from local storage
function retrieveArticles() {
  localStorage.setItem("articles", JSON.stringify(allArticles));
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
