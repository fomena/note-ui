import React, { useEffect, useState } from "react";
import { userinfo } from "../services/shareddata";
import './../css/nav-bar.css'



export default function NavBar(props) {
   
    return (

        <div className="nav-main-container">
            <div>
                <h2 className="log-name">Note reccord</h2>
            </div>
            <div className="user-profile">
                <div>
                    <h5>{userinfo.email}</h5>
                </div>

            </div>
        </div>

    )

}
