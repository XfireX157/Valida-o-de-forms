import { IColaborador, INewColaborador } from "./IColaborador";

export interface IForms { 
    ColaborationSingUp: (colaborador: IColaborador) => void
    cadastrarTimes: (colaborador: INewColaborador) => void
    times: string[]
}