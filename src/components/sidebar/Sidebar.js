
import React from 'react'
import './_sidebar.scss'

import {
    MdSubscriptions,
    MdExitToApp,
    MdThumbUp,
    MdHistory,
    MdLibraryBooks,
    MdHome,
    MdSentimentDissatisfied,
} from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { log_out } from '../../redux/actions/auth.action'

const Sidebar = ({ sidebar, handleToggleSidebar }) => {
    const dispatch = useDispatch()
    const logOutHandler = () => {
        dispatch(log_out())
    }
    return (
        <nav
            className={sidebar ? 'sidebar open' : 'sidebar'}
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
                <span>Me gusta</span>
            </li>

            <li>
                <MdHistory size={23} />
                <span>Historia</span>
            </li>

            <li>
                <MdLibraryBooks size={23} />
                <span>Libreria</span>
            </li>
            <li>
                <MdSentimentDissatisfied size={23} />
                <span>No me gusta</span>
            </li>

            <hr />

            <li onClick={logOutHandler}>
                <MdExitToApp size={23} />
                <span>Cerrar Sesión</span>
            </li>

            <hr />
        </nav>
    )
}
export default Sidebar
