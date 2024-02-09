const btnOpen = document.getElementById('btn-open');
const btnClose = document.getElementById('btn-close');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');

btnOpen.addEventListener('click', function (e) {
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
});

btnClose.addEventListener('click', function (e) {
  modal.classList.remove('open');
  document.body.style.overflow = 'auto';
});

modalContent.addEventListener('click', function (e) {
  e.stopPropagation();
});

modal.addEventListener('click', function (e) {
  modal.classList.remove('open');
  document.body.style.overflow = 'auto';
});
