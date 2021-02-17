import React, { useState } from 'react'


function App() {
  var [state, setState] = useState('TIME');
  var updateTime = () => {
    var time = new Date().toLocaleTimeString()
    setState(time);
  }
  setInterval(updateTime, 1000);
  return (
    <div className="App">
      <h1 className="clockTime">{state}</h1>
    </div>
  );
}

export default App;
