

var playerTurn = "X"
var p1score = 0
var p2score = 0

//Winning Combanations
var winComb = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9],
   [1, 4, 7],
   [1, 5, 9],
   [3, 5, 7],
   [2, 5, 8],
   [3, 6, 9]
]


//Prints 'X' or 'O'
var pMove = function () {
   $('.container').on('click', function () {
      if ($(event.target).text() == '') {
         $(event.target).text(playerTurn);
         changeP()
         win()
         tie()
       

      }
   })
}

//Function for changing turns
pMove();
function changeP() {
   if (playerTurn == "X") {
      playerTurn = "O"
   } else {
      playerTurn = "X"
   }
}

//calculating Score
var score1 = 0
var score2 = 0

//function to check winner
function win() {
   for (var i = 0; i < winComb.length; i++) {
      if ($('.box' + winComb[i][0]).text() == 'X' && $('.box' + winComb[i][1]).text() == 'X' && $('.box' + winComb[i][2]).text() == 'X') {
         swal("Player 1 Won the Round");
         score1++
         $('.score1').text(score1)
         newGame()
      } else if ($('.box' + winComb[i][0]).text() == 'O' && $('.box' + winComb[i][1]).text() == 'O' && $('.box' + winComb[i][2]).text() == 'O') {
         swal("Player 2 Won the Round");
         score2++
         $('.score2').text(score2)
         newGame()
      }
   }
}




//starts a new game
function newGame() {
   for (var i = 1; i <= 9; i++) {
      $('.box' + i).text('')
   }
}

//reloads the page 
$('.btnNGame').click(function () {
   location.reload();
});

//Check for draw
function tie() {
   var num = 0;
   for (var i = 1; i < 10; i++) {
      if ($('.box' + i).text() == 'X' || $('.box' + i).text() == 'O') {
         num++
      }
   }
   if(num >8){
   swal("It's a Tie, Play Again"); 
   newGame()
}
}