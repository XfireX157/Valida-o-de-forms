import { IButton } from '../../Types/IButton'
import * as C from './style'

export default function Button ({children}: IButton) {
    return (
        <C.Container>
            <C.Btn>{children}</C.Btn>
        </C.Container>
    )
}