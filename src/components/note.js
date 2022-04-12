import React from "react";
import './../css/note.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEdit,faTrash} from '@fortawesome/free-solid-svg-icons'
import {  useNavigate } from "react-router-dom";


export default function Note(props) {
    let history = useNavigate();
let idx  = props.noteTabId
var goToEdit= (idx)=>{

history(`/add-note`)
}
const deleteNote = (idx)=>{
    console.log('deletion of data')
    }


    return (
        <div>
            
            <div className="note-main-container">
                <div className="date"> {props.content.createdOn}</div>
                <div className="note-main-element" >

                    <div className="text-content">{props.content.textNote}</div>

                    <div className="edition">
                        
                        <button className="edit-button" onClick={goToEdit} >
                            <FontAwesomeIcon icon={faEdit} size="lg" color="#3d90eb"/>
                            editer
                        </button>
                        
                        
                        <button className="edit-button" onClick={deleteNote}>
                            <FontAwesomeIcon icon={faTrash} size="lg"   color="#de3763"/>
                            supprimer
                            
                        </button>
                    </div>
                    


                </div>
            </div>

        </div>



    )

}
