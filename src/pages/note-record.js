import React from "react";
import { useNavigate } from "react-router-dom";
import './../css/note-record.css';
export default function NoteRecord() {

    const [input, setInput] = React.useState({ textNote: "" })
    const [validForm, setValidForm] = React.useState(false)
    let history = useNavigate();
    const handleChange = (e) => {
        setInput(value => ({ ...input, [e.target.name]: e.target.value }))
        console.log('xcccccccvvvv', input)
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        
            setValidForm(true)
            console.log('valeur du formulaire', input)
            history("/");
        


    }



    return (
        <form onSubmit={handleSubmit}>
            <div className="note-record-main-container">
                <div className="form-container">

                    <h1 className="header-form">Enregister une note</h1>

                    <div>
                        <textarea onChange={handleChange} required className="text-area-content" name="textNote" placeholder="Saisir votre texte ici">

                        </textarea>
                    </div>





                    <div>
                        <input className="submit" type="submit" value="Valider" />
                    </div>

                    <div></div>


                </div>
            </div>
        </form>

    )

}
