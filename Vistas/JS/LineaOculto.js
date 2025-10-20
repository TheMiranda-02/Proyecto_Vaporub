document.querySelectorAll('.timeline-item').forEach(item => {
  item.addEventListener('click', () => {
    // Cierra todos los demás
    document.querySelectorAll('.timeline-item').forEach(i => {
      i.classList.remove('active');
    });

    // Activa el actual
    item.classList.add('active');
  });
});

// Opcional: cerrar al hacer clic fuera
document.addEventListener('click', (e) => {
  if (!e.target.closest('.timeline-item')) {
    document.querySelectorAll('.timeline-item').forEach(i => i.classList.remove('active'));
  }
});
