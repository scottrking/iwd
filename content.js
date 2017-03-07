// Time based badassery: count the days from IWD to IWD to make a reference to the badasses in the badass array.

var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
var firstDate = new Date(2017, 02, 09);
var secondDate = new Date(2018, 02, 08);

var diffDays = Math.round((firstDate.getTime() - secondDate.getTime()) / (oneDay)) + 365;

var randomNumber = 0;

//==============================================================
//BADASSES
//==============================================================

var badass = new Array();
// data format for badasses: name (0), nickname or sub-head (1), link (2), short bio (3), image (4)

badass.push([
    "Elsie MacGill",
    "\"Queen of the Hurricanes\"",
    "https://en.wikipedia.org/wiki/Elsie_MacGill",
    "The first female airplane designer and the world’s first woman to earn an aeronautical engineering degree, Elsie MacGill wore the pants. (Which was super scandalous at the time, oh my.) Elsie contracted polio and was told she’d never walk again, but girlfriend didn’t have time for that noise. She engineered herself some canes so she could continue her day-to-day of being an absolute boss.",
    "img/elise-macgill"
]);
badass.push([
    "Ethel Catherwood",
    "The \"Prettiest Girl\" at the Games.",
    "https://en.wikipedia.org/wiki/Ethel_Catherwood",
    "Ethel Catherwood was a kickass, gold-medal winning Saskatoonian who didn't give two hoots about other people's dumb opinions. After kicking unparalleled ass at the 1928 Olympics, Ethel got secretly married and divorced in Reno, while the press were all \"BUT ETHEL!\" and Ethel was like, \"You know what? I don't do interviews.\" This athletic goddess brought home what is still Canada's only track-and-field female gold. Thatta girl, Ethel.",
    "img/ethel-catherwood"
]);
badass.push([
    "Buffy Sainte Marie",
    "The Blacklist Slayer",
    "https://en.wikipedia.org/wiki/Buffy_Sainte-Marie",
    "Buffy Sante-Marie has a doctorate in getting in everyone\'s comfortable faces. (Actually, it\'s in fine arts, but she's still Dr. Sante-Marie). They tried blacklisting her on the radio, so she went: \"How about I just rock being an iconic folk singer and native activist for four decades?\" Plus she co-wrote \"Up Where We Belong,\" which I\'M NOT CRYING YOU ARE",
    "img/buffy-sainte-marie",
    "dark"
]);
badass.push([
    "Anne Hébert",
    "Triple Threat",
    "https://en.wikipedia.org/wiki/Anne_H%C3%A9bert",
    "Throughout her long and varied career as a poet, playwright and novelist, Anne Hébert earned a list of accolades that basically makes her the Beyoncé of French-Canadian literature. Plus, this single lady won the Governor General’s Award three times. And she was appointed a Companion of the Order of Canada. Who run the world, indeed.",
    "img/anne-hebert"
]);
badass.push([
    "Carrie Derick",
    "Genius Geneti-sister",
    "https://en.wikipedia.org/wiki/Carrie_Derick",
    "What did years of tireless no-crap taking and relentless research in genetics get Carrie Derick? 3 points for guessing \"the honour of becoming Canada's first female university professor.\" Minus 2 points for forgetting that she was awarded a third the salary of her male counterparts. And this was after she did everything to earn her PhD (except have a penis).",
    "img/carrie-derick"
]);
badass.push([
    "Catherine Schubert",
    "I'm Coming with You, End of Discussion.",
    "http://www.cbc.ca/archives/entry/catherine-schubert-crosses-the-rockies-in-1862",
    "In 1862, when her husband decided to follow the gold prospectors to British Columbia, Catherine Schubert was like, \"Ohhhhh heck no. You think you're leaving me here with three little kids?\" So, four-months-pregnant Catherine packed up her children (5, 3 and 1), and travelled West through fricken freezing, treacherous surroundings. Lady went into labour on a RAFT and became the first woman ever to cross Canada from East to West.",
    "img/catherine-schubert"
]);
badass.push([
    "Cathleen Synge Morawetz",
    "Riding the High Frequency Wave",
    "https://en.wikipedia.org/wiki/Cathleen_Synge_Morawetz",
    "Cathleen Synge Morawetz pioneered advances in partial differential equations and wave propagation math. (Don’t Google that and pretend you know what it means. No one does. Except for Cathleen.) She put those concepts to work in aerodynamic, acoustic and optic fields, improving everyone’s lives. She was told her family would suffer if she went to work, which is probably why she has four successful children and six grandchildren.",
    "img/cathleen-synge-morawetz"
]);
badass.push([
    "Clara Brett Martin",
    "Clara Martin,  Juris Doctor",
    "https://en.wikipedia.org/wiki/Clara_Brett_Martin",
    "Clara Brett Martin was a smart little girl who ( got her B.A. in mathematics at 16) did lots of nice things (petitioned the Law Society of Upper Canada to let her in despite her gender) had nice hobbies (paved the way for women to become lawyers in Canada) and read lots of nice books (understood the importance of education to the future for Canadian women, especially in traditionally masculine fields) and, you know. Nice stuff like that.",
    "img/clara-brett-martin"
]);
badass.push([
    "Elizabeth Smellie ",
    "Matron-in-Chief",
    "https://en.wikipedia.org/wiki/Elizabeth_Lawrie_Smellie",
    "\"Ew, blood!\" said Dr. Elizabeth Smellie never. After patching up the WWII wounded, Elizabeth hit up McGill University to teach another generation of nurses how to kick ass. You know… medically speaking. After that, in competition only with herself, Lizzy served as the first female colonel in the Canadian army as the medical corps’ matron-in-chief in WWII. Yeah, \"matron-in-chief.\" AKA: Lady. Boss.",
    "img/elizabeth-smellie"
]);
badass.push([
    "Emily Carr",
    "Becoming a National Icon",
    "https://en.wikipedia.org/wiki/Emily_Carr",
    "Some people (you) are described as Canadian. Other people (not you) are described as inspiring Canadian icons. But don’t worry – there’s totally hope! All you’ve gotta do is: represent the national imagination through incredible innovative art, win a couple writing awards,  succeed against basically all odds and have a bunch of institutions named for your bravery. So like, probably get going on that.",
    "img/emily-carr"
]);

