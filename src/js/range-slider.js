const rangeMin = 0.1; // Минимальная разница между min и max значениями

document.querySelectorAll('.filters').forEach((filter) => {
  filter.addEventListener('input', (e) => {
    const target = e.target;
    const parent = target.closest('.filter');

    if (!parent) return;

    const range = parent.querySelector('.range-selected');
    const rangeInputs = parent.querySelectorAll('.range-input input');
    const rangePrices = parent.querySelectorAll('.range-price input');

    const minRange = parseFloat(rangeInputs[0].value);
    const maxRange = parseFloat(rangeInputs[1].value);
    const minPrice = parseFloat(rangePrices[0].value);
    const maxPrice = parseFloat(rangePrices[1].value);

    if (maxRange - minRange < rangeMin) {
      if (target.classList.contains('min')) {
        rangeInputs[0].value = (maxRange - rangeMin).toFixed(1);
      } else {
        rangeInputs[1].value = (minRange + rangeMin).toFixed(1);
      }
    } else {
      rangePrices[0].value = minRange.toFixed(1);
      rangePrices[1].value = maxRange.toFixed(1);
      range.style.left = minRange * 100 + '%';
      range.style.right = 100 - maxRange * 100 + '%';
    }

    if (maxPrice - minPrice >= rangeMin && maxPrice <= rangeInputs[1].max) {
      if (target.classList.contains('min')) {
        rangeInputs[0].value = minPrice.toFixed(1);
        range.style.left = minPrice * 100 + '%';
      } else {
        rangeInputs[1].value = maxPrice.toFixed(1);
        range.style.right = 100 - maxPrice * 100 + '%';
      }
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const rangeSliders = document.querySelectorAll('.range-slider');
  rangeSliders.forEach((slider) => {
    const selectedRange = slider.querySelector('.range-selected');
    const inputs = slider.parentElement.querySelectorAll('.range-input input');
    const min = parseFloat(inputs[0].value);
    const max = parseFloat(inputs[1].value);

    selectedRange.style.left = min * 100 + '%';
    selectedRange.style.right = 100 - max * 100 + '%';
  });
});
