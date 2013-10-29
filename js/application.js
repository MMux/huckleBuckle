var computerChoice = Math.floor(Math.random() * 100  +1);

$(function() {
    console.log("loaded");
    
    var userChoice = 0;
    var previousChoice = 0;
    var answerArea = ("#answer");
        console.log(computerChoice);
    $("#submit").click(function(){
        userChoice = +$("#guess").val();
        console.log(userChoice);
        compareChoice(userChoice);
        previousChoice = userChoice;
})
});

        
var compareChoice = function(choice) {
    if (choice === computerChoice) {
        console.log("Nicely Done! That's the answer!");
        $( "#answer" ).append( document.createTextNode( "Nicely done! That's the answer" ) );
    } else if(choice == ' ') {
         console.log("Please enter a number");
         $("#answer").append(document.createTextNode("Please enter a number"));
         } else if((choice > 100) || (choice < 0)) {
         console.log("Please enter a number between 0 and 100");
         $("#answer").append(document.createTextNode("Please enter a number between 0 and 100"));
         
    } else if () {
    


    } else {
         console.log("This is the else statement");
}
};

/*

var newNumber = function() {
    var computerChoice = newNumber();
}
*/

var divClone = ("$answer");

   $("#reset").click(function(){
   $("#answer").replaceWith("Time for a new game! Make another guess.");
    console.log("New Game");
   /*  $("#answer"). */
   $("#answer").replaceWith(divClone); 
})


