import React,{ useState,useMemo } from 'react'
import icon from '../../assets/camera.svg'
import './styles.css'
import api from '../../services/api'
export default function New({history}) {
    
    const [company, setCompany] = useState('')
    const [techs, setTechs] = useState('')
    const [price, setPrice] = useState('')
    const [thumbnail, setThumbnail] = useState(null)

    const preview = useMemo(
        () => {
            return thumbnail ? URL.createObjectURL(thumbnail) : null 
        },
        [thumbnail]
    )

    async function handleSubmit(e) {
        
        e.preventDefault()

        const user_id = localStorage.getItem('user')
        const data = new FormData()
        
        data.append('thumbnail', thumbnail)
        data.append('company', company)
        data.append('techs', techs)
        data.append('price', price)

        await api.post('/spots',data, {
            headers: { user_id }
        })

        history.push('/dash')

    }


    return (
        <form onSubmit = {handleSubmit}>
            
            <label 
                id = "thumbnail" 
                style = {{backgroundImage: `url(${preview})`}} 
                className = {thumbnail ? 'has-thumb ' : ''}
            >
                <input type="file" onChange = {e => setThumbnail(e.target.files[0])} />
                <img src = {icon} alt="thumbnail"/>
            </label>

            <label htmlFor="company">Empresa *</label>
            <input 
                id = "company"
                placeholder = "Sua empresa incrível"
                value = {company}
                onChange = {(e)=> {setCompany(e.target.value)}}
            />
            <label htmlFor="techs">Tecnologias * <span>(separadas por vírugulas)</span></label>
            <input 
                id = "techs"
                placeholder = "Quais tecnologias usam"
                value = {techs}
                onChange = {(e)=> {setTechs(e.target.value)}}
            />
            <label htmlFor="price">Valor da diária <span>(em branco para gratuito)</span></label>
            <input 
                id = "price"
                placeholder = "Valor cobrado por dia de uso"
                value = {price}
                onChange = {(e)=> {setPrice(e.target.value)}}
            />
            <button type = "submit" className = "btn">Cadastrar Spot</button>
        </form>
    )
}