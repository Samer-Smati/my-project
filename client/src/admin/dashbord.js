import React from 'react'

function dashbord({history,match,setPath}) {
    
    setPath(match.path) 
    return (
        <div className="container dashbord"> 
                dashboard
        </div>
    )
}

export default dashbord
