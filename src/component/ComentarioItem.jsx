import {React, useState, useContext} from 'react'
import { FaTimes } from 'react-icons/fa'
import Card from './Card'
import ComentariosContexto from '../contexto/ComentariosContexto'
const ComentarioItem = ({ comentario}) => {
  //desestructurar: tomar un objero
  //y separar sus atributos
    //manejo del estado de un comentario:
    //comentario y calificacion como atributos
    //mediante el uso de e Estados
const [ comment, setComment ] = useState(comentario.comentario)
const [ rating , setRating ] = useState(comentario.calificacion)
const [ identificacion , setIdentificacion ] = useState(comentario.id)

  return (
    <div className="card">  
     
      <div className='num-display'>{ comentario.calificacion }</div>
      <button onClick={() => (identificacion)}className='close'>      
        <FaTimes color='black'/>
      </button>
      <div className='text-display'>{ comentario.comentario }</div>
      
    </div>
  )
}

export default ComentarioItem
