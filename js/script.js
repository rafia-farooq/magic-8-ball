$(document).ready(function(){

//object magic8ball with properties set

var magic8ball = {};
magic8ball.listOfAnswers = ["It is certain", "Without a doubt", "You may rely on it","yes", "Most likely", "Outlook good", "Signs point to yes", "Ask again later", "Better not tell you now", "Cannot predict now", "No", "Not a chance!"];

//method for selecting a randon answer from the array

magic8ball.method = function(question) {
	var random = Math.random() * this.listOfAnswers.length;
       var wholeNumber = Math.floor(random); 
	   var answer = this.listOfAnswers[wholeNumber];
    //change picture of ball for answer

	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
	$("#answer").fadeIn(4000);
	$("#answer").text(answer);
	console.log(question);
	console.log(answer);
	
};

//hide any html text used as stand-in text for answer

$("#answer").hide();

//ask me a question button functions

var questionClicked = function (){
	$("#answer").hide();
 
$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
 
//wait half a second before showing prompt
   setTimeout(
       function() {
           //show prompt
           var question = prompt("Ask a yes or no question");
		   $("#8ball").effect("shake");
           magic8ball.method(question);
       }, 1000);
};
	
$("#questionButton").click(questionClicked);

	
});