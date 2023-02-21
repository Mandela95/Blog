let allArticles;
if (localStorage.article != null) {
  allArticles = JSON.parse(localStorage.article);
} else {
  allArticles = [];
}

function showData() {
  let task = "";
  let date = new Date().toDateString();

  for (let i = 0; i < allArticles.length; i++) {
    task += `
        <div class="task ${i + 1}">
          <div class="action">
            <p>${allArticles[i].title}</p>
            <span class="addedBtn">
              <button onclick="updateData(${i})" id="update">Update</button>
              <button onclick="deleteData(${i})" id="delete">Delete</button>
            </span>
          </div>
          <p>${allArticles[i].article}</p>
          <div class="date">
            <p>${allArticles[i].author}</p>
            <span>${date}</span>
          </div>
        </div>`;
  }
  document.getElementById("tasks").innerHTML = task;
}
showData();

// clear data
function clearData() {
  inputTitle.value = "";
  articleContent.value = "";
  authorName.value = "";
  titleRequired.style.display = "none";
  textareaRequired.style.display = "none";
  authorRequired.style.display = "none";
}

// delete data
function deleteData(i) {
  allArticles.splice(i, 1);
  localStorage.article = JSON.stringify(allArticles);
  showData();
}

// update Data
function updateData(i) {
  clearData();
  inputTitle.value = allArticles[i].title;
  articleContent.value = allArticles[i].article;
  authorName.value = allArticles[i].author;
  $publishBtn.innerHTML = "Update";
  mood = "update";
  assistantVar = i;

  scroll({
    top: 0,
    behavior: "smooth",
  });
}
