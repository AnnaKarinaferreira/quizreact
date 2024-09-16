import quiz from '../imagens/quiz.svg';
import './Welcome.css';


import React from 'react'

const Welcome = () => {
  return (
    <div className='welcome'>
        <h2>Seja bem vindo</h2>
        <p>Clique no botão abaixo para iniciar</p>
        <button>Iniciar </button>
        <img src={Quiz} alt="Inicio do quiz" />
    </div>
  )
}

export default Welcome