import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)

  const [password, setPassword] = useState("")



  //useCallback Hook tha frize the  re-render  cpopy the password area only..
  const passwordGenerator = useCallback(() => {

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"  //string that we use to genrate password

    //if we tick at number then password will change and include number in it(str)
    if (numberAllowed) str += "0123456789";

    //if we tick at character then password will change and include special character in it(str) and for loop run again
    if (charAllowed) str += "~!@#$%^&*()_-=+[]}{`"

    //for genrating password
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1) //it gives index of character
      pass += str.charAt(char);
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  //useEffect hook that synchronized component with external system.......
  useEffect(() => { passwordGenerator() }, [length, numberAllowed, charAllowed, passwordGenerator])

  //useRef hook to take the reference of anything.....................................
  let passwordRef = useRef(null)

  //useCallback hook that........
  const copyPasswordToClipboard = useCallback(() => {

    //to copy the password.....
    passwordRef.current?.select(password)  //select the
    passwordRef.current?.setSelectionRange(0, 20) //copy password of length 20
    window.navigator.clipboard.writeText(password) //copying from password area
  }, [password]);

  return (
    <>
      <h1 className='text-4xl font-bold text-center text-white'> Password Generator </h1>

      <hr />
      <div className='bg-gray-500 w-full max-w-md text-orange-400 mx-auto px-4 py-3 my-8 rounded-lg'>

        <h2 className=' text-white text-center'>generator</h2>

        <div className='flex overflow-hidden shadow rounded-lg mb-4 '>

          <input
            type="text"
            value={password}
            placeholder='Password'
            className='outline-none w-full px-3 py-1'
            readOnly
            ref={passwordRef}
          />
          <button
            className='outline-none bg-blue-500 text-white px-4 py-2 shrink-0 hover:bg-blue-950 '
            onClick={copyPasswordToClipboard}> Copy
          </button>

        </div>

        <div className='flex text-sm gap-x-5'>

          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={8}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
            />
            <label> Length {length} </label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              id='number'
              defaultChecked={numberAllowed}
              className='cursor-pointer'
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor='number'> Number </label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              id='character'
              defaultChecked={charAllowed}
              className='cursor-pointer'
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor='character'> Character </label>
          </div>

        </div>

      </div>



    </>
  )
}

export default App
