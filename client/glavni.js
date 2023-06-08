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
// Pronalaženje dugmeta po ID-u
var placanjeButton = document.getElementById("placanjeButton");

// Dodavanje slušača događaja "click" na dugme
placanjeButton.addEventListener("click", placanjeFunkcija);

// Definicija funkcije placanjeFunkcija
function placanjeFunkcija() {
  // Ovdje dodajte željeni kod za funkciju placanjeFunkcija
  // Na primjer:
  document.getElementById("maindio").style.display = 'none';
  document.getElementById("ovojekartica").style.display = 'block';
  document.getElementById("stajlovi").disabled=true;
  document.getElementById("kartice").disabled=false;
}
/////////////
var placanjeDugme = document.getElementById("placanjeDugme");

// Dodavanje slušača događaja "click" na dugme
placanjeDugme.addEventListener("click", funkcijazaKARTICU);

// Definicija funkcije placanjeFunkcija
function funkcijazaKARTICU() {
  // Ovdje dodajte željeni kod za funkciju placanjeFunkcija
  // Na primjer:
  document.getElementById("maindio").style.display = 'none';
  document.getElementById("ovojekartica").style.display = 'none';
  document.getElementById("placanje1").style.display = 'block';
  document.getElementById("stajlovi").disabled=true;
  document.getElementById("kartice").disabled=true;
  document.getElementById("stajleri").disabled=true;
  document.getElementById("stajleribrt").disabled=true;
  document.getElementById("placanjebrt").disabled=false;
}
////////

var placanjegotovo = document.getElementById("placanjegotovo");

// Dodavanje slušača događaja "click" na dugme
placanjegotovo.addEventListener("click", funkcijazakraj);

// Definicija funkcije placanjeFunkcija
function funkcijazakraj() {
  // Ovdje dodajte željeni kod za funkciju placanjeFunkcija
  // Na primjer:
  document.getElementById("alertara").style.display = 'block';
}

/// KRAJ SVEGA

var svevratiunormalu = document.getElementById("svevratiunormalu");

// Dodavanje slušača događaja "click" na dugme
svevratiunormalu.addEventListener("click", sveunormaluide);

// Definicija funkcije placanjeFunkcija
function sveunormaluide() {
  // Ovdje dodajte željeni kod za funkciju placanjeFunkcija
  // Na primjer:
  document.getElementById("alertara").style.display = 'none';
  document.getElementById("maindio").style.display = 'block';
  document.getElementById("ovojekartica").style.display = 'none';
  document.getElementById("placanje1").style.display = 'none';
  document.getElementById("stajlovi").disabled=false;
  document.getElementById("kartice").disabled=true;
  document.getElementById("stajleri").disabled=true;
  document.getElementById("stajleribrt").disabled=true;
  document.getElementById("placanjebrt").disabled=true;
}
