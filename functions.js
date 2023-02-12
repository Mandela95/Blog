function renderArticle(title, article, author) {
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
}
