
import './App.css'
import {conf} from './conf/conf'

function App() {
  //accessing .enc file variable.................
  
  // console.log(import.meta.env.VITE_APPWRITE_URL)
  console.log(conf.appwriteDatabaseId)
  console.log(conf.appwriteUrl)



  return (
    <>
      <h1> Blog Application with Appwrite as backend servide </h1>
    </>
  )
}

export default App
