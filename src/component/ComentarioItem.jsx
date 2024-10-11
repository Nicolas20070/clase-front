import {React, useState} from 'react'
import { FaTimes } from 'react-icons/fa'
import Card from './Card'


const ComentarioItem = ({ comentario, calificacion, id, handleDelete}) => {
    //manejo del estado de un comentario:
    //comentario y calificacion como atributos
    //mediante el uso de e Estados
const [ comment, setComment ] = useState(comentario)
const [ rating , setRating ] = useState(calificacion)
const [ identificacion , setIdentificacion ] = useState(id)

  return (
    <div className="card">  
     
      <div className='num-display'>{ rating }</div>
      <button onClick={() => handleDelete(identificacion)}className='close'>      
        <FaTimes color='black'/>
      </button>
      <div className='text-display'>{ comment }</div>
      
    </div>
  )
}

export default ComentarioItem
