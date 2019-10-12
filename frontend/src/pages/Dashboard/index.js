import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import './styles.css'
import List from '../../components/List'

export default function Dashboard() {

    const [spots, setSpots] = useState([])

    useEffect(() => {
        loadSpots()
    },[])

    async function loadSpots() {
        const user_id = localStorage.getItem('user')
        const response = await api.get('/dash',{
            headers: { user_id }
        })
        
        const { data } = response
        setSpots(data)
    }

    return (
        <>
            <ul className = "spot-list" >
                {spots.map(spot => <List key = {spot._id} data = {spot} />)}
            </ul>
            <Link to = "/new">
                <button className = "btn">Cadastrar Spot</button>
            </Link>
       </>
    )
}