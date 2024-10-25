import {React, useState} from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Header from './component/Header';
import Comentarios from './data/Comentarios';
import ComentarioLista from './component/ComentarioLista';
import ComentarioStats from './component/ComentarioStats';
import ComentarioForm from './component/ComentarioForm';
import About from './pages/about';
import AboutIconLink from './component/AboutIconLink';
import { ComentariosProvider } from './contexto/ComentariosContexto';
function App() {

    const [comments , 
        setComments] = useState(Comentarios)

    

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
        <ComentariosProvider>
            <Router>
                <div className='container'>
                <Header  
                    titulo={titulo} 
                    autor={Autor}  
                    centro={centro} 
                    ficha={ficha}/>
                <Routes>
                    <Route exact path='/' element={
                        <>
                            <ComentarioForm handleAdd= { addComentario } /> 
                            <ComentarioLista/>
                            <AboutIconLink/>
                        </>
                    }>
                    </Route>
                    <Route path='/about' element={<About 
                    titulo={titulo}
                    autor= {Autor}
                    ficha={ficha}/>}></Route>
                </Routes>
                </div>
    </Router>

        </ComentariosProvider>
        


    
    
    
  )
}

export default App