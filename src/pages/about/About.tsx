import './about.css'

function About() {
  return (
    <div className='about-container'>
      <div className='header-bar'>
        O mnie
      </div>
      <div className='about-content'>
        <div className='about-pic-container'>
          <img src="/about.jpg" alt="About me" className='about-image'/>
        </div>
        <div className='about-text-container'>
        Zanim stałem się fotomodelem, spróbowałem swoich sił w wodzie. 10 lat pływania zawodowego, praca jako ratownik wodny oraz instruktor pływania pozwoliły mi ukształtować charakter. Przez te lata zaszczepiła się we mnie sumienność, wytrwałość i punktualność co pozwala mi profesjonalnie podchodzić do każdej sesji zdjęciowej, pokazu mody, gry w teledyskach, reklamach czy też serialach oraz filmach. Fotomodeling łączę ze służbą w Państwowej Straży Pożarnej.
        „Drodzy Państwo, nazywam się Szymon Chrobok i z przyjemnością wezmę udział w Waszej reklamie.”
        Zapraszam do współpracy.
        </div>
      </div>
    </div>
  );
}

export default About;