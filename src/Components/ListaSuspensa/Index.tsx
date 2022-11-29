
import { IListSuspensa } from '../../Types/IListSuspensa'
import * as C from './style'

export const ListaSuspensa = ({icon, Style, value, campo, Change}: IListSuspensa) => {
    return(
        <C.Container>
            <C.Label>
                <C.Icon>{icon}</C.Icon>
                <select 
                    title='Times'
                    className={Style}
                    value={value} 
                    onChange={(e) => Change(e.target.value)}>
                        <option></option>
                        {campo?.map((item) => {
                            return <option key={item}>{item}</option>
                        })}
                </select>
            </C.Label>
        </C.Container>
    )
} 