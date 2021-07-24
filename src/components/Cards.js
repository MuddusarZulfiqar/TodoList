import React from 'react'
import Card from "./Card"
function Cards({list}) {
    return (
        <div className="container-fluid mt-5">
            <div className="row">
                {
                    list.map((element,index) => {
                        return(
                            <div className="col-md-4 my-3" key={index}>
                                <Card cardDetail={element}  />
                            </div>
                        )
                    })
                }
                
            </div>  
        </div>
    )
}

export default Cards
