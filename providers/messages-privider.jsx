'use client'
import React from 'react'
export const MessageContext = React.createContext()

export default function MessagesProvider({ children }) {

    return (
        <MessageContext.Provider value={{}}>
            {children}
        </MessageContext.Provider>
    )
}
