import { Colaborador } from "../Colaborador"
import * as C from './style'
import hexToRgba from 'hex-to-rgba'
import { ITime } from "../../Types/ITime"

export const Time = ({ nome, primary, colaboradores, corDeFundo, aoDelet, mudarCor }: ITime) => {
    return (
        <>
            {colaboradores.length > 0 && (
                <C.Container style={{ backgroundColor: hexToRgba(corDeFundo, '0.6') }}>
                    <C.InputColor
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => mudarCor(e.target.value, nome)}
                        value={primary}
                        type="color"
                    />

                    <C.TxtInfo
                        primary={`4px solid ${primary}`}>
                        {nome}
                    </C.TxtInfo>

                    <C.Box>
                        {colaboradores.map(colaborador =>
                            <Colaborador
                                key={colaborador.nome}
                                nome={colaborador.nome}
                                image={colaborador.image}
                                cargo={colaborador.cargo}
                                corDeFundo={corDeFundo}
                                aoDelet={() => aoDelet(colaborador.nome)}
                            />)}
                    </C.Box>
                </C.Container>
            )}
        </>
    )
}