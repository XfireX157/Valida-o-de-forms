import { InputProps } from '../../Types/InputProps'
import * as C from './Style'

export default function Campo ({Change, type = 'text', Style, placeholder, value, padding, icon, mandatory = false}: InputProps) {
    return(
        <C.Container>
            <C.Label>
                <C.Icon>
                    <span>{icon}</span>
                </C.Icon>
                <C.Input 
                    type={type} 
                    primary={padding}
                    className={Style}
                    value={value} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => Change(e.target.value)} 
                    placeholder={placeholder} 
                    required={mandatory} />
            </C.Label>
        </C.Container>
    )
}