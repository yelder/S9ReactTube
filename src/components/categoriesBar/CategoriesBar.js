import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
    getPopularVideos,
    getVideosByCategory,
} from '../../redux/actions/videos.action'
import './_categoriesBar.scss'

const keywords = [
    'Todos',
    'React js',
    'Angular js',
    'React Native',
    'API',
    'Redux',
    'Musica ',
    'Codigo',
    'Beisbol',
    'Futbol',
    'Real Madrid',
    'Cine',
    'Comedias',
    'Noticias',
    'Deporte',
    'Entretenimiento',
    'Desafio',
    'Criptomonedas',
]

const CategoriesBar = () => {
    const [activeElement, setActiveElement] = useState('All')

    const dispatch = useDispatch()
    const handleClick = value => {
        setActiveElement(value)
        if (value === 'All') {
            dispatch(getPopularVideos())
        } else {
            dispatch(getVideosByCategory(value))
        }
    }

    return (
        <div className='categoriesBar'>
            {keywords.map((value, i) => (
                <span
                    onClick={() => handleClick(value)}
                    key={i}
                    className={activeElement === value ? 'active' : ''}>
                    {value}
                </span>
            ))}
        </div>
    )
}

export default CategoriesBar