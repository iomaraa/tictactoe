

var playerTurn = "X"

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



var pMove = function () {
   $('.container').on('click', function () {
      if ($(event.target).text() == '') {
         $(event.target).text(playerTurn);
         aI()
         win()



      }
   })
}

pMove();

function win() {
   for (var i = 0; i < winComb.length; i++) {
      if ($('.box' + winComb[i][0]).text() == 'X' && $('.box' + winComb[i][1]).text() == 'X' && $('.box' + winComb[i][2]).text() == 'X') {
         swal("Player 1 Won the Round");
         newGame()
      } else if ($('.box' + winComb[i][0]).text() == 'O' && $('.box' + winComb[i][1]).text() == 'O' && $('.box' + winComb[i][2]).text() == 'O') {
         swal("Fred Won the Round");
         newGame()
      }
   }
}




function newGame() {
   for (var i = 1; i <= 9; i++) {
      $('.box' + i).text('')
   }
}


$('.btnNGame').click(function () {
   location.reload();
});




function aI() {
   if ($('.box5').text() == 'X' && $('.box1').text() == '') {
      $('.box1').text('O')
   } else if ($('.box3').text() == 'X' && $('.box7').text() == '') {
      $('.box7').text('O')
   } else if ($('.box3').text() == 'X' && $('.box7').text() == '') {
      $('.box7').text('O')
   }
   else if ($('.box7').text() == 'X' && $('.box3').text() == '') {
      $('.box3').text('O')
   } else if ($('.box9').text() == 'X' && $('.box3').text() == '') {
      $('.box3').text('O')
   }
   else if ($('.box4').text() == 'X' && $('.box6').text() == '') {
      $('.box6').text('O')
   } else if ($('.box8').text() == 'X' && $('.box2').text() == '') {
      $('.box2').text('O')
   } else {
      if ($('.box1').text() == '') {
         $('.box1').text('O')
      } else if ($('.box2').text() == '') {
         $('.box2').text('O')
      } else if ($('.box3').text() == '') {
         $('.box3').text('O')
      } else if ($('.box4').text() == '') {
         $('.box4').text('O')
      } else if ($('.box5').text() == '') {
         $('.box5').text('O')
      } else if ($('.box6').text() == '') {
         $('.box6').text('O')
      } else if ($('.box7').text() == '') {
         $('.box7').text('O')
      } else if ($('.box8').text() == '') {
         $('.box8').text('O')
      } else if ($('.box9').text() == '') {
         $('.box9').text('O')
      }
   }
}

Swal.fire({
   title: 'Hello!',
   text: "I'm Toaster, but people people call me the Toastroyer. How about we play some Tic Tac Toe?",
   imageUrl: "https://png2.kisspng.com/sh/4484de1df98912200e32a133752a9dd4/L0KzQYm3VcE6N51ohJH0aYP2gLBuTgRwaaR5feQ2bHHwgMq0gf5qdZJ5fdY2ZnnvfX68gfZnamg6fqhrNUm5QHACVsEzQGM5UaMAMka6QIm3VsM1O2o8RuJ3Zx==/kisspng-toaster-lampy-animated-film-5affb75f6b5960.9612824915267080634397.png",
   imageWidth: 300,
   imageHeight: 250,
   imageAlt: 'Custom image',
   animation: false
})

