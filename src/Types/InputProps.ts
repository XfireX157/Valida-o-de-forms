import { ReactNode } from "react"

export interface InputProps { 
    type: 'text' | 'password' | 'date' | 'email' | 'number' | 'color'
    Change: (event: string ) => void
    Style: string
    placeholder: string
    value: string
    padding?: boolean
    icon: ReactNode
    mandatory?: boolean
}