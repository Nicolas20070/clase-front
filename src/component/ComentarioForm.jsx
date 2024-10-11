import {React, useState} from 'react'
import Card from './Card'
import ComentarioCalificacion from './ComentarioCalificacion'

const ComentarioForm = () => {

    const[ text, setText ] = useState('')

    const handleTextChange = (e) => {
        setText(e.target.value)
    }
  return (
    <div>
      <Card>
        <form>
            <ComentarioCalificacion/>
            <div className='input-group'>
                <input type='text' value={ text } onChange={ handleTextChange } className='form-control' placeholder='Comentario'/>
                <button className='btn btn-primary'>
                    Comentar
                </button>
            </div>
        </form>
        
      </Card>
    </div>
  )
}

export default ComentarioForm
