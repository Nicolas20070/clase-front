import {React, useState} from 'react'

const ComentarioItem = ({ comentario, calificacion }) => {
    //manejo del estado de un comentario:
    //comentario y calificacion como atributos
    //mediante el uso de e Estados
const [ comment, setComment ] = useState(comentario)
const [ rating , setRating ] = useState(calificacion)
//funcion para actualizar el comentario
const cambiarRating = () => {
    setRating((prev)=> prev + 1 )   
}
  return (
    <div className="card">
      <div className='num-display'>{ rating }</div>
      <div className='text-display'>{ comment }</div>
      <button onClick={cambiarRating}>
        cambiar calificacion
      </button>
    </div>
  )
}

export default ComentarioItem
