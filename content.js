var randomNumber = Math.floor(Math.random()*2);

// Time based badassery: count the days from IWD to IWD to make a reference to the badasses in the badass array.

var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
var firstDate = new Date(2017,02,09);
var secondDate = new Date(2018,02,08);

var diffDays = Math.round((firstDate.getTime() - secondDate.getTime())/(oneDay))+365;


//==============================================================
//BADASSES
//==============================================================

var badass = new Array();
// data format for badasses: name (0), nickname or sub-head (1), link (2), short bio (3), image (4)

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
  document.getElementById("badassPerson").style.backgroundImage = "url("+ badass[randomNumber][4] +")";
  document.getElementById("random").addEventListener("click", rando);

});

function rando() {
    randomNumber = Math.floor(Math.random()*2);
    document.getElementById("badassName").innerHTML = badass[randomNumber][0];
    document.getElementById("badassLink").setAttribute("href", badass[randomNumber][2]);
    document.getElementById("badassSub").innerHTML = badass[randomNumber][1];
    document.getElementById("badassBio").innerHTML = badass[randomNumber][3];
    document.getElementById("badassPerson").style.backgroundImage = "url("+ badass[randomNumber][4] +")";

}
