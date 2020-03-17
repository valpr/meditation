import React from 'react'
import './progressbar.scss';

function TimeBar(props){
    return(
        <div id="bar">
            <Progress percentage={(props.total-props.timeLeft)/props.total*100}/>
        </div>
    )
}

const Progress = (props) =>{
    return (
        
    <span className="fill" style={{width: `${props.percentage}%`}}></span> 
    
    )}

export default TimeBar;
