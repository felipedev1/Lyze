import '../styles/components/card.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';

export default function Card(props) {
  return (
    <Link to={props.title} className="Card">
      <div className="info">
        <h2 className="card-title">
          <span>{props.subtitle}</span>
          <strong>{props.title}</strong>
        </h2>
        {props.money && <div className="money">
          <span>R$</span>
          <strong>{props.money}</strong>
        </div>}
        <div title="Médio" className="situation" style={{background: "#FCEE21"}}  ></div>
        {props.graphic && <div className="graphic">
          <CircularProgressbar value={props.value || 100} text={props.graphic} 
            strokeWidth={12}
            styles={buildStyles({
              pathColor: ` #23294F`,
              trailColor: '#F9F9F9',
              textColor: '#000',
              strokeLinecap: 'butt',
              textSize: `24px`
            }
          )} />
        </div>}
      </div>
      <div className="rating">
        <span>Pontuação: 4/5</span>
      </div>
    </Link>
  )
}
