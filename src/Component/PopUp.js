import React from "react";
import './PopUp.scss'

function Modal(props){
    return(
        <div onClick={props.onClick}  className="blackBack">
        <div onClick={props.childClick} id="modal">
            <div>
            <label >Enter Minutes to Meditate</label>
            <div className="Time">
                <input onChange={(e)=>props.setMinutes(e)} value={props.minutes} type ="text" id="minutes"></input>

            </div>
            <button onClick={props.onClick}>Close</button>
            </div>

        </div>
        </div>
    );

}

export default Modal;