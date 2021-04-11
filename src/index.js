window.addEventListener("keypress", (event) => {
  if (event.key == "q") {
    const $like = document.querySelector("ytd-video-primary-info-renderer")
      .children[0].children[5].children[2].children[0].children[0].children[0]
      .children[0];
    if ($like) {
      $like.click();
    }
  }
});
