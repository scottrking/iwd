
  var randomNumber = Math.floor(Math.random()*2);

  var badass = new Array();
  // data format for badasses: name (0), link (1), birth/death (2), short bio (3), image (4)

  badass[0] = new Array("Veronica Foster","https://en.wikipedia.org/wiki/Veronica_Foster","January 2, 1922-2000","Popularly known as \"Ronnie, the Bren Gun Girl\", was a Canadian icon representing nearly one million Canadian women who worked in the manufacturing plants that produced munitions and materiel during World War II.","img/VeronicaFoster-RonnieBrenGunGirl-smoke.png");

  badass[1] = new Array("Elsie MacGill","https://en.wikipedia.org/wiki/Elsie_MacGill","March 27, 1905 - 1980","Known as the\"Queen of the Hurricanes\", was the world's first woman to earn an aeronautical engineering degree.","img/Elsie_macgill.png");


document.addEventListener('DOMContentLoaded', function (event) {
  // replaces elements in layout with a random person from the badass array
  document.getElementById("badassName").innerHTML = badass[randomNumber][0];
  document.getElementById("badassLink").setAttribute("href", badass[randomNumber][1]);
  document.getElementById("badassBirth").innerHTML = badass[randomNumber][2];
  document.getElementById("badassBio").innerHTML = badass[randomNumber][3];
  document.getElementById("badassImage").setAttribute("src", badass[randomNumber][4]);


// All of this code was stolen from https://paintbycode.github.io/gradient-generator/

    //==============================================================
    //FUNCTION TO CREATE RANDOM INTEGER
    //==============================================================
    function randInt(min, max) {
        return Math.floor((Math.random() * max) + min);
    }

  //==============================================================
  //RGB GENERATOR
  //==============================================================
  //random 0 to 255 number for rgb values
  var redTop = randInt(0, 255);
  var greenTop = randInt(0, 255);
  var blueTop = randInt(0, 255);
  var rgbTop = "rgb(" + redTop + "," + greenTop + "," + blueTop + ")";

  var redBottom = randInt(0, 255);
  var greenBottom = randInt(0, 255);
  var blueBottom = randInt(0, 255);
  var rgbBottom = "rgb(" + redBottom + "," + greenBottom + "," + blueBottom + ")";


  var degrees = randInt(0, 360) + "deg";

  //==============================================================
  //REVERSE RGB VALUE FOR CONTRAST TEXT COLOUR
  //==============================================================
  //get the 'reverse' value for the displayed rgb value
  function reverseRgb(rgbValue) {
      var revRgbValue = 255 - rgbValue;
      return revRgbValue;
  }

  var reverseRedTop = reverseRgb(redTop);
  var reverseGreenTop = reverseRgb(greenTop);
  var reverseBlueTop = reverseRgb(blueTop);
  var reverseRgbTop = "rgb(" + reverseRedTop + "," + reverseGreenTop + "," + reverseBlueTop + ")";

  var reverseRedBottom = reverseRgb(redBottom);
  var reverseGreenBottom = reverseRgb(greenBottom);
  var reverseBlueBottom = reverseRgb(blueBottom);
  var reverseRgbBottom = "rgb(" + reverseRedBottom + "," + reverseGreenBottom + "," + reverseBlueBottom + ")";

  //==============================================================
  //CONVERT RGB TO HEX
  //==============================================================
  //convert rgb to hex
  function rgbToHex(rgbValue) {
      //convert passed number to hexadecimal
      var rgbConverted = rgbValue.toString(16);
      //prefix a "0" if required
      return rgbConverted.length == 1 ? "0" + rgbConverted : rgbConverted;
  };

  var redHexTop = rgbToHex(redTop);
  var greenHexTop = rgbToHex(greenTop);
  var blueHexTop = rgbToHex(blueTop);
  var hexTop = "#" + redHexTop + "" + greenHexTop + "" + blueHexTop;

  var redHexBottom = rgbToHex(redBottom);
  var greenHexBottom = rgbToHex(greenBottom);
  var blueHexBottom = rgbToHex(blueBottom);
  var hexBottom = "#" + redHexBottom + "" + greenHexBottom + "" + blueHexBottom;

  //==============================================================
  //SETTING THE MAIN GRADIENT
  //==============================================================
  document.querySelector("body").style.backgroundImage = "linear-gradient(to bottom, " + rgbTop + "," + rgbBottom + ")";
  document.querySelector("body").style.color = "white";

});
