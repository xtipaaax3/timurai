setTimeout(funkcijabatonga, 3000);

var minShadow = 5;
var maxShadow = 150;
var minStrength = 0.1;
var maxStrength = 0.15;
var deintensify = 1.5;

function calculateShadows(calcX,calcY) {

   if(calcX > 1) {
      calcX = 1;
   }
   if(calcX < -1) {
      calcX = -1;
   }
   if(calcY > 1) {
      calcY = 1;
   }
   if(calcY < -1) {
      calcY = -1;
   }

  var shadows = "";
  
  // First set of shadows give the 3D effect to the text.
  for (var i = 1; i < 10; i++) {
    shadows += i == 1 ? "" : ", ";
    shadows += "0 " + i + "px 0 rgb("+ (195 - i * 5) + "," + (195 - i * 5) + "," + (195 - i * 5) + ")";
  }

  // Second set of shadows controlled by mouse position or device tilt
  for (var j = minShadow; j < maxShadow; j *= deintensify) {
    var opacity = maxStrength - (j - minShadow) / maxShadow * (maxStrength - minStrength);
    shadows += ", " + (calcX * j) + "px " + (calcY * j + 5) + "px " + j + "px rgba(0,0,0," + opacity + ")";
    // shadows += j < 100 ? ", " : "";
  }
  
  console.log(shadows);

  return shadows;
  
}

if (!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i)) {
   
   window.addEventListener('mousemove',function(e) {

     var baseX = (e.x - window.innerWidth / 2) * -1;
     var baseY = (e.y - window.innerHeight / 2) * -1;

     $('.test').css('text-shadow', calculateShadows(baseX/(window.innerWidth / 2),baseY/(window.innerHeight / 2)));

   });
   
} else {
   
   window.addEventListener('deviceorientation',function(e){

      var sensitivity = 15;

      var baseX = e.gamma;
      var baseY = e.beta;

      $('.test').css('text-shadow', calculateShadows(baseX/sensitivity,baseY/sensitivity));

   });
   
}


function funkcijabatonga()  {

    document.getElementById("stajleri").disabled=true;
    document.getElementById("stajlovi").disabled=false;
    document.getElementById("sveobicnobbrt").style.display = "block";
    document.getElementById("bratalica").style.display = "none";


}