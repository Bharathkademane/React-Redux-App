const jokeText = document.getElementById('jokeText');
const buttons = document.querySelectorAll('#buttonContainer .btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;
    fetchJoke(category);
  });
});

function fetchJoke(category) {
  const apiUrl = `https://api.chucknorris.io/jokes/random?category=${category}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      jokeText.textContent = data.value;
    })
    .catch(error => {
      console.log('Error:', error);
    });
}
