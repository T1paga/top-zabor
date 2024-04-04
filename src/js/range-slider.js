const rangeMin = 0;

document.querySelectorAll('.filters').forEach((filter) => {
  filter.addEventListener('input', (e) => {
    const target = e.target;
    const parent = target.closest('.filter');

    if (!parent) return;

    const range = parent.querySelector('.range-selected');
    const rangeInputs = parent.querySelectorAll('.range-input input');
    const rangePrices = parent.querySelectorAll('.range-price input');

    const minRange = parseInt(rangeInputs[0].value);
    const maxRange = parseInt(rangeInputs[1].value);
    const minPrice = parseInt(rangePrices[0].value);
    const maxPrice = parseInt(rangePrices[1].value);

    if (maxRange - minRange < rangeMin) {
      if (target.classList.contains('min')) {
        rangeInputs[0].value = maxRange - rangeMin;
      } else {
        rangeInputs[1].value = minRange + rangeMin;
      }
    } else {
      rangePrices[0].value = minRange;
      rangePrices[1].value = maxRange;
      range.style.left = (minRange / rangeInputs[0].max) * 100 + '%';
      range.style.right = 100 - (maxRange / rangeInputs[1].max) * 100 + '%';
    }

    if (maxPrice - minPrice >= rangeMin && maxPrice <= rangeInputs[1].max) {
      if (target.classList.contains('min')) {
        rangeInputs[0].value = minPrice;
        range.style.left = (minPrice / rangeInputs[0].max) * 100 + '%';
      } else {
        rangeInputs[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInputs[1].max) * 100 + '%';
      }
    }
  });
});
