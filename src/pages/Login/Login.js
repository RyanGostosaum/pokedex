
import React, { useState } from "react";

export default function Login({ history }) {
    const [email, setEmail] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        localStorage.setItem('user', "haha, você está logado");

        history.push('/dashboard');
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }
    return (
        <>
            <p>
                Seja o <strong> melhor treinador </strong>
            </p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                />
                <button className="btn" type="submit" >Entrar</button>
            </form>
        </>

    );
}
