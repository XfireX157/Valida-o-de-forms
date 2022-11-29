import { useState } from "react";
import  Banner  from "../../Components/Banner/Index";
import { Footer } from "../../Components/Footer";
import { Formulario } from "../../Components/Formulario";
import { Time } from "../../Components/Times";
import {Cards} from '../../Mock/Cards'
import { IColaborador, INewColaborador } from "../../Types/IColaborador";

function App() {

  const [times, setTime] = useState<INewColaborador[]>(Cards)
  const [colaboradores, setColaboradores] = useState<IColaborador[]>([])

  const aoNovoColaborador = (colaborador: IColaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  function deletColaborador(id: string) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.nome !== id))
  }

  function mudarCorDoTime(cor: string, nome: string){
      setTime(times.map(time => {
        if(time.nome === nome){
          time.cor = cor
        }
        return time
      }))
  }

  function cadastrarTime(novoTime: INewColaborador) {
    setTime([...times, {...novoTime}])
  }

  return (
      <>
        <Banner src="/Image/Wallpaper.png" alt="Walpaper" />
        <Formulario 
        cadastrarTimes={cadastrarTime}
        times={times.map(item => item.nome)}
        ColaborationSingUp={colaborador => aoNovoColaborador(colaborador)}/>

        {times.map((time) => <Time
            mudarCor={mudarCorDoTime}
            key={time.id} 
            nome={time.nome}
            primary={time.cor}
            corDeFundo={time.cor}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
            aoDelet={deletColaborador}
          />
        )}
        <Footer/>
      </>
      
  );
}

export default App

