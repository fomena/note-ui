import React from "react";
import Note from "../components/note";
import './../css/home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAdd} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
export default function Home() {

        return (
                <div className="home-main-container">
                        <div className="home-note-title"> <h2 >Liste des notes</h2></div>
                        <div className="home-note-items">
                                <Note />
                                <Note />

                        </div>
                        <div>
                                <Link to="/add-note" className="float">
                                        <span>
                                        <FontAwesomeIcon icon={faAdd} size="lg"  color="white" className="my-float"/>

                                        </span>

                                        
                                </Link>
                        </div>
                </div>


        )

}
