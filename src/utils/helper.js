export function handleForwardCarouselChange(images, position, setPosition) {
  if (images.length - 1 === position) {
    setPosition(0);
  } else {
    setPosition((prev) => prev + 1);
  }
}

export function handleBackwardCarouselChange(images, position, setPosition) {
  if (position === 0) {
    setPosition(images.length - 1);
  } else {
    setPosition((prev) => prev - 1);
  }
}