function make() {
    // replaces elements in layout with a random person from the badass array
    document.getElementById("badassName").innerHTML = badass[randomNumber][0];
    document.getElementById("badassLink").setAttribute("href", badass[randomNumber][2]);
    document.getElementById("badassSub").innerHTML = badass[randomNumber][1];
    document.getElementById("badassBio").innerHTML = badass[randomNumber][3];
    if (window.matchMedia("(min-width: 750px)").matches) {
        /* the viewport is at least 400 pixels wide */
        document.getElementById("badassPerson").style.backgroundImage = "url(" + badass[randomNumber][4] + "-big.jpg)";
    } else {
        /* the viewport is less than 400 pixels wide */
        document.getElementById("badassPerson").style.backgroundImage = "url(" + badass[randomNumber][4] + "-sml.jpg)";
    }

    if (badass[randomNumber][5]) {
        document.getElementById("badassPerson").classList.remove('light');
        document.getElementById("badassPerson").classList.add('dark');
        document.body.style.backgroundColor = "black"
    } else {
        document.getElementById("badassPerson").classList.add('light');
        document.getElementById("badassPerson").classList.remove('dark');
        document.body.style.backgroundColor = "white"
    }
}

function rando() {
    randomNumber = Math.floor(Math.random() * badass.length);
    make();
}


//==============================================================
//PRIMARY FUNCTION (EXECUTES WHEN PAGE IS LOADED)
//==============================================================

document.addEventListener('DOMContentLoaded', function (event) {

    rando();
    document.getElementById("random").addEventListener("click", rando);

});