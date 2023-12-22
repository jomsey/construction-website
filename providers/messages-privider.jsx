'use client'
import React from 'react'
export const MessageContext = React.createContext()

export default function MesagesProvider({ children }) {
    const [messageDetailVisible, setMessageDetailsVisible] = React.useState(false)
    const [messagesStacked, setMessagesStacked] = React.useState(false)

    return (
        <MessageContext.Provider value={{ messageDetailVisible, setMessageDetailsVisible, messagesStacked, setMessagesStacked }}>
            {children}
        </MessageContext.Provider>
    )
}
