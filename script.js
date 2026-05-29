// LOADER

window.addEventListener("load", () => {

  const loader = document.getElementById("loader");

  setTimeout(() => {

    loader.style.display = "none";

  }, 1500);

});


// QUESTIONS

const questions = [

  {
    question:"Which programming language is mainly used for web page styling?",

    options:[
      "HTML",
      "CSS",
      "Python",
      "Java"
    ],

    answer:"CSS"
  },

  {
    question:"Which symbol is used for comments in JavaScript?",

    options:[
      "//",
      "##",
      "<!-- ->",
      "**"
    ],

    answer:"//"
  },

  
    {
  question:"Which programming language is known as the backbone of web development?",

  options:[
    "Python",
    "Java",
    "JavaScript",
    "C++"
  ],

  answer:"JavaScript"
},


  {
    question:"Which company developed the Java programming language?",

    options:[
      "Microsoft",
      "Sun Microsystems",
      "Google",
      "Apple"
    ],

    answer:"Sun Microsystems"
  },

  {
    question:"Which data structure works on the principle of FIFO?",

    options:[
      "Stack",
      "Queue",
      "Tree",
      "Graph"
    ],

    answer:"Queue"
  }

];


// VARIABLES

let currentQuestion = 0;

let score = 0;

const questionElement = document.getElementById("question");

const optionsElement = document.getElementById("options");

const nextBtn = document.getElementById("nextBtn");

const resultElement = document.getElementById("result");

const questionNumber = document.getElementById("questionNumber");


// LOAD QUESTION

function loadQuestion(){

  resetState();

  let current = questions[currentQuestion];

  questionNumber.innerHTML =
  `Question ${currentQuestion + 1} / ${questions.length}`;

  questionElement.innerHTML = current.question;

  current.options.forEach(option => {

    const button = document.createElement("button");

    button.innerHTML = option;

    button.classList.add("option-btn");

    optionsElement.appendChild(button);

    button.addEventListener("click", () => {

      selectAnswer(button,current.answer);

    });

  });

}


// RESET STATE

function resetState(){

  nextBtn.style.display = "none";

  while(optionsElement.firstChild){

    optionsElement.removeChild(optionsElement.firstChild);

  }

}


// SELECT ANSWER

function selectAnswer(button,correctAnswer){

  const buttons = document.querySelectorAll(".option-btn");

  buttons.forEach(btn => {

    btn.disabled = true;

    if(btn.innerHTML === correctAnswer){

      btn.classList.add("correct");

    }

  });

  if(button.innerHTML === correctAnswer){

    score++;

  }
  else{

    button.classList.add("wrong");

  }

  nextBtn.style.display = "block";

}


// NEXT QUESTION

nextBtn.addEventListener("click", () => {

  currentQuestion++;

  if(currentQuestion < questions.length){

    loadQuestion();

  }
  else{

    showResult();

  }

});


// SHOW RESULT

function showResult(){

  questionElement.innerHTML = "";

  optionsElement.innerHTML = "";

  nextBtn.style.display = "none";

  questionNumber.style.display = "none";

  resultElement.innerHTML =
  `You Scored ${score} out of ${questions.length}`;

}


// START QUIZ

loadQuestion();