'use client'
import React, {createContext, useContext, useState} from 'react';

interface ContextProps {
  dark : boolean,
  toggleTheme: (toggle: any)=> void,
}

export const contextTheme = createContext<ContextProps>({
    dark: false,
    toggleTheme: () => {},
});


export default function ContextProvider({children}:{children: React.ReactNode}) {

    const [dark, setDark] = useState<boolean>(false)
    const toggleTheme = (toogle: any)=> setDark(!toogle)
    

  return (
    <contextTheme.Provider value={{dark, toggleTheme}}>
        {children}
    </contextTheme.Provider>
  )
}