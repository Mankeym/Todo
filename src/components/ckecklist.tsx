import React from 'react';
import './checklist.css';
function Checklist(props) {
    return (
       <div className="checklist__container">
           <p className="checklist__text">
               {
                   props.info.title
               }
           </p>
            <input className="checklist__checkbox" type="checkbox" value="Y" id={props.info.id} />
       </div>
    );
}

export default Checklist;
