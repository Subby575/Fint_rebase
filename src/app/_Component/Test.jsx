"use client"
import { useState } from 'react'
import CircularProgress from '@mui/joy/CircularProgress';
// import { quiz } from '../../data/questions'
import bg from '@/Charac/bg1.jpeg'
import '@/app/_Component/CSS/Test.css'
import img from '@/app/Mascot/happy.gif'
import ok from '@/app/Mascot/ok.jpg'

import {quizzes} from '@/quiz.js'

import sad from '@/app/Mascot/sadd.gif'
import Image from 'next/image'

const Quiz = ({params}) => {
  const currentQuiz = quizzes.find(quiz => quiz.mod === params);

  if (myArray !== undefined) {
    var pa=params.slice(0,4); // Example slice usage
  }
 

// Destructure the content from the current quiz
const { content } = currentQuiz;

const [activeQuestion, setActiveQuestion] = useState(0);
const [selectedAnswer, setSelectedAnswer] = useState('');
const [showResult, setShowResult] = useState(false);
const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
const [result, setResult] = useState({
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
});

// Access questions from content
const { questions } = content[0];

const { question, choices, correctAnswer } = questions[activeQuestion];

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
    <>
       <Image className='absolute z-10 h-screen w-screen' src={bg}/>
    <div className="quiz-container z-20">
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
          <div className='ml-36'>
          
          <CircularProgress color="primary" sx={{ '--CircularProgress-size': '80px' }} determinate value={(result.correctAnswers/5)*100}>
          {(result.correctAnswers/5)*100 }%
      </CircularProgress>
      </div>
      {/* <!-- question - start --> */}
      <div  className="border-b">
        <div  className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
          <span  className="font-semibold transition duration-100 md:text-lg"> Total Question: </span>

          <span  className="text-indigo-500 text-xl">
          {questions.length}
          </span>
        </div>

      </div>
      {/* <!-- question - end -->

  

      <!-- question - start --> */}
      <div  className="border-b">
        <div  className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
          <span  className="font-semibold transition duration-100 md:text-lg">Correct Answers:</span>

          <span  className="text-indigo-500 text-xl">
          {result.correctAnswers}
          </span>
        </div>
      </div>
      <div  className="border-b">
        <div  className="flex cursor-pointer justify-between gap-2 py-4 text-black  active:text-indigo-600">
          <span  className="font-semibold transition duration-100 md:text-lg">Wrong Answers:</span>

          <span  className="text-indigo-500 text-xl">
          {result.wrongAnswers}
          </span>
      
      </div>
        </div>
        </div>

        {
          result.wrongAnswers>5/2?
          <Image src={sad} className='ml-20'/>
          :
          result.correctAnswers==5
          ?
          <Image src={img} className='ml-20'/>
          :
          <Image src={ok} className='ml-20'/>
          
         
        }
        {
          pa==4?
          <a href={`/Path`}> <button className='ml-3'>Go to Another Module</button>
          </a>
     
       :
       <>
       <div className='flex'>
       <a href={`/Learn/${pa}6`}> <button className='ml-3'>Continue</button>
       </a>
       <a href={`/Path`}> <button className='ml-3'>Read Module</button>
       </a>
       </div>
        </>
        }
        </>
      )}
    </div>
    </>
  )
}

export default Quiz