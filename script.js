// script.js

const form = document.getElementById('reviewForm');
const reviewsList = document.getElementById('reviewsList');
const stars = document.querySelectorAll('.stars span');
let selectedRating = 0;

// Selecionar estrelas
stars.forEach(star => {
  star.addEventListener('click', () => {
    selectedRating = star.getAttribute('data-value');
    stars.forEach(s => s.classList.remove('selected'));
    for (let i = 0; i < selectedRating; i++) {
      stars[i].classList.add('selected');
    }
  });
});

// Submeter formulário
form.addEventListener('submit', (e) => {
  e.preventDefault(); // evita que a página recarregue

  const name = document.getElementById('name').value;
  const review = document.getElementById('review').value;

  // Criar review
  const reviewDiv = document.createElement('div');
  reviewDiv.classList.add('review');

  const reviewText = document.createElement('p');
  reviewText.textContent = `"${review}"`;

  const reviewAuthor = document.createElement('span');
  reviewAuthor.textContent = `- ${name} (${selectedRating}★)`;

  reviewDiv.appendChild(reviewText);
  reviewDiv.appendChild(reviewAuthor);

  reviewsList.appendChild(reviewDiv);

  // Limpar formulário
  form.reset();
  selectedRating = 0;
  stars.forEach(s => s.classList.remove('selected'));
});
