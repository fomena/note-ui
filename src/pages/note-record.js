import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/nav-bar";
import './../css/note-record.css';


export default function NoteRecord() {

    const [input, setInput] = React.useState({ textNote: "" })
    const [validForm, setValidForm] = React.useState(false)
    let history = useNavigate();
    const handleChange = (e) => {
        setInput(value => ({ ...input, [e.target.name]: e.target.value }))
        // console.log('xcccccccvvvv', input)
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        let note = {
            userId: "625476fc5ea4d2b5fe8b32c0",
            textNote: input.textNote
        }

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note),
        };

        fetch("http://localhost:5000/notes/", options)
            .then((response) => response.json())
            .then((data) => console.log('This is your data', data));
        

        history("/home");



    }



    return (
        <div>
            <NavBar/>
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
        </div>
       

    )

}
