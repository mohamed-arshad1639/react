import React from 'react'
import { Card } from 'react-bootstrap'
import { Link, link } from 'react-router-dom'
function Restaurantscard({ data }) {
    return (
        <Link to = {`restaurants/${data.id}`}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={data.photograph} />
                <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>
                        {data.neighborhood}
                    </Card.Text>

                </Card.Body>
            </Card>
        </Link>



    )
}

export default Restaurantscard