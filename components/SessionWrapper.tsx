'use client'
import React, { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'

interface providerprops {
    children: ReactNode
}

const SessionWrapper:React.FC<providerprops> = ({children}) => {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}

export default SessionWrapper