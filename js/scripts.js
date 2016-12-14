//business logic
var result = 0;
var player1total = 0;
var player2total = 0;

function roll1() {
    result = Math.floor((Math.random() * 6) + 1);
    if (result === 1 || result == 6) {
        $(".button-roll-player1").hide();
    }
    else {
        return result;
    }
};

function roll2() {
    result = Math.floor((Math.random() * 6) + 1);
    if (result === 1 || result == 6) {
        $(".button-roll-player2").hide();
    }
    else {
        return result;
    }
};

function play1() {
    player1total += result;
    return player1total;
};

function play2() {
    player2total += result;
    return player2total;
};

function hold1() {
    $(".button-roll-player1").hide();
};

function hold2() {
    $(".button-roll-player2").hide();
};

function winner() {
    if (play1() > play2()) {
        $(".display-result1").text("player1 wins");
    }
    else {
        $(".display-result2").text("player2 wins");
    }
};
////userinterface
$(document).ready(function () {
    $(".button-roll-player1").click(function () {
        $("#display-die-player1").text(roll1());
        $("#display-dice-player1").text(play1());
    });
    $(".button-hold-player1").click(function () {
        $(".button-roll-player1").hide();
    });
    $(".button-roll-player2").click(function () {
        $("#display-die-player2").text(roll2());
        $("#display-dice-player2").text(play2());
    });
    $(".button-hold-player2").click(function () {
        $(".button-roll-player2").hide();
    });
    $(".button-score-players").click(function () {
        $(".winner").text(winner());
    })
});