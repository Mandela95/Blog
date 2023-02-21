let inputTitle = document.getElementById("title");
let articleContent = document.getElementById("article");
let authorName = document.getElementById("author");
let $publishBtn = document.querySelector(".publishBtn");
let tasks = document.querySelector(".tasks");

let titleRequired = document.getElementById("titleRequired");
let textareaRequired = document.getElementById("textareaRequired");
let authorRequired = document.getElementById("authorRequired");

let mood = "publish";
let assistantVar;

$publishBtn.onclick = function () {
  let newArticle = {
    title: inputTitle.value,
    article: articleContent.value,
    author: authorName.value,
  };
  if (mood === "publish") {
    if (
      inputTitle.value != "" &&
      articleContent.value != "" &&
      authorName.value != ""
    ) {
      allArticles.push(newArticle);
      clearData();
    } else {
      if (inputTitle.value != "") {
        titleRequired.style.display = "none";
      } else {
        titleRequired.style.display = "block";
        titleRequired.innerHTML = "Title Is Required";
      }
      if (articleContent.value != "") {
        textareaRequired.style.display = "none";
      } else {
        textareaRequired.style.display = "block";
        textareaRequired.innerHTML = "Article Content Is Required";
      }
      if (authorName.value != "") {
        authorRequired.style.display = "none";
      } else {
        authorRequired.style.display = "block";
        authorRequired.innerHTML = "Author Name Is Required";
      }
    }
  } else {
    allArticles[assistantVar] = newArticle;
    mood = "publish";
    $publishBtn.innerHTML = "Publish";
    clearData();
  }

  localStorage.setItem("article", JSON.stringify(allArticles));

  showData();
};
