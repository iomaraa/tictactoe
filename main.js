

var playerTurn = "X"



var pMove = function () {
   $('.container').on('click', function () {
      if ($(event.target).text() == '') {
         $(event.target).text(playerTurn);
         changeP()
         win()
      }
   })
}

pMove();
function changeP() {
   if (playerTurn == "X") {
      playerTurn = "O"
   } else {
      playerTurn = "X"
   }
}

function win() {
   if ($('.box1').text() == 'X' && $('.box2').text() == 'X' && $('.box3').text() == 'X' ||
      $('.box4').text() == 'X' && $('.box5').text() == 'X' && $('.box6').text() == 'X' ||
      $('.box7').text() == 'X' && $('.box8').text() == 'X' && $('.box9').text() == 'X' ||
      $('.box1').text() == 'X' && $('.box4').text() == 'X' && $('.box7').text() == 'X' ||
      $('.box2').text() == 'X' && $('.box5').text() == 'X' && $('.box8').text() == 'X' ||
      $('.box3').text() == 'X' && $('.box6').text() == 'X' && $('.box9').text() == 'X' ||
      $('.box3').text() == 'X' && $('.box5').text() == 'X' && $('.box7').text() == 'X' ||
      $('.box1').text() == 'X' && $('.box5').text() == 'X' && $('.box9').text() == 'X'
   ) {
      $('.gameStatus').text('Player 1 Won the Game')
   } else if ($('.box1').text() == 'O' && $('.box2').text() == 'O' && $('.box3').text() == 'O' ||
      $('.box4').text() == 'O' && $('.box5').text() == 'O' && $('.box6').text() == 'O' ||
      $('.box7').text() == 'O' && $('.box8').text() == 'O' && $('.box9').text() == 'O' ||
      $('.box1').text() == 'O' && $('.box4').text() == 'O' && $('.box7').text() == 'O' ||
      $('.box2').text() == 'O' && $('.box5').text() == 'O' && $('.box8').text() == 'O' ||
      $('.box3').text() == 'O' && $('.box6').text() == 'O' && $('.box9').text() == 'O' ||
      $('.box3').text() == 'O' && $('.box5').text() == 'O' && $('.box7').text() == 'O' ||
      $('.box1').text() == 'O' && $('.box5').text() == 'O' && $('.box9').text() == 'O') {
      $('.gameStatus').text('Player 2 Won the Game')
   } else{
      $('.gameStatus').text('its a TIE you idiots')
   }
}






function newGame() {
   $('.btnNGame').on('click', function () {
      playerTurn = 'X'
      for (var i = 1; i <= 9; i++) {
         $('.box' + i).text('')
      }
   })
}


newGame()
var i = 0
var j = 0
var t =0

if (i && t && j == 0) {
console.log("hi")
} else {
   console.log("hello");
   
}