import React, { useEffect, useState } from "react";
import Note from "../components/note";
import './../css/home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import NavBar from "../components/nav-bar";
import { myNotes } from "../services/shareddata";


export default function Home() {
        const [data, setData] = useState([])

        useEffect(() => {
                fetch("http://localhost:5000/notes/")
                        .then((response) => response.json())
                        .then((data) => {setData(data.response)});

        });
myNotes.value = data



        return (

                <di>
                        <NavBar />
                        <div className="home-main-container">
                                <div className="home-note-title"> <h1 >Liste des notes</h1></div>
                                <div className="home-note-items">
                                        {

                                                data.map((element, idx) => (<Note key={element._id} noteTabId={idx} content={element} />)
                                                )

                                        }





                                </div>
                                <div>
                                        <Link to="/add-note" className="float">
                                                <span title="Ajouter une note">
                                                        <FontAwesomeIcon icon={faAdd} size="lg" color="white" className="my-float" />

                                                </span>


                                        </Link>
                                </div>
                        </div>


                </di>


        )

}
