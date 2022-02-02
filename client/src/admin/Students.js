import React from 'react'

function Students({history,match,setPath}) {
    setPath(match.path) 
    return (
        <div className="container students"> 
            Students
        </div>
    )
}

export default Students
