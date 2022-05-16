import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import './../css/register.css';
export default function Register() {

    const [input, setInput] = React.useState({username:"", email: "", password: "" })
    const [validForm, setValidForm] = React.useState(false)
    let history = useNavigate();

    const handleChange = (e) => {
        setInput(value => ({ ...input, [e.target.name]: e.target.value }))
    }
    const validEmail = (email) => {
        let re = new RegExp('/^[ ]*([^@]+)@((?:[-a-z0-9]+.)+[a-z]{2,})[ ]*$/i');
        if (re.test(email)) {
            return true
        }
        else {
            return false
        }
    }


    
    const handleSubmit = (e) => {
        e.preventDefault();

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(input),
        };

        fetch("http://localhost:5000/users/", options)
            .then((response) => response.json())
            .then((data) => console.log('données inserés', data));
        


        history("/")
        console.log('il love solve problems')


    }



    return (
        <form onSubmit={handleSubmit}>
            <div className="register-main-container">
                <div className="form-container">

                    <h1 className="header-form">Enregistrement</h1>

                    <div>
                        <input className="textfeild" onChange={handleChange} type="text" name="username" placeholder="Entrer votre nom" required />
                        
                    </div>

                    <div>
                        <input className="textfeild" onChange={handleChange} type="email" name="email" placeholder="Entrer votre email" required />
                        
                    </div>
                    <div>
                        <input className="textfeild" onChange={handleChange} type="password" name="password" placeholder="Enter votre mot de passe" required />
                        
                    </div>
                    

                    <div>
                        <input className="submit" type="submit" value="Valider" />
                    </div>

                    <div>
                        <Link to="/login">
                        <span className="account"> Je possede déja un compte</span>

                        </Link>
                    </div>


                </div>
            </div>
        </form>

    )

}
