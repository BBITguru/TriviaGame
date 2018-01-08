var time = 100;
var IntervalId;
var currIndex = 0;
var correct = 0;
var wrong = 0;


//run start function when start button is clicked
function start(){
// run decrement function every second
  intervalID = setInterval(decrement, 1000);
  console.log(intervalID);
  // hide StartBtn when clicked
//function hideStart() {
  //document.getElementById("startBtn").style.visibility = "hidden";
  $('#startBtn').css('visibility', 'hidden');
  $('#trivContainer').css('display', 'block');
  nextQuestion();
//};
}

function stop(){
  clearInterval(intervalID);
  $("#trivContainer").css('display', 'none');
  var right = $("<p>").text("Correct: " + correct);
  var incorrect = $("<p>").text("Wrong: " + wrong);
  $("#endGame").append(right, incorrect);
  var reset = $("<button>").text("Reset").attr("id", "reset");
  $("#endGame").append(reset);
}

function reset (){
  time = 100;
  currIndex = 0;
  correct = 0;
  wrong = 0;
  $('#endGame').empty();
  start();
}

$("#startBtn").on("click", start);
$(document).on("click", "#reset", reset);

function decrement() {
  //subtracts from time
  time --;
  // updates html with new number
  $("#timeLeft").html(time);
  // when time hits 0....
  if (time === 0) {
    //...run the stop function...
    stop();
    alert("Time's up!");
      //...and add user's score...
      //function userScore ();
    
  }
}

function nextQuestion(){
  if(currIndex === quizQs.length){
    stop();
  }
  else {
    var currQuestion = quizQs[currIndex];
    //Question and answers 
    $('#trivQuestion').text( currQuestion.question );
    $("#choice0").text(currQuestion.choices[0]);
    $("#choice1").text(currQuestion.choices[1]);
    $("#choice2").text(currQuestion.choices[2]);
    $("#choice3").text(currQuestion.choices[3]);
  }

}

function clickAns () {
  var ans = $(this).attr("id");
  var currQuestion = quizQs[currIndex];
  console.log(ans)
  if(ans === currQuestion.corIndex){
    correct++;
  }
  else {
    wrong++;
  }
  console.log('correct', correct, 'wrong', wrong);
  currIndex++;
  nextQuestion();
}

$(".answer").on("click", clickAns );


// function userScore(){}
// var start = document.getElementById('startBtn') start.addEventListener('click',hideshow,false);
// function (){
//   document.getElementById('hidden-div').style.display = 'block';
//   this.style.display = 'none'
// }

// Quiz questions
var quizQs = [ 
  { question: "Which artist had the first number one rap single in the 90's?",
    picture: 'assets/images/vanilla-ice.jpg',
    choices: ['MC Hammer','Vanilla Ice','DJ Jazzy Jeff and the Fresh Prince','Kriss Kross'],
    corIndex: "choice1"
  },
  { question: 'What does "Dah-ay-loh-oo-tye" mean in Furbish?',
    picture: 'assets/images/furbie.png',
    choices: ['"Good Morning!"','"Time To Hug!"','"Where Are You?"','"Lets Dance"'],
    corIndex: "choice0"
  },
  {	question: 'What were the 2 versions of Pokemon released in the US in 1996? ',
    picture: 'assets/images/furbie.png',
    choices: ['Red & Green','Yellow & Blue','Blue & Green','Red & Blue'],
    corIndex: "choice3"
  },
  {	question: 'What popular fast food restaurant featured a lap dog and Godzilla in a 1998 commercial?',
    picture: 'assets/images/Godzilla.png',
    choices: ["McDonald's","Wendy's",'Taco Bell','Burger King'],
    corIndex: "choice2"
  },
  {	question: "What is Screech's real name in Saved by the Bell?",
    picture: 'assets/images/furbie.png',
    choices: ['Austin Powers','Samuel Powers','Jason Powers','Steven Powers'],
    corIndex: "choice1"
  },
  {	question: "From what popular 90's TV show did Joey Lawrence commonly use the phrase, 'Whoa!'",
    picture: 'assets/images/furbie.png',
    choices: ['Friends','Blossom','Saved by the Bell','Boy Meets World'],
    corIndex: "choice1"
  },
  {	question: "What was the main protagonist / bully in the popular 90's cartoon, Doug?",
    picture: 'assets/images/furbie.png',
    choices: ['Allen','Skeeter','Jimmy','Roger'],
    corIndex: "choice3"
  }
]