import React from 'react'
import Cabecalho from './componentes/cabecalho'
import Projeto from './componentes/projeto'

import style from './styles/app.module.css'
import '../src/styles/padrao.css' // importe dos estilos padrão

function App() {
    return (
        <>
            <Cabecalho />

            <div className={style.background}>
                <div className={style.divisao}></div>
                <h1 className={style.titulo}>Projetos</h1>
            </div>
            
            

            <div>
                {/* <Projeto nome=" Matemática para Hoteleiros"/> */}
            </div>
        </>
    )
}

export default App