import React from 'react'

import './styles.css'

export default function Dashboard({ data }) {


    return (
        <li>
            <header style = {{
                backgroundImage: `url(${ data.thumbnail_url })`
            }} />
            <strong>{ data.company }</strong>
            <span>{ data.price ? `R$${data.price}/Dia` : 'Spot gratuito' }</span>
        </li>        
    )
} 