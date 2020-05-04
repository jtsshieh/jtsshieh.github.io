document.body.classList.add('loading');

window.addEventListener("load", showPage);

function showPage() {
  document.body.classList.remove('loading');
}
