//business logic
var result = 0;
var player1total = 0;


function roll() {
    result = Math.floor((Math.random() * 6) + 1);
    return result;
};

function play() {
    //var player1dice = new Array();
     player1total += result;
    //var output = "";
    // for (var index = 0; index < 6; index++) {
    //     player1dice[index] = roll();
    //     player1total += player1dice[index];
    // }
  //  return output = player1points(player1dice);
      return player1total;
};

function player1points(dice) {
    var output = "";
    for (var num = 0; num < dice.length; num++) {
        output += dice[num];
    }
    return output;
};
////userinterface
$(document).ready(function () {
    $(".button-roll-player1").click(function () {
        $("#display-die-player1").text(roll());
        $("#display-dice-player1").text(play());
    });
});
