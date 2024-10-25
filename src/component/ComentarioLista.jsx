import {React , useContext} from 'react'
import ComentariosContexto from '../contexto/ComentariosContexto';
import ComentarioItem from './ComentarioItem';
import { AnimatePresence, motion } from 'framer-motion';
import { use } from 'framer-motion/client';

function ComentarioLista() {


    const { comments } = useContext(ComentariosContexto)

    if (comments.length === 0 || !comments) {
        return <p>No hay comentarios</p>;
    } else {
        return (
            <div className='comments'>
                <AnimatePresence>
                    <ul>
                        {
                            comments.map(comentario => 
                                <motion.li 
                                    key={comentario.id}
                                    initial={{ opacity: 0, scale: 0 }} 
                                    animate={{ opacity: 1, scale: 1 }} 
                                    exit={{ opacity: 0, scale: 0 }} 
                                    transition={{ duration: 0.5 }} 
                                >
                                    <ComentarioItem 
                                        key={comentario.id}
                                        comentario={comentario}
                                    />
                                </motion.li>
                            )
                        }
                    </ul>
                </AnimatePresence>
            </div>
        );
    }
}

export default ComentarioLista;
