import React, { useState } from 'react'

interface AppStateValue {
  username: string,
  shoppingCart: { items: { id: number, name: string }[] }
}

const defaultContextValue: AppStateValue = {
  username: 'HedyHan',
  shoppingCart: {
    items: []
  }
}

export const appContext = React.createContext(defaultContextValue);
export const setStateContext = React.createContext<React.Dispatch<React.SetStateAction<AppStateValue>> | undefined>(undefined)

export const AppStateProvider: React.FC = (props) => {
  const [state, setState] = useState(defaultContextValue);

  return <appContext.Provider value={state}>
    <setStateContext.Provider value={setState}>
      {props.children}
    </setStateContext.Provider>
  </appContext.Provider>
}