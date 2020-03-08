

// 5 minute timer 
function startTimer(duration, display) {
    var timer = duration
    console.log(timer);

var countDown =  setInterval(function () {
        timer --;
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        display.textContent = minutes + ":" + seconds;
        console.log(timer);
        if (timer === 0) {
            clearInterval(countDown);
            var quits = document.querySelector("#quiz");
            quits.innerHTML = "Game Over!";
        }
    }, 1000);
}
window.onload = function () {
    var threeMinutes = 60 * 3,
        display = document.querySelector('#time');
    startTimer(threeMinutes, display);
};
// --------------------------------------
// Variables defined
// var startButton = document.getElementById("start-btn")
var quiz=document.getElementById("quiz");
var ques= document.getElementById("question");
var opt1=document.getElementById("option1");
var opt2=document.getElementById("option2");
var opt3=document.getElementById("option3");
var opt4=document.getElementById("option4");
var res=document.getElementById("result");
var nextbutton= document.getElementById("next");
var q=document.getElementById('quit');
var highScores=document.getElementById("scores");
var tques=questions.length;
var score=0;
var quesindex=0;


// startButton.addEventListener("click", give_ques(), startTimer());


// quit button functions
function quit()
{         
	      quiz.style.display='none';
          result.style.display='';
          var f=score/tques;
          result.textContent="SCORE ="+f*100;
          q.style.display="none";
}
// show questions w/radio buttons
function give_ques(quesindex) 
{
    ques.textContent=questions[quesindex].question;
	opt1.textContent=questions[quesindex].choices[0];
	opt2.textContent=questions[quesindex].choices[1];
	opt3.textContent=questions[quesindex].choices[2];
	opt4.textContent=questions[quesindex].choices[3];
	 return;
};
// select options
give_ques(0);
function nextques()
{
	var selected_ans= document.querySelector('input[type=radio]:checked');
	if(!selected_ans)
        {alert("SELECT AN OPTION");return;}
        
// verify right or wrong and add to score
	if(selected_ans.value==questions[quesindex].correctAnswer)
        {score++;
        console.log(score)}
	selected_ans.checked=false;
	     quesindex++;
	     if(quesindex==tques-1)
             nextbutton.textContent="Finish";
         var f=score/tques;
	     if(quesindex==tques)
	     {
	     q.style.display='none';
          quiz.style.display='none';
          result.style.display='';
          result.textContent="SCORED:"+ score / tques * 100 + "%!";
            return;
	     }
        give_ques(quesindex);

}


