let title = document.querySelector(".title");
let article = document.querySelector(".article");
let author = document.querySelector(".author");
let btn = document.querySelector("button");
let tasks = document.querySelector(".tasks");

btn.onclick = function () {
  if (title.value && article.value && author.value !== "") {
    let titleDiv = document.createElement("div");
    titleDiv.classList = "addedTitle";
    titleDiv.innerHTML = title.value;
    title.value = "";

    let articleDiv = document.createElement("div");
    articleDiv.classList = "addedArticle";
    articleDiv.innerHTML = article.value;
    article.value = "";

    let authorDiv = document.createElement("div");
    authorDiv.classList = "addedAuthor";
    authorDiv.innerHTML = author.value;
    author.value = "";

    let links = document.createElement("span");
    let edit = document.createElement("a");
    let del = document.createElement("a");

    links.classList = "action";
    edit.classList = "edit";
    edit.innerHTML = "Edit";

    del.classList = "delete";
    del.innerHTML = "Delete";

    tasks.append(titleDiv, articleDiv, authorDiv);
    titleDiv.append(links);
    links.append(edit, del);
  } else {
    alert("Please Fill All Fields");
  }
};

tasks.addEventListener("click", (e) => {
  target = e.target;
  if (target.classList.contains("delete")) {
    target.parentElement.parentElement.remove();
  }
  console.log(target);
});
