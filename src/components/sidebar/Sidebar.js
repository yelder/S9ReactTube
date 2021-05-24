import React from 'react'
import './_sidebar.scss'

import {
    MdSubscriptions,
    MdExitToApp,
    MdThumbUp,
    MdHistory,
    MdLibraryBooks,
    MdHome,
    MdSentimentDissatisfied
} from "react-icons/md"

const Sidebar = ({ sidebar, handleToggleSidebar }) => {
    return (
        <nav className={sidebar ? "sidebar open" : "sidebar"}
            onClick={() => handleToggleSidebar(false)}>
            <li>
                <MdHome size={23} />
                <span>Inicio</span>
            </li>
            <li>
                <MdSubscriptions size={23} />
                <span>Suscripciones</span>
            </li>
            <li>
                <MdThumbUp size={23} />
                <span>Video Favorito</span>
            </li>
            <li>
                <MdHistory size={23} />
                <span>Historial</span>
            </li>

            <li>
                <MdLibraryBooks size={23} />
                <span>Libreria</span>
            </li>

            <li>
                <MdSentimentDissatisfied size={23} />
                <span>No lo sé</span>
            </li>

            <hr />
            <li>
                <MdExitToApp size={23} />
                <span>Salir</span>
            </li>

            <hr />
        </nav>
    )
}

export default Sidebar
