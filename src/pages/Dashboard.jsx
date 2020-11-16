import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import headerImg from '../images/dashboard-header-image.png'
import logoImg from '../images/logo-dashboard.png'
import Card from '../components/Card'

import '../styles/pages/dashboard.css'

function Dashboard() {
  return (
    <div className="Dashboard">
      <Link to="/" className="sidebar">
        <FiArrowLeft color="#FFF" size={36} />
      </Link>
      <header>
        <img className="logo" src={logoImg} alt="Lyze"/>
        <h1>Veja a situação financeira da sua empresa</h1>
        <img className="img-bg" src={headerImg} alt="Veja a situação financeira da sua empresa"/>
      </header>
      <section className="cards">
        <Card title="CAC" subtitle="Custo de Aquisição do Cliente" money="100,00" />
        <Card title="LTV" subtitle="valor da Vida Útil do Cliente" money="478,00" />
        <Card title="LTV/CAC" subtitle="Relação entre CAC e LTV" graphic="4,8x" />
        <Card title="CHURIN" subtitle="Perda e Rotatividade de Clientes" value={3} graphic="3%" />
        <Card title="MARGEM" subtitle="Margem Operacional" value={66.7} graphic="66,7%" />
        <Card title="LUCRATIVIDADE" subtitle="Lucratividade Líquida" value={20} graphic="20%" />
      </section>
    </div>
  );
}

export default Dashboard;
