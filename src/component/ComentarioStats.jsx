import React from 'react';

const ComentarioStats = ({ comentarios }) => {
  const totalComentarios = comentarios.length;

  const calificacionPromedio = 
    totalComentarios > 0
      ? (comentarios.reduce((acc, comentario) => acc + comentario.calificacion, 0) / totalComentarios).toFixed(1)
      : 0;

  return (
    <div className='feedback-stats'>
      <h4>Comentarios: {totalComentarios}</h4>
      <h4>Calificación promedio: {calificacionPromedio}</h4>
    </div>
  );
}

export default ComentarioStats;