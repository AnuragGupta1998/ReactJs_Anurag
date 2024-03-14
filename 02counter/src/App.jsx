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
 

  return (
    <>
      <h1>Chai Aur Code Vite</h1>
      <h1>Counter Value:{counter}</h1>

      <button onClick={add}> Add Value {counter} </button>  
      <br />
      <button onClick={remove}> Remove Value{counter} </button>  
     
    </>
  )
}

export default App
