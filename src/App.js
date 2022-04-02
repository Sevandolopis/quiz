import React, {useState} from 'react';
import './App.css';

function App() {
  const questions = [
    {
      questionText: 'lexicology is _____',
      answerOptions: [
        {answerText: 'a science about words', isCorrect: false},
        {answerText: 'a science about all the vocabulary and its origins/development', isCorrect: true},
        {answerText: 'a science about origins of words', isCorrect: false},
        {answerText: 'a science about developmen of grammar layer', isCorrect: false},
      ]
    },
    {
      questionText: 'English belongs to _____ of languages',
      answerOptions: [
        {answerText: 'Germanic group', isCorrect: true},
        {answerText: 'Roman group', isCorrect: false},
        {answerText: 'Celtic group', isCorrect: false},
        {answerText: 'Scandinavian group', isCorrect: false},
      ]
    },
    {
      questionText: 'the country that DOES NOT belong to the Commonwealth of Nations is _____',
      answerOptions: [
        {answerText: 'Canada', isCorrect: false},
        {answerText: 'Australia', isCorrect: false},
        {answerText: 'the USA', isCorrect: true},
        {answerText: 'India', isCorrect: false},
      ]
    },
    {
      questionText: 'the country whose head is NOT the Queen of Great Britain is: _____',
      answerOptions: [
        {answerText: 'the UK', isCorrect: false},
        {answerText: 'India', isCorrect: true},
        {answerText: 'New Zeland', isCorrect: false},
        {answerText: 'Canada', isCorrect: false},
      ]
    }
  ]

const [currentQuestion, setCurrentQuestion] = useState(0)
const [score, setScore] = useState(0)
const [showScore, setShowScore] = useState(false)

const handleAnswerOptionClick = (isCorrect) => {
  if (isCorrect) {
    setScore(score + 1)
  }

const nextQuestion = currentQuestion + 1
  if (nextQuestion < questions.length){
    setCurrentQuestion(nextQuestion)
  } else {
    setShowScore(true)
  }
}

const refresh = () => {
  setCurrentQuestion(0)
  setScore(0)
  setShowScore(false)
}

  return (
    <div className="app">
      

    {
      showScore
        ? <div className='section_score'>
            <div>Правильных ответов: {score} из {questions.length}. Ну ты просто машина</div>
            <button 
              onClick={refresh}
              className='refresh_button'>Сделать жалкую попытку пройти этот кошмар снова</button>
          </div>
          :  <div className="quizz">
                  <div className="question_section">
                    <div className="question_count">
                      <span>Вопрос {currentQuestion + 1} </span> / {questions.length}
                    </div>
                  <div className="question_text">{questions[currentQuestion].questionText}</div>
                </div>

                <div className="answer_section">
                  {questions[currentQuestion].answerOptions.map(item => 
                  (<button onClick={() => handleAnswerOptionClick(item.isCorrect)}>{item.answerText}</button>))}          
                </div>
              </div>}   
    </div>
  );
}

export default App;
