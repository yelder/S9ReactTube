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
import { Link } from 'react-router-dom'

const Sidebar = ({ sidebar, handleToggleSidebar }) => {
    const dispatch = useDispatch()
    const logOutHandler = () => {
        dispatch(log_out())
    }
    return (
        <nav
            className={sidebar ? 'sidebar open' : 'sidebar'}
            onClick={() => handleToggleSidebar(false)}>
            <Link to='/'>
                <li>
                    <MdHome size={23} />
                    <span>Inicio</span>
                </li>
            </Link>
            <Link to='/feed/subscriptions'>
                <li>
                    <MdSubscriptions size={23} />
                    <span>Suscripciones</span>
                </li>
            </Link>

            <li>
                <MdThumbUp size={23} />
                <span>Videos que me gustan</span>
            </li>

            <li>
                <MdHistory size={23} />
                <span>Historial</span>
            </li>

            <li>
                <MdLibraryBooks size={23} />
                <span>Biblioteca</span>
            </li>
            <li>
                <MdSentimentDissatisfied size={23} />
                <span>Historial de denuncias</span>
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