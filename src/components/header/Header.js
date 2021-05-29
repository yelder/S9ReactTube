import React from 'react'
import './_header.scss'

import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'

const Header = ({ handleToggleSidebar }) => {
    return (
        <div className="border border-dark header">

            <FaBars className="header__menu" size={26}
                onClick={() => handleToggleSidebar()} />
            <div>
                <img src="http://pngimg.com/uploads/youtube/youtube_PNG102354.png" alt="" className="header__logo" />
                <p>Reactube</p>
            </div>

            <form >
                <input type="text" placeholder="Search" /><button type="submit">
                    <AiOutlineSearch size={22} />
                </button>
            </form>

            <div className="header__icons">
                <MdNotifications size={28} />
                <MdApps size={28} />
                <img src="https://www.pngkey.com/png/full/114-1149878_seeting-user-avatar-in-specific-size-without-breaking.png" alt="avatar" />
            </div>

        </div>
    )
}

export default Header
