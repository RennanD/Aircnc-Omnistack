import React from 'react'


export default function Login() {
    return(
        <div>
            <p>
                Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para seu time!
            </p>
            <form onSubmit = {handleSubmit}>
            <label htmlFor="email">E-mail *</label>
            <input 
                type="emial" 
                id = "email" 
                placeholder = "Seu melhor e-mail"
                value = { email }
                onChange = { event => setEmail(event.target.value) } 
            />
            <button type = "submit" className = "btn" >Entrar</button>
            </form>
        </div>
    )
}