import { useState } from "react"


function App() {

  const [color,setColor]=useState("#bfafb2")
  return (
    <>
      <div className="w-full h-screen transition ease-in-out duration-200 delay-100" style={{backgroundColor:color}}>

        <div className="fixed flex flex-wrap justify-center bottom-8 inset-x-0 px-3 "> 

          

          <div className="flex flex-wrap justify-center gap-2 shadow-xl  bg-green-400 px-3 py-2 rounded-full border border-black"
           style={{backgroundColor:color}} >

           <button className="outline-none px-4 rounded-2xl text-2xl  font-bold " style={{backgroundColor:'red'}} 
              onClick={()=>setColor('Red')} > Red
           </button>
           

           <button className="outline-none px-4 rounded-2xl text-2xl  font-bold" style={{backgroundColor:'green'}}
             onClick={()=>setColor('Green')} > Green 
           </button>

           <button className="outline-none px-4 rounded-2xl text-2xl font-bold" style={{backgroundColor:'blue'}}
             onClick={()=>setColor('Blue')} > Blue
           </button>

           <button className="outline-none px-4 rounded-2xl text-2xl  font-bold" style={{backgroundColor:'yellow'}}
             onClick={()=>setColor('Yellow')} > Yellow
           </button>

           <button className="outline-none px-4 rounded-2xl text-2xl  font-bold" style={{backgroundColor:'cyan'}} 
             onClick={()=>setColor('Cyan')} > Cyan
           </button>
           <button className="outline-none px-4 rounded-2xl text-2xl  font-bold" style={{backgroundColor:'#54ff9f'}} 
             onClick={()=>setColor('#54ff9f')} > SeaGreen
           </button>
           <button className="outline-none px-4 rounded-2xl text-2xl  font-bold" style={{backgroundColor:'#66ff00'}} 
             onClick={()=>setColor('#66ff00')} > Bright Green
           </button>

          </div>
          <button className=" font-bold text-2xl border border-black rounded-full px-2 mx-3 mt-2" style={{backgroundColor:color}} 
            onClick={()=>setColor('#bfafb2')}>Reset 
         </button>

        </div>
      </div>
    </>
  )
}

export default App
