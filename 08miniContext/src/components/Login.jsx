import React,{ useState,useContext } from "react" //useContex use to fetch value from context
import UserContext from "../context/UserContext"

function Login() {

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    //using globle variable in component by cintext
    const {setUser}=useContext(UserContext)

    const handleSubmit=(e)=>{

        e.preventDefault()

       setUser({username,password})
    }


  return (
    <div>
        <h2>Login</h2>
        <input 
          type="text" 
          placeholder='username'
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
        />
        {" "}
        <input 
         type="text" 
         placeholder='password' 
         value={password }
         onChange={(e)=>setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Login