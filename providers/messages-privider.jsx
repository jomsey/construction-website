'use client'
import React from 'react'
export const MessageContext = React.createContext()

export default function MesagesProvider({ children }) {

    return (
        <MessageContext.Provider value={{}}>
            {children}
        </MessageContext.Provider>
    )
}
