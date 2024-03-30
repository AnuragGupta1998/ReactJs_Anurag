import React,{useState,useEffect} from 'react'
import { useLoaderData } from 'react-router-dom';


function Github() {

//fetch data from github API................
//  const[data,setData]=useState([]);
//  useEffect(() => {
//      fetch('https://api.github.com/users/AnuragGupta1998')
//      .then((response)=>response.json())
//      .then((data)=>setData(data))

//     }, [])


//fetching github data for loader (main.jsx)......
const dat=useLoaderData()

  return (
    < >
     <div className='bg-green-300 w-full  border rounded-xl flex justify-start'>

       <div className=''>
            <img src={dat.avatar_url} width={300}  alt=""  className='m-0 rounded-xl'/>
            
       </div>
       <div className='ml-10 '>
            <p>login {dat.login}</p>
       </div>
       <div className=''>
            <p>bio {dat.bio}</p>
       </div>
     </div>

     
    </>
  )
}
export default Github

export const githubInfoAPI= async () => {

    const response=await fetch('https://api.github.com/users/AnuragGupta1998');
    return response.json();
}

