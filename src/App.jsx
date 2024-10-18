import {React, useState} from 'react'
import Header from './component/Header';
import ComentarioItem from './component/ComentarioItem';
import Comentarios from './data/Comentarios';
import ComentarioLista from './component/ComentarioLista';
import Card from './component/Card';
import ComentarioStats from './component/ComentarioStats';
import ComentarioForm from './component/ComentarioForm';
function App() {

    const [comments , 
        setComments] = useState(Comentarios)

    const borrarItem=id=>{
        if(window.confirm("Esta seguro de borrar el comentario")){
            //asignar nuevo estado a comments :
            //filter: para quitar los comentario
            //
            setComments(comments.filter((c)=>c.id !== id))
        }
    }

const titulo ="App de Comentarios";
const Autor =" por Nicolas Oviedo"
const centro = "sena CGMLTI"
const ficha = "2902093"


    const loading = false;
    const showComments = true;
    if(loading === true) return (<h1>Cargando comentarios..</h1>)
    
        const addComentario = ( newComentario ) =>{
            setComments(prevComments => [ ...prevComments, newComentario ]);

        }

  return (
    <div className='container'>
        <Header  
            titulo={titulo} 
            autor={Autor}  
            centro={centro} 
            ficha={ficha}/>
        <ComentarioForm handleAdd= { addComentario } /> {/* Usa el nuevo componente */}
        <ComentarioStats comentarios={comments}/>
        <ComentarioLista 
            comments={comments} 
            handleDelete={borrarItem}/>
           
    </div>
    
  )
}

export default App