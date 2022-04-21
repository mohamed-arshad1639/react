import './App.css';
import Home from './Home'
import{useState} from 'react'

function App() {

  const[data,setData]=useState("hello world")
  const[trial,trialData]=useState("its trial 2")


  return (
    <div className="App">

      <Home item={data} trial={trial}/>
    </div>
  );
}

export default App;
