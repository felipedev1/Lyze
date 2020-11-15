import '../styles/components/card.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Card() {
  return (
    <div className="Card">
      <div className="info">
        <h2 className="card-title">
          <span>custo de acquisição do cliente</span>
          <strong>CAC</strong>
        </h2>
        <div className="money">
          <span>R$</span>
          <strong>100,00</strong>
        </div>
        <div title="Médio" className="situation" style={{background: "#FCEE21"}}  ></div>
        <div className="graphic">
          <CircularProgressbar value={80} text={`${80}%`} 
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
      </div>
      <div className="rating">
        <span>Pontuação: 4/5</span>
      </div>
    </div>
  )
}
