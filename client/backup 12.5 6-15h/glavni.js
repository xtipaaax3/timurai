const toggleButton = document.querySelector('.dark-light');
const colors = document.querySelectorAll('.color');

colors.forEach(color => {
  color.addEventListener('click', (e) => {
    colors.forEach(c => c.classList.remove('selected'));
    const theme = color.getAttribute('data-color');
    document.body.setAttribute('data-theme', theme);
    color.classList.add('selected');
  });
});

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
// Pronađi elemente na stranici
var settingsButton = document.querySelector('.settings');
var popup = document.querySelector('.popup');
var close = document.querySelector('.close-btnn');

// Dodaj event listener za klik na settingsButton
settingsButton.addEventListener('click', function() {
  // Prikaži popup
  popup.style.display = "block";
});

// Dodaj event listener za klik na close
close.addEventListener('click', function() {
  // Sakrij popup
  popup.style.display = "none";
});

// Dodaj event listener za klik izvan popup-a za zatvaranje
window.addEventListener('click', function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
});

