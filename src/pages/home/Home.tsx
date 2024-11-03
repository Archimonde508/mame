import Overlay from '../../components/overlay/Overlay';
import './home.css'

function Home() {
  return (
    <div className="home">
      <Overlay />
      <div className="info-container">
        <div className="name-container">
          <div className="firstname-container">
            <div>Małgorzata </div>
          </div>
          <div className="surname-container">Horyń-Olszewska </div>
        </div>
        <div className="career-container">Aktorka / Modelka dojrzała</div>
      </div>
    </div>
  );
}

export default Home;