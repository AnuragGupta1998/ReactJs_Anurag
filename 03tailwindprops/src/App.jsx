import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import ArrayCard from './components/ArrayCard'

function App(props) {
  const [count, setCount] = useState(0)

  const obj={
    name:"React Series Object",
    age:25,
    email:'anurag@gmail.com',
    profile:"React JS"
  }
  const obj2={
    name:"Javacript Series Object",
    age:30,
    email:'anurag@gmail.com',
    profile:"Javascript"
  }

  let arr=[1,2,3,3000];
  // <Card arr={arr} />
  

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-2xl boder-2 mb-5'> Tailwind Config in React Project by vite {props.name} </h1>

   <Card username="Js" age={10} /> 
   <Card name="React JS" a={20} /> 
   <Card n="Node Js" ag={30}    /> 
   <Card o={obj}    /> 
   <Card o={obj2}    /> 
   <Card o={obj2}    /> 
   <Card o={obj}    /> 
    
  <ArrayCard a={arr} />
   
   
   

 
    </>
  )
}

export default App
