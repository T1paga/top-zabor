document.addEventListener('DOMContentLoaded', function () {
  const openFiltersButton = document.querySelector('.open-filters-button');
  const filters = document.querySelector('.filters');

  openFiltersButton.addEventListener('click', function () {
    filters.classList.toggle('show-filters');
  });
});
