const strLikeSelector = ".style-scope.ytd-toggle-button-renderer";

document.addEventListener("keydown", (event) => {
  if (event.key == "q") {
    const $like = document.querySelector(strLikeSelector);

    if ($like) {
      $like.click();
    }
  }
});