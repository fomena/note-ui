import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import './../css/login.css';
export default function Login() {

    const [input, setInput] = React.useState({ email: "", password: "" })
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
        
        console.log('valeur du formulaire', validForm)
     history("/");
        
    }



    return (
        <form onSubmit={handleSubmit} action="/home">
            <div className="login-main-container">
                <div className="form-container">

                    <h1 className="header-form">LOGIN</h1>

                    <div>
                        <input className="textfeild" onChange={handleChange} type="email" name="email" placeholder="Entrer votre email" required />
                        <div>
                            {
                            input.email?
                            (<span className="error-message"> Votre email est invalide</span>):(<span></span>)

                            }
                        </div>
                    </div>
                    <div>
                        <input className="textfeild" onChange={handleChange} type="password" name="password" placeholder="Enter votre mot de passe" required />
                        
                    </div>


                    <div>
                        <input className="submit" type="submit" value="Valider" />
                    </div>

                    <div>
                        <Link to="/register">
                        <span className="account"> Je ne possède pas un compte</span>

                        </Link>
                    </div>


                </div>
            </div>
        </form>

    )

}
