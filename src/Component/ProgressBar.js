import React, {useState} from 'react'
import './progressbar.scss';

function TimeBar(props){
    return(
        <div id="bar">
            <Progress percentage={props.percentage}/>
        </div>
    )
}

const Progress = (props) =>{
    return (
    <div className="fill" style={{width: `${props.percentage}%`}}></div> 
    
    )}

export default TimeBar;
