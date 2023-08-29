import './Home.css'
import {Link} from "react-router-dom";
import Sound from "../images/sound.mp3"

async function playSound(){
    const audioContext = new (window.AudioContext)();
    const soundUrl = Sound;
    fetch(soundUrl)
        .then(response => response.arrayBuffer())
        .then(buffer => {
            return audioContext.decodeAudioData(buffer);
        })
        .then(decodedBuffer => {
            const source = audioContext.createBufferSource();
            source.buffer = decodedBuffer;
            source.connect(audioContext.destination);
            source.start();
        })
        .catch(error => {
            console.error('Error loading or decoding the audio:', error);
        });
}

export default function Home() {
    return (
        <>
            <div className="home-background"></div>
            <div className="home-welcom">
                <div className="home-hello">hello.</div>
                <Link to="/login" style={{ textDecoration: 'none' , color: 'black' }}>
                    <div className="home-enter" onClick={() => {playSound().then( )}}> </div>
                </Link>
            </div>
        </>
    )
}