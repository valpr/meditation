import React from "react";
import './PopUp.scss'

function Modal(props){
    return(
        <div onClick={props.onClick}  className="blackBack">
        <div onClick={props.childClick} id="modal">
            <div>
            <label >Enter Minutes to Meditate</label>
            <div className="Time">
                <input onChange={(e)=>props.setMinutes(e)} value={Math.floor(props.seconds/60)} type ="text" id="minutes"></input>

            </div>
            <button id="Close" onClick={props.onClick}>Close</button>
            </div>

        </div>
        </div>
    );

}

export default Modal;