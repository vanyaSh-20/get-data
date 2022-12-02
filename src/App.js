import './App.css';
import React, {useState} from 'react'

function App() {
  const[data,setData] = useState(null)

  const getData= (e) => {
    setData(e.target.value)
  }

  return (
    <div className="App">
      <h1>Using onChange function printing value</h1>
      <input type="text" onChange={getData}/>
      <p>{data}</p>
    </div>
  );
}

export default App;
