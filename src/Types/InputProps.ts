import { ReactNode } from "react"

export interface InputProps {
    type: string
    Change: (event: string ) => void
    Style: string
    placeholder: string
    value: string
    padding?: boolean
    icon: ReactNode
    mandatory?: boolean
}