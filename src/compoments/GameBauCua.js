import React from 'react'
import XucSac from "./XucSac"
import BauCua from "./BauCua"
export default function GameBauCua() {
    return(
<div style = {{
    width: "100%",
    height: 700,
    backgroundColor: 'orange'
}}>
    <h1 style = {{
        textAlign: 'center',
    }}>GAME BẦU CUA</h1>
        <XucSac/>
        <BauCua/>
    </div>
    )
    
}