import React from 'react'

function header({listItem , filters }) {
    return (
        <header className="header">
            {
                listItem.map((item,index)=>{
                    return(
                        <button className="menu btn btn-primary" key={index} onClick={()=>filters(item)}>{item}</button>
                    )
                })
            }
            
        </header>
    )
}

export default header
