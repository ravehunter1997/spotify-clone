import React from 'react';
import "./SidebarOption.css";

function SidebarOption({title, Icon}) {
    return (
        <div className='sidebarOption'>
        {Icon && <Icon className="sidebarOption_icon"/>}   
        {Icon ? <h6>{title}</h6> : <p>{title}</p>}
        </div>
    )
}

export default SidebarOption
