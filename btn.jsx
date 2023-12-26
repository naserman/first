import React, { useRef } from 'react';

function App() {
 const videoRef = useRef();

 return (
    <div className="App">
      <video ref={videoRef} width="300" height="300" autoPlay playsInline muted />
      <button>Start search</button>
    </div>
 );
}

export default App;