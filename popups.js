const images = document.querySelectorAll('.languages img');

images.forEach(image => {
  const popup = image.nextElementSibling; // Assuming the popup is the next sibling

  image.addEventListener('mouseover', () => {
    const rect = image.getBoundingClientRect();

    popup.style.top = rect.top - popup.offsetHeight +'px';
    popup.style.left = rect.left + 'px';
    popup.style.visibility = 'visible';
  });

  image.addEventListener('mouseout', () => {
    popup.style.visibility = 'hidden';
  });
});