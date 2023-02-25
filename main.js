let $inputTitle = document.getElementById("title");
let $articleContent = document.getElementById("article");
let $authorName = document.getElementById("author");

let inputs = [$inputTitle, $articleContent, $authorName];

let $publishBtn = document.getElementById("publishBtn");
let $articles = document.getElementById("articles");

let $titleRequired = document.getElementById("titleRequired");
let $textareaRequired = document.getElementById("textareaRequired");
let $authorRequired = document.getElementById("authorRequired");

let mood = "publish";
let altIndex;

const publish = function () {
  if (mood === "publish") {
    if (
      $inputTitle.value.trim() != "" &&
      $articleContent.value.trim() != "" &&
      $authorName.value.trim() != ""
    ) {
      let newArticle = {
        title: $inputTitle.value,
        article: $articleContent.value,
        author: $authorName.value,
      };
      allArticles.push(newArticle);
      clearArticles();
    } else {
      if ($inputTitle.value.trim() != "") {
        $titleRequired.style.display = "none";
      } else {
        $titleRequired.style.display = "block";
      }
      if ($articleContent.value.trim() != "") {
        $textareaRequired.style.display = "none";
      } else {
        $textareaRequired.style.display = "block";
      }
      if ($authorName.value.trim() != "") {
        $authorRequired.style.display = "none";
      } else {
        $authorRequired.style.display = "block";
      }
    }
  } else {
    let newArticle = {
      title: $inputTitle.value,
      article: $articleContent.value,
      author: $authorName.value,
    };
    allArticles[altIndex] = newArticle;
    mood = "publish";
    $publishBtn.innerHTML = "Publish";
    clearArticles();
  }

  localStorage.setItem("articles", JSON.stringify(allArticles));

  renderArticles();
};

$publishBtn.onclick = publish;

$inputTitle.addEventListener("input", function () {
  if ($inputTitle.value.trim() != "") {
    $titleRequired.style.display = "none";
  } else {
    $titleRequired.style.display = "block";
  }
});

$articleContent.addEventListener("input", function () {
  if ($articleContent.value.trim() != "") {
    $textareaRequired.style.display = "none";
  } else {
    $textareaRequired.style.display = "block";
  }
});

$authorName.addEventListener("input", function () {
  if ($authorName.value.trim() != "") {
    $authorRequired.style.display = "none";
  } else {
    $authorRequired.style.display = "block";
  }
});

// press enter
inputs.map((item) => {
  item.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
      publish();
    }
  });
});
