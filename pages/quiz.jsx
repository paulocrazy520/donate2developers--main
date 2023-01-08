import React, { useState } from 'react'

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [questions, setQuestions] = useState([
    {
      question: 'What is web3?',
      choices: [
        'A JavaScript library for interacting with the Ethereum blockchain',
        'A decentralized platform for building applications',
        'A cryptocurrency exchange',
        'A blockchain explorer'
      ],
      answer: 0
    },
    {
      question: 'What is the Saito network?',
      choices: [
        'A decentralized platform for building applications',
        'A cryptocurrency exchange',
        'A blockchain explorer',
        'A distributed file storage network'
      ],
      answer: 0
    },
    {
      question: 'How does web3 enable interaction with the Ethereum blockchain?',
      choices: [
        'By providing a JavaScript interface to the Ethereum Virtual Machine',
        'By providing a decentralized file storage system',
        'By providing a decentralized DNS system',
        'By providing a decentralized identity system'
      ],
      answer: 0
    },
    {
      question: 'What is a smart contract?',
      choices: [
        'A self-executing contract with the terms of the agreement between buyer and seller being directly written into lines of code',
        'A legally binding agreement between two parties',
        'A cryptocurrency wallet',
        'A decentralized application'
      ],
      answer: 0
    },
    {
      question: 'What is Ethereum?',
      choices: [
        'A decentralized platform that runs smart contracts',
        'A cryptocurrency exchange',
        'A blockchain explorer',
        'A distributed file storage network'
      ],
      answer: 0
    },
    {
      question: 'What is a decentralized application (DApp)?',
      choices: [
        'An application that is built on a decentralized platform and uses smart contracts',
        'A cryptocurrency wallet',
        'A blockchain explorer',
        '
        {
            question: 'What is the main advantage of using a decentralized platform like Ethereum to build applications?',
            choices: [
              'Decentralized platforms are more secure and resistant to censorship',
              'Decentralized platforms are faster and more efficient',
              'Decentralized platforms offer better scalability',
              'All of the above'
            ],
            answer: 3
          },
          {
            question: 'What is a blockchain explorer?',
            choices: [
              'A tool for viewing and interacting with the data on a blockchain',
              'A cryptocurrency exchange',
              'A decentralized application',
              'A smart contract'
            ],
            answer: 0
          },
          {
            question: 'What is a decentralized autonomous organization (DAO)?',
            choices: [
              'A decentralized organization that is run through code and smart contracts, rather than through traditional management structures',
              'A decentralized file storage network',
              'A blockchain explorer',
              'A cryptocurrency exchange'
            ],
            answer: 0
          }
        ])
      const [answers, setAnswers] = useState([])
    
      const handleAnswer = answer => {
        setAnswers([...answers, answer])
        setCurrentQuestion(currentQuestion + 1)
      }
    
      const renderQuestion = () => {
        const { question, choices, answer } = questions[currentQuestion]
    
        return (
          <>
            <p>{question}</p>
            {choices.map((choice, index) => (
              <button key={choice} onClick={() => handleAnswer(index === answer)}>
                {choice}
              </button>
            ))}
          </>
        )
      }
    
      const renderResult = () => {
        const correctAnswers = answers.filter(answer => answer).length
        const totalQuestions = questions.length
    
        return <p>You scored {correctAnswers} out of {totalQuestions}</p>
      }
    
      return (
        <div>
          {currentQuestion < questions.length ? renderQuestion() : renderResult()}
        </div>
      )
    }
    
    export default Quiz
    