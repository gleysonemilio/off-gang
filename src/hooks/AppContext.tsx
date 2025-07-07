'use client'

import React, { Dispatch, SetStateAction, createContext, useContext, useState } from 'react'

type AppContextProps = {
  pages: any
  setPages: Dispatch<any>
}

const AppContext = createContext<AppContextProps>({} as AppContextProps)

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [pages, setPages] = useState<Array<any>>([])

  return (
    <AppContext.Provider
      value={{
        pages,
        setPages,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  const context = useContext(AppContext)
  return context
}

export { AppContext, AppProvider, useAppContext }
