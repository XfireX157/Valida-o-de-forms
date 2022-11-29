import * as C from './style'
import Button from "../Button/Index"
import Campo from "../Campo/Index"
import { ListaSuspensa } from "../ListaSuspensa/Index"
import { AiOutlineFileImage, AiOutlineUser } from 'react-icons/ai'
import { RiSuitcaseLine } from 'react-icons/ri'
import { HiOutlineOfficeBuilding } from 'react-icons/hi'
import { useState } from "react"
import { IForms } from "../../Types/Forms"

export const Formulario = ({ ColaborationSingUp, times, cadastrarTimes }: IForms) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [image, setImage] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')
    const [error, setError] = useState(false)

    const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (nome.length < 0 || cargo.length < 0 || image.length < 0 || time.length < 0) {
            setError(true)
        } else {
            setError(false)

            setCargo('')
            setNome('')
            setImage('')
            setTime('')

            ColaborationSingUp({
                nome,
                cargo,
                image,
                time
            })
        }
    }

    const cadastrarTime = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        cadastrarTimes({ nome: nomeTime, cor: corTime })

        setNomeTime('')
        setCorTime('')
    }

    return (
        <C.Container>
            <C.Forms onSubmit={handleClick} >
                <legend>Preencha os dados para criar um card do colaborador</legend>
                <Campo
                    padding
                    type="text" 
                    mandatory={true}
                    icon={<AiOutlineUser />}
                    placeholder="Digite seu nome"
                    value={nome}
                    Change={(e) => setNome(e)}
                    Style={error ? `error` : ""}
                />
                {error ? (
                    <C.invalid>Campo invalido</C.invalid>
                ) : (
                    <></>
                )}
                <Campo
                    padding
                    type="text"
                    mandatory={true}
                    icon={<RiSuitcaseLine />}
                    placeholder="Digite seu cargo"
                    value={cargo}
                    Change={(e) => setCargo(e)}
                    Style={error ? `error` : ""}
                />
                {error ? (
                    <C.invalid>Campo invalido</C.invalid>
                ) : (
                    <></>
                )}
                <Campo
                    padding
                    type="text"
                    icon={<AiOutlineFileImage />}
                    placeholder="Digite o endereço da imagem"
                    value={image}
                    Change={(e) => setImage(e)}
                    Style={error ? `error` : ""}
                />
                {error ? (
                    <C.invalid>Campo invalido</C.invalid>
                ) : (
                    <></>
                )}
                <ListaSuspensa

                    value={time}
                    Change={(e) => setTime(e)}
                    campo={times}
                    Style={error ? `error` : ""}
                    icon={<HiOutlineOfficeBuilding />}
                />
                {error ? (
                    <C.invalid>Campo invalido</C.invalid>
                ) : (
                    <></>
                )}
                <Button>Criar card</Button>
            </C.Forms>

            <C.Forms onSubmit={cadastrarTime}>
                <legend>Preencha os dados para criar um novo time.</legend>
                <Campo
                    padding
                    type="text"
                    icon={<AiOutlineUser />}
                    placeholder="Digite seu nome do novo time"
                    value={nomeTime}
                    Change={(e) => setNomeTime(e)}
                    Style={error ? `error` : ""}

                />
                {error ? (
                    <C.invalid>Campo invalido</C.invalid>
                ) : (
                    <></>
                )}
                <Campo
                    padding
                    type="color"
                    icon={<RiSuitcaseLine />}
                    placeholder="Digite a cor"
                    value={corTime}
                    Change={(e) => setCorTime(e)}
                    Style={error ? `error` : ""}
                />
                {error ? (
                    <C.invalid>Campo invalido</C.invalid>
                ) : (
                    <></>
                )}
                <Button>Criar um novo time</Button>
            </C.Forms>
        </C.Container>
    )
}