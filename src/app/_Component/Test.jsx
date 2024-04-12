"use client"
import { useState } from 'react'
import CircularProgress from '@mui/joy/CircularProgress';
// import { quiz } from '../../data/questions'
import './Test.css'
import img from '@/app/Mascot/happy.gif'
import { PieChart } from '@mui/x-charts/PieChart';

import sad from '@/app/Mascot/sadd.gif'
import Image from 'next/image'
const Quiz = () => {
  const quiz = {
    topic: 'Javascript',
    level: 'Beginner',
    totalQuestions: 4,
    perQuestionScore: 5,
    questions: [
      {
        question: 'Which function is used to serialize an object into a JSON string in Javascript?',
        choices: ['stringify()', 'parse()', 'convert()', 'None of the above'],
        type: 'MCQs',
        correctAnswer: 'stringify()',
      },
      {
        question: 'Which of the following keywords is used to define a variable in Javascript?',
        choices: ['var', 'let', 'var and let', 'None of the above'],
        type: 'MCQs',
        correctAnswer: 'var and let',
      },
      {
        question:
          'Which of the following methods can be used to display data in some form using Javascript?',
        choices: ['document.write()', 'console.log()', 'window.alert', 'All of the above'],
        type: 'MCQs',
        correctAnswer: 'All of the above',
      },
      {
        question: 'How can a datatype be declared to be a constant type?',
        choices: ['const', 'var', 'let', 'constant'],
        type: 'MCQs',
        correctAnswer: 'const',
      },
    ],
  }
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  })

  const { questions } = quiz
  const { question, choices, correctAnswer } = questions[activeQuestion]

  const onClickNext = () => {
    setSelectedAnswerIndex(null)
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    )
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1)
    } else {
      setActiveQuestion(0)
      setShowResult(true)
    }
  }

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index)
    if (answer === correctAnswer) {
      setSelectedAnswer(true)
    } else {
      setSelectedAnswer(false)
    }
  }

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)


  return (
    
    <div className="quiz-container">
       
      {!showResult ? (
        <div>
          <div>
            <span className="active-question-no">{addLeadingZero(activeQuestion + 1)}</span>
            <span className="total-question">/{addLeadingZero(questions.length)}</span>
          </div>
          <h2>{question}</h2>
          <ul>
            {choices.map((answer, index) => (
              <li
                onClick={() => onAnswerSelected(answer, index)}
                key={answer}
                className={selectedAnswerIndex === index ? 'selected-answer' : null}>
                {answer}
              </li>
            ))}
          </ul>
          <div className="flex-right">
            <button onClick={onClickNext} disabled={selectedAnswerIndex === null}>
              {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      ) : (
        <>
        <div className="result">
        

          <h3>Result</h3>
          <div className='ml-16'>
          
          <CircularProgress color="primary" sx={{ '--CircularProgress-size': '80px' }} determinate value={(result.correctAnswers/quiz.totalQuestions)*100}>
          {(result.correctAnswers/quiz.totalQuestions)*100 }%
      </CircularProgress>
      </div>
      {/* <!-- question - start --> */}
      <div class="border-b">
        <div class="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
          <span class="font-semibold transition duration-100 md:text-lg"> Total Question: </span>

          <span class="text-indigo-500 text-xl">
          {questions.length}
          </span>
        </div>

      </div>
      {/* <!-- question - end -->

  

      <!-- question - start --> */}
      <div class="border-b">
        <div class="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
          <span class="font-semibold transition duration-100 md:text-lg">Correct Answers:</span>

          <span class="text-indigo-500 text-xl">
          {result.correctAnswers}
          </span>
        </div>
      </div>
      <div class="border-b">
        <div class="flex cursor-pointer justify-between gap-2 py-4 text-black  active:text-indigo-600">
          <span class="font-semibold transition duration-100 md:text-lg">Wrong Answers:</span>

          <span class="text-indigo-500 text-xl">
          {result.wrongAnswers}
          </span>
      
      </div>
   
    {/* <div >
          <p>
            Total Question: <span>{questions.length}</span>
          </p>
          <p>
            Total Score:<span> {result.score}</span>
          </p>
          <p>
            Correct Answers:<span> {result.correctAnswers}</span>
          </p>
          <p>
            Wrong Answers:<span> {result.wrongAnswers}</span>
          </p>
          </div> */}
          {/* <PieChart
         
         series={[
           {
             data: [
               { id: 0, value: result.correctAnswers, label: 'Correct' },
               { id: 1, value:result.wrongAnswers, label: 'Wrong' },
             ],
           },
         ]}
         width={300}
         height={200}
       /> */}
        </div>
        </div>

        {
          result.wrongAnswers>quiz.totalQuestions/2?
          <Image src={sad}/>
          :
          <Image src={img}/>
         
        }
        
        </>
      )}
    </div>
  )
}

export default Quiz