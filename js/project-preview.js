document.querySelectorAll(".project-visual-image").forEach((image) => {
  const stillSrc = image.dataset.stillSrc;
  const hoverSrc = image.dataset.hoverSrc;
  const link = image.closest(".project-visual");

  if (!stillSrc || !hoverSrc || !link) {
    return;
  }

  const showHoverImage = () => {
    if (image.src.endsWith(hoverSrc)) {
      return;
    }

    image.src = hoverSrc;
  };

  const showStillImage = () => {
    if (image.src.endsWith(stillSrc)) {
      return;
    }

    image.src = stillSrc;
  };

  link.addEventListener("mouseenter", showHoverImage);
  link.addEventListener("mouseleave", showStillImage);
  link.addEventListener("focus", showHoverImage);
  link.addEventListener("blur", showStillImage);
});
