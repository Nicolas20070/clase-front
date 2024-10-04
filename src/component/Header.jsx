import React from 'react'

const Header = (props) => {
const headerStyles ={
    backgroundColor: 'rgba(0,0,0,0.4)',
    color: '#e74c3c'
}
const autorStyles ={
    backgroundColor: 'rgba(0,0,0,0.4)',
    color: '#45b39d'
}
const fichaStyles ={
    backgroundColor: 'rgba(0,0,0,0.4)',
    color: '#f4f6f7'
}
const centroStyles ={
    backgroundColor: 'rgba(0,0,0,0.4)',
    color: '#d35400'
}
  return (  
    <header style={headerStyles}>
        <div className = 'container'>
            {props.titulo}
            <p style={autorStyles}>Autor: {props.autor}</p>
            <p style={centroStyles}>Centro de formacion: {props.centro}</p>
            <p style={fichaStyles}>Ficha: {props.ficha}</p>
        </div>
    </header>
  )
}

export default Header
