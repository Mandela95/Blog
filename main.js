let title = document.querySelector(".title");
let article = document.querySelector(".article");
let author = document.querySelector(".author");
let btn = document.querySelector("button");
let tasks = document.querySelector(".tasks");

btn.onclick = function () {
  if (title.value && article.value && author.value !== "") {
    let titleDiv = document.createElement("div");
    let task = document.createElement("p");
    task.classList = "content";
    let titleValue = title.value;
    titleDiv.classList = "task";
    title.value = "";

    let articleDiv = document.createElement("p");
    articleDiv.classList = "addedArticle";
    articleDiv.innerHTML = article.value;
    article.value = "";

    let authorDiv = document.createElement("p");
    let date = document.createElement("span");
    authorDiv.classList = "addedAuthor";
    authorDiv.innerHTML = author.value;
    date.innerHTML = new Date().toDateString();
    author.value = "";

    let links = document.createElement("div");
    let edit = document.createElement("a");
    let del = document.createElement("a");

    links.classList = "action";
    edit.classList = "edit";
    edit.innerHTML = "Edit";

    del.classList = "delete";
    del.innerHTML = "Delete";

    task.append(titleValue);
    links.append(edit, del);
    titleDiv.append(task, links, articleDiv, authorDiv, date);
    tasks.append(titleDiv);
  } else {
    alert("Please Fill All Fields");
  }
};

tasks.addEventListener("click", (e) => {
  target = e.target;
  if (target.classList.contains("delete")) {
    document.querySelector(".task").remove();
  }
});

tasks.addEventListener("click", (e) => {
  target = e.target;
  if (target.classList.contains("edit")) {
    tasks = target.parentElement.parentElement;
    title.value = tasks.children[0].textContent;
    article.value = tasks.children[2].textContent;
    author.value = tasks.children[3].textContent;
  }
});
