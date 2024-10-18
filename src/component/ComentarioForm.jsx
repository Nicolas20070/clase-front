import {React, useState} from 'react'
import Card from './Card'
import ComentarioCalificacion from './ComentarioCalificacion'

const ComentarioForm = ( {handleAdd} ) => {

    const[ text, setText ] = useState('')
    const [calificacion , setCalificacion ] = useState (0)

    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      //crear el objeto comentario
      const newComentario = {
        comentario: text,
        calificacion:calificacion 
      }  
      handleAdd(newComentario)
    }

  return (
    <div>
      <Card>
        <form onSubmit={ handleSubmit }>
            <ComentarioCalificacion select={(calificacion) => {setCalificacion (calificacion)} }/>
            <div className='input-group'>
                <input type='text' value={ text } onChange={ handleTextChange } className='form-control' placeholder='Comentario'/>
                <button type="submit" className='btn btn-primary'>
                    Comentar
                </button>
            </div>
        </form>
        
      </Card>
    </div>
  )
}

export default ComentarioForm
