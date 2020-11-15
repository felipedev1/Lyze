import './styles/global.css'
import headerImg from './images/dashboard-header-image.png'
import Card from './components/Card'

function App() {
  return (
    <div className="Dashboard">
      <button className="sidebar">^</button>
      <header>
        <h1>Veja a situação financeira da sua empresa</h1>
        <img src={headerImg} alt="Veja a situação financeira da sua empresa"/>
      </header>
      <section className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </div>
  );
}

export default App;
