'use client'
import React, {createContext, useState} from 'react';


interface ContextPropsTheme {
  dark : boolean,
  toggleTheme: (toggle: any)=> void,
}
interface ContextPropsShowForm {
  showForm : boolean,
  toggleShowForm: (toggle: any)=> void,
}
export const contextTheme = createContext<ContextPropsTheme>({
    dark: false,
    toggleTheme: () => {},
});

export const contextForm = createContext<ContextPropsShowForm>({
  showForm: false,
  toggleShowForm: () => {}
})


export default function ContextProvider({children}:{children: React.ReactNode}) {

    const [dark, setDark] = useState<boolean>(false)
    const toggleTheme = (toogle: any)=> setDark(!toogle)

    const [showForm, setShowForm] = useState<boolean>(false)

    const toggleShowForm = (toggle: any)=> setShowForm(!toggle)
    

  return (
    <contextTheme.Provider value={{dark, toggleTheme}}>
      <contextForm.Provider value={{showForm, toggleShowForm}}>

        {children}
      </contextForm.Provider>
    </contextTheme.Provider>
  )
}