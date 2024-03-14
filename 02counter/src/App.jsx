import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 //react-hooks  useState()  it return array first is variable and second is function...................
 let [counter,setCounter]=useState(15);

  function add(){
    counter=counter+1;
    setCounter(counter)
  }
  function remove(){
    setCounter(counter-1)
  }

  //assignment to control the counter value between (0-20)......................
  //add value but not go above 20
  function addA(){
    if(counter === 20){
      alert('reached at highest value')
      return;
    }
    else{
      setCounter(counter+1);
    }
  }
 
  //remove value but go below 0
  function removeA(){
    if(counter === 0){
      alert('reached at lowest value')
      return;
    }
    else{
      setCounter(counter-1)
    }
  }


  return (
    <>
      <h1>Chai Aur Code Vite</h1>
      <h1>Counter Value:{counter}</h1>

      <button onClick={addA}> Add Value {counter} </button>  
      <br />
      <button onClick={removeA}> Remove Value{counter} </button>  
     
    </>
  )
}

export default App
