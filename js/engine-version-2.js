/* Variables we need for the game */
/* This is the list of options for the computer move */
var choices = ["rock", "paper", "scissors"];
/* These are the variables you need to keep track of the score */
var played = 0;
var won = 0;
var lost = 0;
var draw = 0;
/*
This listens for the button click of the user.
$('button') : this selects any HTML element that is a button.
.click(function(event){...} : if a button is clicked then the jQuery click function will start doing it's thing.
 */
$('button').click(function(event){
  /* Here we create a variable called play_you. And we give it the value of value attribute of "this" button (the one that was clicked). */
  var play_you = this.getAttribute("value");
  /* Then we display which button was clicked in the HTML.
  $("#play_you") : this selects an HTML element that has the id of #play_you
  .text(play_you) : on this HTML element the jQuery function text is applied to replace all the content between the HTML tags of this element with the value of the play_you variable. */
  $("#play_you").text(play_you);
  /* Here we create a variable called play_machine and we assign it the value of whatever happens in the function computer_move(). To get that value, the programme will now jump to that function and then come back when it is done. And when it's done it will bring back a value to assign to play_machine. */
  var play_machine = computer_move();
  /* We create a variable called verdict and we assign it the value of whatever happens in the function compare(). The programme will  jump to that function and take the values of play_you and play_machine with it. When it's done it will bring back a value to assign to verdict. */
  var verdict = compare(play_you, play_machine);
  /* This is a call to the score function. And it takes the value of the verdict variable with it so it can use that to display the score. Once this function call is done, the all the things that need to happen for the button click are done. If another button is clicked, all the stuff here will be done again. */
  score(verdict);
});
/*
This function creates a counter move by the computer. Once it's completed all it's instructions, it will return to where it was called in the first place. */
function computer_move() {
  /* Creating a variable play_machine that gets a random number assigned between 0 and 2 */
  var play_machine = Math.floor(Math.random() * (3 - 0)) + 0;
  /* The random number is now being converted to the corresponding value in the list of options we created at the top of the programme. The first item in a list in computer programmes is always 0. */
  play_machine = choices[play_machine];
  /* Here we update the HTML with the value of the computer move. */
  $("#play_machine").text(play_machine);
  /* We're done in this function and return to the button click function. And the value of play_machine is returned to assign to the play_machine variable in the button click function. */
  return play_machine;
}
/*
This function compares the move of the user with that of the computer. And then updates the value of the verdict in the HTML.
It receives the values of the user move and the computer move to do the comparing. */
function compare(you, machine) {
  /* We first create a variable called verdict and we set it to "lose" as a default. Once we start comparing both moves, we will only update this variable if the verdict is no longer lose. */
  var verdict = 'lose';
  /* Here we begin to compare the two moves. First we check if they are the same, if they are, the verdict variable is changed from "lose" to "draw". */
  if (you == machine) {
    verdict = 'draw';
    /* If the previous if statement was not true, we check if user move was rock AND if the computer move was scissors. If this is true (both need to be true), then the verdict variable is changed from "lose" to "win". */
  } else if ((you == "rock") && (machine == "scissors")) {
    verdict = 'win';
    /* Same as the previous if statement, but with two different options. If both are true, the verdict variable will be updated. If not, we're moving to the next if statement. */
  } else if ((you == "paper") && (machine == "rock")) {
    verdict = 'win';
    /* Same as the previous if statement, but with two different options. If both are true, the verdict variable will be updated. If not, we're moving to the next if statement. */
  } else if ((you == "scissors") && (machine == "paper")) {
    verdict = 'win';
  }
  /* In the event that none of the if statements were true than the verdict value will still be "lose".*/
  /* Here we update the HTML to show the value of our verdict variable. */
  $("#verdict").text(verdict);
  /* We're done in this function and return to the button click function. The value of verdict is returned to assign to the verdict variable in the button click function. */
  return verdict;
}
/* This function will update the score values in the HTML. It receives the value of the verdict variable so we can use that to update all the possible tallies. */
function score(verdict) {
  /* The switch statement is like an if statement, but easier to read. It's used when you want to check the value of a single variable against possible options. You give the switch statement the variable you want to check. */
  switch (verdict) {
    /* In case that the value of verdict is equal to "win", the following instructions are done. */
    case 'win':
      /* First we add 1 to the win counter variable.*/
      won++;
      /* Then we update the HTML element that keeps track of the number of wins we had. */
      $("#game_won").text(won);
      /* And here we "break out" of the switch statement. There is nothing else in this switch statement for us to do. */
      break;
      /* In case that the value of verdict is equal to "lose", the following instructions are done. */
    case 'lose':
      lost++;
      $("#game_lost").text(lost);
      break;
      /* In case that the value of verdict is equal to "draw", the following instructions are done. */
    case 'draw':
      draw++;
      $("#game_draw").text(draw);
      break;
  }
  /* Once the switch statement is completed, we need to update the number of games we have played by 1. */
  played++;
  /* And then finally we update that value in the HTML too. */
  $("#game_played").text(played);
  /*
  THE END.
  EVERYONE LIVED HAPPILY EVER AFTER.
  */
}
