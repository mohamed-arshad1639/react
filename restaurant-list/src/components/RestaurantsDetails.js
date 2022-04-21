import React, { useState, useEffect } from 'react'
import { Row, Col, Image, Card, ListGroup } from 'react-bootstrap'
import { useParams,Link } from 'react-router-dom'
import Rating from './Rating'

function RestaurantsDetails() {
    const [details, setDetails] = useState([])
    const { id } = useParams()
    useEffect(() => {
        const fetchData = async () => {
            await fetch('/restaurants.json')
                .then((res) => res.json())
                .then((data) => setDetails(data.restaurants))
        }
        fetchData()
    }, [])

    const restaurantData = details.find(item => item.id == id)
    console.log("our individual data ", restaurantData);
    return (
        <>
        <Link className="btn-outline-dark my-2 rounded btn-sm" to='/'>Back</Link>
            {restaurantData ?
                (
                    <Row>

                        <Col>
                            <ListGroup  className=" mx-3 p-3 " md={12}>
                                <h2>{restaurantData.name}</h2>
                                <p>{restaurantData.neighborhood}</p>
                                <h4>Cuisine : {restaurantData.cuisine_type}</h4>
                            </ListGroup>
                            
                               
                        
                        </Col>
                        <Row>

                            <Col >
                                <Image src={restaurantData.photograph} alt={restaurantData.name} fluid />
                            </Col>

                        </Row>

                        <Col>
                            <ListGroup.Item>
                                <p>Monday {restaurantData.operating_hours.monday}</p>
                                <p>Tuesday {restaurantData.operating_hours.Tuesday}</p>
                                <p>Wednesday {restaurantData.operating_hours.Wednesday}</p>
                                <p>Thursday {restaurantData.operating_hours.Thursday}</p>
                                <p>Friday {restaurantData.operating_hours.Friday}</p>
                                <p>Saturday {restaurantData.operating_hours.Saturday}</p>
                                <p>Sunday {restaurantData.operating_hours.Sunday}</p>

                            </ListGroup.Item>



                        </Col>
                        <Row>
                            <Card className="my-3 mx-3 p-3 rounded card">
                                <Rating data={restaurantData.reviews} />

                            </Card>


                        </Row>


                    </Row>

                ) : null}

        </>

    )

}
export default RestaurantsDetails