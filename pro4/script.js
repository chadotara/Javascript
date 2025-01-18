const questions = [
  {
    questions:
      "In what year did the Great October Socialist Revolution take place?",
    answers: [
      {
        text: "1917",
        correct: "true",
      },
      {
        text: "1923",
        correct: "false",
      },
      {
        text: "1914",
        correct: "false",
      },
      {
        text: "1920",
        correct: "false",
      },
    ],
  },
  {
    questions:
      "What is the largest lake in the world?",
    answers: [
      {
        text: "Caspian Sea",
        correct: "false",
      },
      {
        text: "Baikal",
        correct: "true",
      },
      {
        text: "Lake Superior",
        correct: "false",
      },
      {
        text: "Ontario",
        correct: "false",
      },
    ],
  },
  {
    questions:
      "Which planet in the solar system is known as the “Red Planet”?",
    answers: [
      {
        text: "Venus",
        correct: "false",
      },
      {
        text: "Earth",
        correct: "false",
      },
      {
        text: "Mars",
        correct: "true",
      },
      {
        text: "Jupiter",
        correct: "false",
      },
    ],
  },

  {
    questions:
      "Which river is the longest in the world?",
    answers: [
      {
        text: "Amazon",
        correct: "false",
      },
      {
        text: "Mississippi",
        correct: "false",
      },
      {
        text: "Nile",
        correct: "true",
      },
      {
        text: "Yangtze",
        correct: "false",
      },
    ],
  },


];
const questionsElement = document.getElementById("question");
const answerButton = document.getElementById("answer-btn");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex =0;
let score = 0;

function startQuiz(){
    currentQuestionIndex =0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();

}

function showQuestion(){

    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionsElement.innerHTML= questionNo +"."+ currentQuestion.questions;


    currentQuestion.answers.forEach(answers=> {
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answers.correct) {
            button.dataset.correct = answers.correct;
            
        }
        button.addEventListener("click",selectAnswer);

    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);

    }
}


function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if (isCorrect){
        selectBtn.classList.add("correct");
        score++;

    }else{
        selectBtn.classList.add("incorrect")
    }
    Array.from(answerButton.children).forEach(button=>{
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
            
        }
        button.disabled =true;
    });
    nextButton.style.display = "block";
}


function showScore(){
    resetState();
    questionsElement.innerHTML = `your score is ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Agin";
    nextButton.style.display = "block"
}


function handleNext(){
    currentQuestionIndex++;
    if (currentQuestionIndex<questions.length) {
        showQuestion();
        
    }else{
        showScore();
    }
}

nextButton.addEventListener ("click" ,()=>
{
    if (currentQuestionIndex<questions.length) {
        handleNext();
        
    }else{
        startQuiz();
    }
})
startQuiz();



