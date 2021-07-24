import React from 'react'
import Card from 'react-bootstrap/Card'


function CardMain({cardDetail}) {
    const { title,detail,category } = cardDetail
    return (
        <>
           <Card style={{ width: '18rem' }}>
                <h3>{category}</h3>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {detail}
                    </Card.Text>
                    <button className="btn btn-secondary">Go somewhere</button>
                </Card.Body>
            </Card> 
        </>
    )
}

export default CardMain
