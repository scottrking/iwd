
  var randomNumber = Math.floor(Math.random()*2);

  var badass = new Array();
  // data format for badasses: name (0), link (1), birth/death (2), short bio (3), image (4)

  badass[0] = new Array("Veronica Foster","https://en.wikipedia.org/wiki/Veronica_Foster","January 2, 1922-2000","Popularly knownas \"Ronnie, the Bren Gun Girl\", was a Canadian icon representing nearly one million Canadian women who worked in themanufacturing plants that produced munitions and materiel during World War II","img/VeronicaFoster-RonnieBrenGunGirl-smoke.jpg");

  badass[1] = new Array("Elsie MacGill","https://en.wikipedia.org/wiki/Elsie_MacGill","March 27, 1905 - 1980","Known as the\"Queen of the Hurricanes\", was the world's first woman to earn an aeronautical engineering degree.","img/Elsie_macgill.jpg");


document.addEventListener('DOMContentLoaded', function (event) {
  // replaces elements in layout with a random person from the badass array
  document.getElementById("badassName").innerHTML = badass[randomNumber][0];
  document.getElementById("badassLink").setAttribute("href", badass[randomNumber][1]);
  document.getElementById("badassBirth").innerHTML = badass[randomNumber][2];
  document.getElementById("badassBio").innerHTML = badass[randomNumber][3];
  document.getElementById("badassImage").setAttribute("src", badass[randomNumber][4]);
});
