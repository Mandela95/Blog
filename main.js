let inputTitle = document.querySelector(".title");
let article = document.querySelector(".article");
let author = document.querySelector(".author");
let $publishBtn = document.querySelector("button");
let tasks = document.querySelector(".tasks");

$publishBtn.onclick = function () {
  if (inputTitle.value && article.value && author.value !== "") {
    renderArticle(inputTitle, article, author);
  } else {
    alert("Please Fill All Fields");
  }
};

tasks.addEventListener("click", (e) => {
  target = e.target;
  if (target.classList.contains("delete")) {
    target.parentElement.parentElement.remove();
  }
});

// tasks.addEventListener("click", (e) => {
//   target = e.target;
//   if (target.classList.contains("edit")) {
//     tasks = target.parentElement.parentElement;
//     title.value = tasks.children[0].textContent;
//     article.value = tasks.children[2].textContent;
//     author.value = tasks.children[3].textContent;
//   }
// });
