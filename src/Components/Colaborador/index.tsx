import * as C from './style'
import {MdDangerous} from 'react-icons/md'
import {AiFillHeart,AiOutlineHeart} from 'react-icons/ai'
import { useState } from "react";

interface IColaborCard {
    nome: string
    corDeFundo: string
    image: string
    cargo: string
    data: string
    aoDelet: () => void
}

export const Colaborador = ({nome, image, cargo, corDeFundo, data,aoDelet}: IColaborCard) => {

    const [favorite, setFavorite] = useState(false)

    return(
        <C.Colaborador>
            <MdDangerous onClick={aoDelet} />
            <C.Cabecalho corDeFundo={corDeFundo}>
                <img src={image} alt={nome} />
            </C.Cabecalho>
            <C.Rodape>
                <h4>{nome}</h4>  
                <h5>{cargo}</h5>
                <h5>{new Date(data).toLocaleDateString()}</h5>
                <C.Favorite onClick={() => setFavorite(!favorite)}>
                    {favorite ? <AiFillHeart/> : <AiOutlineHeart/>}
                </C.Favorite>
            </C.Rodape>
        </C.Colaborador>
    )
}