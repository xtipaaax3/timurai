const loadingNumber = document.querySelector('#loadingNumber');
const loadingCircle = document.querySelector('.loading-circle');
let load = 0;

setInterval(updateLoader, 20);

function updateLoader() {
  load += (load < 100);
  loadingNumber.innerHTML = load;
  loadingCircle.style.background = 'conic-gradient(from 0deg at 50% 50%, rgba(111, 123, 247, 1) 0%, rgba(155, 248, 244, 1) ' + load + '%, #101012 ' + load + '%)'
}



function funkcijabro()
{
  document.getElementById("ideovoideovo").style.display = "none"
  document.getElementById("jaojjebotew").style.display = "block"
  document.getElementById("neznamaaa").style.display = "block"
  document.getElementById("stajlovi").disabled=false;
  document.getElementById("stajleribrt").disabled=true
}