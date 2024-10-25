import { createContext , useState , } from 'react'

//Crear context
const ComentariosContexto = createContext ()
//crear provider: para que el contexto 
//se reconozca en todo componente 
export const ComentariosProvider = ({ children }) => {
    const [comments , setComments] = useState([
        {
            id: 1,
            comentario: "Este es el comentario de contexto 1",
            calificacion: 3
        }
    ])
    const borrarItem=id=>{
        if(window.confirm("Esta seguro de borrar el comentario")){
            //asignar nuevo estado a comments :
            //filter: para quitar los comentario
            //
            setComments(comments.filter((c)=>c.id !== id))
        }
    }
    return (
    <ComentariosContexto.Provider 
    value={{comments,setComments, borrarItem}}>
            {children} 
        </ComentariosContexto.Provider>)
}

export default ComentariosContexto