const rangeMin = 0;

document.querySelectorAll('.filters').forEach((filter) => {
  filter.addEventListener('input', (e) => {
    const target = e.target;
    const parent = target.closest('.filter');
    const rangeInputMax = parseInt(target.getAttribute('max'));

    if (!parent) return;

    const range = parent.querySelector('.range-selected');
    const rangeInputs = parent.querySelectorAll('.range-input input');
    const rangePrices = parent.querySelectorAll('.range-price input');

    let minRange = parseFloat(rangeInputs[0].value);
    let maxRange = parseFloat(rangeInputs[1].value);
    let minPrice = parseFloat(rangePrices[0].value);
    let maxPrice = parseFloat(rangePrices[1].value);

    if (rangeInputMax > 100) {
      minRange = parseInt(rangeInputs[0].value);
      maxRange = parseInt(rangeInputs[1].value);
      minPrice = parseInt(rangePrices[0].value);
      maxPrice = parseInt(rangePrices[1].value);
    }

    if (maxRange - minRange < rangeMin) {
      if (target.classList.contains('min')) {
        rangeInputs[0].value = Math.round((maxRange - rangeMin) * 10) / 10;
      } else {
        rangeInputs[1].value = Math.round((minRange + rangeMin) * 10) / 10;
      }
    } else {
      rangePrices[0].value = minRange;
      rangePrices[1].value = maxRange;
      range.style.left = (minRange / rangeInputMax) * 100 + '%';
      range.style.right = 100 - (maxRange / rangeInputMax) * 100 + '%';
    }

    if (maxPrice - minPrice >= rangeMin && maxPrice <= rangeInputs[1].max) {
      if (target.classList.contains('min')) {
        rangeInputs[0].value = minPrice.toFixed(1);
        range.style.left = (minPrice / rangeInputMax) * 100 + '%';
      } else {
        rangeInputs[1].value = maxPrice.toFixed(1);
        range.style.right = 100 - (maxPrice / rangeInputMax) * 100 + '%';
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
    const rangeMax = parseFloat(inputs[1].getAttribute('max'));

    const normalizedMin = (min / rangeMax) * 100;
    const normalizedMax = (max / rangeMax) * 100;

    selectedRange.style.left = `${normalizedMin}%`;
    selectedRange.style.right = `${100 - normalizedMax}%`;
  });
});
