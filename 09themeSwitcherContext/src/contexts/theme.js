import { useContext,createContext } from "react";

//creating context of theme with default variable and functions..........
export const ThemeContext=createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{},
})

//theme context provider................
export const ThemeContextProvider=ThemeContext.Provider

//custom hook that provide access to ThemeContext........
export default function useTheme(){
    return useContext(ThemeContext )

}