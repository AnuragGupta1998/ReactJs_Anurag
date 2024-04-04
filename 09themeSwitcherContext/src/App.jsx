
import { useState, useEffect } from 'react'
import './App.css'
import { ThemeContextProvider } from './contexts/theme'
import ThemeButton from './components/ThemeButton';
import Card from './components/Card'


function App() {

  const [themeMode, setThemeMode] = useState('light');

  //defing function here that can change function inside ThemeContext too..........
  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }

  //actual changing the Theme......
  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')

    document.querySelector('html').classList.add(themeMode)

  },[themeMode])

  return (
    <ThemeContextProvider value={{ themeMode, lightTheme, darkTheme }}>

      <div className="flex flex-wrap min-h-screen items-center"> 

        <div className="w-full">

          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>

        </div>

      </div>

    </ThemeContextProvider>
  )
}

export default App
