document.querySelector('[data-bs-target="#modalSol"]').addEventListener('click', function () {
  fetch('modalSol.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('modal-sol').innerHTML = html;
      const modal = new bootstrap.Modal(document.getElementById('modalSol'));
      modal.show();
    });
});

document.querySelector('[data-bs-target="#modalAgua"]').addEventListener('click', function () {
  fetch('modalAgua.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('modal-agua').innerHTML = html;
      const modal = new bootstrap.Modal(document.getElementById('modalAgua'));
      modal.show();
    });
});

document.querySelector('[data-bs-target="#modalTierra"]').addEventListener('click', function () {
  fetch('modalTierra.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('modal-tierra').innerHTML = html;
      const modal = new bootstrap.Modal(document.getElementById('modaltierra'));
      modal.show();
    });
});

document.querySelector('[data-bs-target="#modalEspacio"]').addEventListener('click', function () {
  fetch('modalEspacio.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('modal-espacio').innerHTML = html;
      const modal = new bootstrap.Modal(document.getElementById('modalespacio'));
      modal.show();
    });
});
