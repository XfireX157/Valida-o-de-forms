import { IColaborador } from "./IColaborador"

export interface ITime {
    primary: string
    nome: string
    corDeFundo: string
    aoDelet: (e: string) => void
    mudarCor: (e: string, nome: string) => void
    colaboradores: IColaborador[]
}