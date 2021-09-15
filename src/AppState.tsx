import React, { useState } from 'react'

interface AppStateValue {
  username: string,
  shoppingCart: {item: {id: number, name: string}[]}
}

const defaultContextValue: AppStateValue = {
  username: 'HedyHan',
  shoppingCart: {
    item: []
  }
}

export const appContext = React.createContext(defaultContextValue);

export const AppStateProvider: React.FC = (props) => {
  const [state, setState] = useState(defaultContextValue);

  return <appContext.Provider value={state}>{props.children}</appContext.Provider>
}