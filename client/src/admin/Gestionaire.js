import React from 'react'

function Gestionaire({history,match,setPath}) {
    setPath(match.path) 
    return (
        <div className="container gestionaire">
            Gestionaire
        </div>
    )
}

export default Gestionaire
