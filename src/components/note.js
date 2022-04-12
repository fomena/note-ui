import React from "react";
import './../css/note.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEdit,faTrash} from '@fortawesome/free-solid-svg-icons'

export default function Note() {

    return (
        <div>
            
            <div className="note-main-container">
                <div > 10/12/2020</div>
                <div className="note-main-element" >

                    <div className="text-content">jjjjjjjjjjjjjjjjjkff</div>

                    <div className="edition">
                        <div className="edit-button">
                            <FontAwesomeIcon icon={faEdit} size="lg"  color="#3d90eb"/>
                            editer
                        </div>
                        <div className="edit-button">
                            <FontAwesomeIcon icon={faTrash} size="lg"  color="#de3763"/>
                            supprimer
                            
                        </div>
                    </div>
                    


                </div>
            </div>

        </div>



    )

}
