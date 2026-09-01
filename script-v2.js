const track = document.getElementById('track');
  const nextButton = document.getElementById('next');

  let position = 0;

  nextButton.addEventListener('click', () => {
    position -= 300; // ширина одной картинки

    const maxPosition = -(track.scrollWidth - track.parentElement.clientWidth);

    if (position < maxPosition) {
      position = maxPosition;
    }

    track.style.transform = `translateX(${position}px)`;
  });

const prevButton = document.getElementById('prev');

prevButton.addEventListener('click', () => {
  position += 300;

  if (position > 0) {
    position = 0;
  }

  track.style.transform = `translateX(${position}px)`;
});
