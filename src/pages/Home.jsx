import QuestionForm from "../components/QuestionForm"
import { useState } from 'react'
import { Button } from "@material-ui/core"
import { Link } from "react-router-dom"

import logoImg from '../images/logo-desktop.png'
import '../styles/pages/home.css'

const questions = [
  "Como podemos te ajudar hoje?",
  "Quanto você gasta mensalmente para divulgar seu negócio? (ex.: Canais de vendas, marketing, facebook ads, Google ads, Instagram, etc)",
  "Quantos clientes novos você recebe em 1 mês?",
  "Quanto o seu cliente compra em média, num período de 1 mês?",
  "Geralmente quantos meses o seu cliente compra em 1 ano? (ex.: 1x, 2x, 3x... 12x)",
  "Quantos clientes ativos você tem atualmente?",
  "Quantos clientes você perdeu nesse período?",
  "Qual o seu faturamento bruto mensal?",
  "Seus gastos e despesas totais mensais foi de quanto?",
  "Qual seu lucro líquido do mês?"
]

function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [question, setQuestion] = useState(questions[currentQuestion])
  const [progress, setProgress] = useState(0)

  function next(value) {

    setTimeout(() => {
      setCurrentQuestion(prev => prev + 1)
      setQuestion(questions[currentQuestion + 1])
      setProgress(Math.floor((((currentQuestion + 1) / questions.length) * 100)))
    }, 1000)
    
  }
  return (
    <div className="home-page">
      <img  className="logo" src={logoImg} alt="Lyze"/>
      {progress < 100 ? (
        <QuestionForm next={next} question={question} current={currentQuestion} />
      ) : (
        <div className="complete">
          <p>Concluído</p>
          <Link to="/dashboard">
            <Button variant="contained" color="secondary">Ir para o dashboard</Button>
          </Link>
        </div>
      )}
    </div>
  );
}


export default Home