import { buildStyles, CircularProgressbar } from "react-circular-progressbar"
import { FiArrowLeft } from "react-icons/fi"
import { Link } from "react-router-dom"
import logoImg from '../images/logo-dashboard.png'
import headerImg from '../images/logo-header-details.png'

import '../styles/pages/details.css'


function Details() {
  return (
    <div className="Details">
      <Link to="/dashboard" className="sidebar">
        <FiArrowLeft color="#FFF" size={36} />
      </Link>
      <header>
        <img className="logo" src={logoImg} alt="Lyze"/>
        <h1 className="card-title">
          <strong>CAC/LTV</strong>
          <span>relação entre CAC/LTV</span>
        </h1>
        <img className="img-bg" src={headerImg} alt="header background"/>
      </header>
      <div className="content">
        <section className="about">
          <div className="info">
            <p>
              A relação entre CAC e LTV é uma métrica importantíssima! 
            </p>
            <p>
              Este é um verdadeiro indicador da sustentabilidade e longevidade de uma empresa, até mesmo mirarmos a alavancagem e escalabilidade do seu negócio.
            </p>
            <p>
              Se uma empresa pode prever, identificar modelos vencedores e repetidamente transformar “x” em “Nx”, on N pode ser 3, 5, 10 ou 20x (apenas uma referência), então o seu negócios é sustentável e factível de ser escalável. 
            </p>
            <p>
              Os empreendedores mais bem sucedidos tendem a ser aqueles que têm um foco obsessivo em seus KPIs (indicadores de performance), focam em experimentá-los constantemente e otimizá-los.
            </p>
          </div>
          
        </section>
        <section className="result">
          <h2>O seu resultado foi de:</h2>
          <div className="graphic">
            <CircularProgressbar value={100} text={'4,8x'} 
              strokeWidth={12}
              styles={buildStyles({
                pathColor: ` #23294F`,
                trailColor: '#F9F9F9',
                textColor: '#000',
                strokeLinecap: 'butt',
                textSize: `24px`
              }
            )} />
          </div>
        </section>
        <section className="lyze-rating">
          <h2>Avaliação da lyze</h2>
          <p>
            Excelente!!! Uma relação CAC/LTV maior que 5x é considerado pelo mercado uma ótima relação. Continue mantendo o trabalho e fique 
            de olho para não deixar essa relação cair, pois quanto maior, melhor.
          </p>
        </section>
      </div>
    </div>
  )
}

export default Details