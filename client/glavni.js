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
function showTipaPopup() {
  var browser = '';
  if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) {
      browser = 'Opera';
  }
  else if(navigator.userAgent.indexOf("Chrome") != -1 ){
      browser = 'Google Chrome';
  }
  else if(navigator.userAgent.indexOf("Safari") != -1){
      browser = 'Safari';
  }
  else if(navigator.userAgent.indexOf("Firefox") != -1 ){
      browser = 'Mozilla Firefox';
  }
  else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )){
      browser = 'Microsoft Internet Explorer';
  }
  else if(navigator.userAgent.indexOf("Edge") != -1 ){
      browser = 'Microsoft Edge';
  }
  else if(navigator.userAgent.indexOf("Trident") != -1 ){
      browser = 'Microsoft Internet Explorer';
  }
  else{
      browser = 'Unknown Browser';
  }
  
  var text = 'Korisnik se prijavio preko ' + browser + ' preglednika.';
  var tipaPopup = TipaPopup({
    title: '',
    message: text,
    duration: 5000,
    position: 'center',
    type: 'success',
    width: '200px',
    height: 'auto',
    closeBtn: true,
    closeOnClick: false
  });
  
  tipaPopup.show();
}

