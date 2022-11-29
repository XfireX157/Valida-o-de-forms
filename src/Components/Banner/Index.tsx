import { IBanner } from '../../Types/IBanner'
import * as C from './styled'

export default function Banner ({src, alt}: IBanner) {
    return(
        <C.Container>
            <img src={src} alt={alt} />
            <C.Txt>Pessoas e time</C.Txt>
            <C.TxtInfo>Organizando em um só lugar</C.TxtInfo>
        </C.Container>
    )
}