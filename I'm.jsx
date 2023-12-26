import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

function App() {
 const videoRef = useRef();
 const [imgSrc, setImgSrc] = useState(null);

 const capture = () => {
    const imageSrc = videoRef.current.getScreenshot();
    setImgSrc(imageSrc);
 };

 return (
    <div className="App">
      <Webcam ref={videoRef} />
      <button onClick={capture}>Capture photo</button>
      {imgSrc && <img src={imgSrc} alt="Captured" />}
    </div>
 );
}

export default App;