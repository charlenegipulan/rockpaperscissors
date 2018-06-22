/*----- constants -----*/
//lookup for our objects

var dataLookup = ['rock', 'paper', 'scissors'];


//data model for each 
var data = {
    rock: {
        image: "https://i.pinimg.com/originals/43/89/a3/4389a3cd5bb89437cac50854a41ae2f8.png",
        sound: "https://freesound.org/data/previews/364/364711_2531187-lq.mp3",
        beats: "scissors"
    },
    paper: {
        image: "https://cdn0.iconfinder.com/data/icons/rock-paper-scissors-emoji/792/rock-paper-scissors-emoji-cartoon-015-512.png",
        sound: "https://freesound.org/data/previews/214/214854_3408423-lq.mp3",
        beats: "rock"
    },
    scissors: {
        image: "https://cdn0.iconfinder.com/data/icons/rock-paper-scissors-emoji/792/rock-paper-scissors-emoji-cartoon-009-512.png",
        sound: "https://freesound.org/data/previews/324/324092_8335-lq.mp3",
        beats: "paper"
    }
}



/*----- app's state (variables) -----*/
var timerId, count;
var countDownSound = new Audio("https://freesound.org/data/previews/426/426888_7913959-lq.mp3");



/*----- cached element references -----*/
var $playerImg = $('.playerImg');
var $computerImg = $('.computerImg');




/*----- event listeners -----*/
$('button').on('click', playGame);

/*----- functions -----*/
function playGame() {
    count = 3;
    timerId = setInterval(timer, 1000);
}

function timer() {
    countDownSound.play();
    $(".timer").text(count + " secs");
    count --;
    if (count < 0) {
        clearInterval(timerId);
        $(".timer").text("");

        var playerNum = getRandomNumber(0, 2);
        var computerNum = getRandomNumber(0,2);

        var player = dataLookup[playerNum]
        var computer = dataLookup[computerNum];

        $playerImg.css('background-image', `url(${data[player].image})`);
        $computerImg.css('background-image', `url(${data[computer].image})`);
    }
}


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}