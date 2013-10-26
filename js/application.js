var computerChoice = Math.floor(Math.random() * 100  +1);

$(function() {
    console.log("loaded");
    var userChoice = 0;
    var previousChoice = 0;
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
    } else if(true) {
         console.log("This is the else statement");
         
    } else {
         console.log("This is the else statement");
}
};

var newGame = function() {
   $("#reset").click(function(){
    console.log("test");
    $("#anwser").empty();
})
};



