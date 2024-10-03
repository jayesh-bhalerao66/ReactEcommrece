import React, { createContext, useState } from 'react'
export let user = createContext()
export default function Context({ children }) {
  let [ct, setct] = useState([])
  return (
    <div>
      <user.Provider value={{ ct, setct }}>
        {children}
      </user.Provider>
    </div>
  )
}
