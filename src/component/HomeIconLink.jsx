import React from "react";
import{ Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa";

const HomeIconLink = () => {
    return(
        <div className='link'>
            <Link to='/'>
                <FaHome size={30}/><a>Volver a la paguina principal</a>
            </Link>
        </div>
    )
}

export default HomeIconLink