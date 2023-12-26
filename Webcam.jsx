import React, { useRef, useEffect } from 'react';
import Webcam from 'react-webcam';

function App() {
 const videoRef = useRef();

 useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        videoRef.current.srcObject = stream;
      });
 }, []);

 return (
    <div className="App">
      <Webcam ref={videoRef} />
      <button>Start search</button>
    </div>
 );
}

export default App;