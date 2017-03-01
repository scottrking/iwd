var randomNumber = Math.floor(Math.random()*2);

//==============================================================
//BADASSES
//==============================================================

var badass = new Array();
// data format for badasses: name (0), link (1), birth/death (2), short bio (3), image (4)

badass[0] = new Array("Elsie MacGill","\"Queenof the Hurricanes\"","https://en.wikipedia.org/wiki/Elsie_MacGill","First female airplaine designer, and the world's first woman to earn an aeronautical engineering degree. She designed war planes, all the while wearing pants. That's right. She contracted polio and was told she would never walk again. Obviously she didn't have time for such bullshit so she engineered herself some canes and kept on being an absolute boss.","img/elsie-macgill.jpg");

badass[1] = new Array("Ethel Catherwood","The \"Prettiest Girl\" at the Games.","https://en.wikipedia.org/wiki/Ethel_Catherwood","Ethel Catherwood was a kickass, gold-medal winning Saskatoonian who didn't give two hoots about other people's dumb opinions. After kicking unparalleled ass at the 1928 Olympics, Ethel got secretly married and divorced in Reno, while the press were all \"BUT ETHEL!\" and Ethel was like, \"You know what? I don't do interviews.\" This athletic goddess brought home what is still Canada's only track-and-field female gold. Thatta girl, Ethel.","img/ethel-catherwood.jpg");

//==============================================================
//PRIMARY FUNCTION (EXECUTES WHEN PAGE IS LOADED)
//==============================================================

document.addEventListener('DOMContentLoaded', function (event) {
  // replaces elements in layout with a random person from the badass array
  document.getElementById("badassName").innerHTML = badass[randomNumber][0];
  document.getElementById("badassLink").setAttribute("href", badass[randomNumber][2]);
  document.getElementById("badassSub").innerHTML = badass[randomNumber][1];
  document.getElementById("badassBio").innerHTML = badass[randomNumber][3];
//  document.getElementById("badassImage").setAttribute("src", badass[randomNumber][4]);
  document.getElementById("badassPerson").style.backgroundImage = "url("+ badass[randomNumber][4] +")";


// All of this code was stolen from https://paintbycode.github.io/gradient-generator/

  //==============================================================
  //FUNCTION TO CREATE RANDOM INTEGER
  //==============================================================
//    function randInt(min, max) {
//        return Math.floor((Math.random() * max) + min);
//    }

//  //==============================================================
//  //RGB GENERATOR
//  //==============================================================
//  //random 0 to 255 number for rgb values
//  var redTop = randInt(0, 255);
//  var greenTop = randInt(0, 255);
//  var blueTop = randInt(0, 255);
//  var rgbTop = "rgb(" + redTop + "," + greenTop + "," + blueTop + ")";

//  var redBottom = randInt(0, 255);
//  var greenBottom = randInt(0, 255);
//  var blueBottom = randInt(0, 255);
//  var rgbBottom = "rgb(" + redBottom + "," + greenBottom + "," + blueBottom + ")";


//  var degrees = randInt(0, 360) + "deg";

//  //==============================================================
//  //REVERSE RGB VALUE FOR CONTRAST TEXT COLOUR
//  //==============================================================
//  //get the 'reverse' value for the displayed rgb value
//  function reverseRgb(rgbValue) {
//      var revRgbValue = 255 - rgbValue;
//      return revRgbValue;
//  }

//  var reverseRedTop = reverseRgb(redTop);
//  var reverseGreenTop = reverseRgb(greenTop);
//  var reverseBlueTop = reverseRgb(blueTop);
//  var reverseRgbTop = "rgb(" + reverseRedTop + "," + reverseGreenTop + "," + reverseBlueTop + ")";

//  var reverseRedBottom = reverseRgb(redBottom);
//  var reverseGreenBottom = reverseRgb(greenBottom);
//  var reverseBlueBottom = reverseRgb(blueBottom);
//  var reverseRgbBottom = "rgb(" + reverseRedBottom + "," + reverseGreenBottom + "," + reverseBlueBottom + ")";

//  //==============================================================
//  //CONVERT RGB TO HEX
//  //==============================================================
//  //convert rgb to hex
//  function rgbToHex(rgbValue) {
//      //convert passed number to hexadecimal
//      var rgbConverted = rgbValue.toString(16);
//      //prefix a "0" if required
//      return rgbConverted.length == 1 ? "0" + rgbConverted : rgbConverted;
//  };

//  var redHexTop = rgbToHex(redTop);
//  var greenHexTop = rgbToHex(greenTop);
//  var blueHexTop = rgbToHex(blueTop);
//  var hexTop = "#" + redHexTop + "" + greenHexTop + "" + blueHexTop;

//  var redHexBottom = rgbToHex(redBottom);
//  var greenHexBottom = rgbToHex(greenBottom);
//  var blueHexBottom = rgbToHex(blueBottom);
//  var hexBottom = "#" + redHexBottom + "" + greenHexBottom + "" + blueHexBottom;

  //==============================================================
  //SETTING THE MAIN GRADIENT
  //==============================================================
//  document.querySelector("body").style.backgroundImage = "linear-gradient(to bottom, " + rgbTop + "," + rgbBottom + ")";
//  document.querySelector("body").style.color = "white";

});
