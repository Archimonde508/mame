import './actress.css'


function Actress() {
  return (
    <div className="video-container">
        <iframe className="actress-iframe"
            src="https://www.youtube.com/embed/PHYqr8vvfe0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    </div>
);
}

export default Actress;