import './charisma.css'

function Charisma() {
  return (
    <div className='charisma-container'>
      <div className='charisma-header-bar'>
        O mnie
      </div>
      <div className='charisma-content'>
        <div className='charisma-pic-container'>
          <img src="/about.jpg" alt="charisma me" className='charisma-image' />
        </div>
        <div className='charisma-right-container'>
          <div className='charisma-text-container'>
            Zanim stałem się fotomodelem, spróbowałem swoich sił w wodzie. 10 lat pływania zawodowego, praca jako ratownik wodny oraz instruktor pływania pozwoliły mi ukształtować charakter. Przez te lata zaszczepiła się we mnie sumienność, wytrwałość i punktualność co pozwala mi profesjonalnie podchodzić do każdej sesji zdjęciowej, pokazu mody, gry w teledyskach, reklamach czy też serialach oraz filmach. Fotomodeling łączę ze służbą w Państwowej Straży Pożarnej.
            „Drodzy Państwo, nazywam się Szymon Chrobok i z przyjemnością wezmę udział w Waszej reklamie.”
            Zapraszam do współpracy.
          </div>
          <div className='charisma-video-container'>
            GALLERY
          </div>
        </div>
      </div>
    </div>
  );
}

export default Charisma;