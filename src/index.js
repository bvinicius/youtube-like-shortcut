window.onload = () => {
  document.addEventListener("keypress", (event) => {
    const likeButtons = [
      ...document.querySelectorAll(
        "a.yt-simple-endpoint.style-scope.ytd-toggle-button-renderer"
      ),
    ].slice(0, 2);

    const [$likeButton] = likeButtons;
    if (event.key == "q") {
      $likeButton && $likeButton.click();
    }
  });
};
