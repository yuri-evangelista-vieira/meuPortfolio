import React from "react"
import '../styles/cabecalho.css'

import ImgLinkedin from '../assets/imagens/iconeLinkedin.avif'
import ImgGithub from '../assets/imagens/IconeGitHub.png'
import ImgCurriculo from '../assets/imagens/Curriculo.png'

function Cabecalho() {
    return (
        <>
            <div className="divBox">
                <h1>Olá, eu sou o Yuri</h1>


                <a href="https://www.linkedin.com/in/yuri-evangelista/" target="_blank">
                    <img id="imgLinkedin" src={ImgLinkedin} alt="Meu Perfil no Linkedin" />
                </a>
                <a href="https://github.com/yuri-evangelista-vieira" target="_blank">
                    <img src={ImgGithub} alt="Meu Perfil no GitHub" />
                </a>
                <a href="C:\Users\Yuri Evangelista\Documents/curriculoYuri.pdf" download>
                    <img src={ImgCurriculo} alt="Baixe o meu currículo"/>
                </a>


                <h1>Front-end Developer</h1>
            </div>
        </>
    )
}

export default Cabecalho