let inputTitle = document.querySelector(".title");
let articleContent = document.querySelector(".article");
let authorName = document.querySelector(".author");
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

        setTimeout(
          () => document.querySelector("#titleRequired").remove(),
          1000
        );
      }
      if (articleContent.value != "") {
        textareaRequired.style.display = "none";
      } else {
        textareaRequired.style.display = "block";
        textareaRequired.innerHTML = "Article Content Is Required";

        setTimeout(
          () => document.querySelector("#textareaRequired").remove(),
          2000
        );
      }
      if (authorName.value != "") {
        authorRequired.style.display = "none";
      } else {
        authorRequired.style.display = "block";
        authorRequired.innerHTML = "Author Name Is Required";

        setTimeout(
          () => document.querySelector("#authorRequired").remove(),
          3000
        );
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
