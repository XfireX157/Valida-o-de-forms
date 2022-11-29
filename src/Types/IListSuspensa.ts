import { ReactNode } from "react"

export interface IListSuspensa {
    icon: ReactNode
    Style: string
    value: string
    Change: (e: string) => void,
    campo: string[]
}