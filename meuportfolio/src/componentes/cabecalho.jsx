import React from "react"
import style from '../styles/cabecalho.module.css'

import ImgLinkedin from '../assets/imagens/iconeLinkedin.png'
import ImgGithub from '../assets/imagens/IconeGitHub.png'
import ImgCurriculo from '../assets/imagens/Curriculo.png'

function Cabecalho() {
    return (
        <div className={style.body}>
            <div className={style.divBox}>
                <div className={style["main-section"]}>

                    <div className={style.jobTitulo}>

                        <div className={style.apresentacao}>
                            <h2 className={style.subtitle}>Olá, eu sou o Yuri</h2>
                        </div>

                        <h1 className={style.title}>Front-end</h1>
                        <h1 className={style.title}>Developer</h1>
                    </div>

                    <div className={style.linkIcones}>
                        <a href="https://www.linkedin.com/in/yuri-evangelista/" target="_blank" className={style.link}>
                            <img src={ImgLinkedin} alt="Meu Perfil no Linkedin" className={style.icon} />
                        </a>
                        <a href="https://github.com/yuri-evangelista-vieira" target="_blank" className={style.link}>
                            <img src={ImgGithub} alt="Meu Perfil no GitHub" className={style.icon} />
                        </a>
                        <a href="C:\Users\Yuri Evangelista\Documents/curriculoYuri.pdf" download className={style.link}>
                            <img src={ImgCurriculo} alt="Baixe o meu currículo" className={style.icon} />
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cabecalho
