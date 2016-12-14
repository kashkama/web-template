//business logic
var result = 0;
var playerstotal = 0;

function roll() {
    result = Math.floor((Math.random() * 6) + 1);
    return result;
};

function play() {
    playerstotal += result;
    return playerstotal;
};
////userinterface
$(document).ready(function () {
    $(".button-roll-player1").click(function () {
        $("#display-die-player1").text(roll());
        if (roll() === 1) {
            $(".button-roll-player1").hide();
            $(".display-result1").text("you lose");
        };
        $("#display-dice-player1").text(play());
    });
    $(".button-roll-player2").click(function () {
        $("#display-die-player2").text(roll());
        if (roll() === 1) {
            $(".button-roll-player2").hide();
        };
        $("#display-dice-player2").text(play());
    });
});