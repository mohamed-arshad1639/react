import React ,{useState,useEffect} from "react"
import {Row,Col} from 'react-bootstrap'
import Restaurantcard from './Restaurantscard'
import {useDispatch,useSelector}from 'react-redux'
import {listRestaurants} from '../actions/restaurantsActions'


function Home() {
  const dispatch =useDispatch()
  const restaurantReducer=useSelector(state =>state.restaurantReducer)
  const {restaurants} =restaurantReducer
  useEffect(()=>{
    dispatch(listRestaurants())

  },[])

 
  return (

    <Row>
   
      
      {restaurants.map(item=>(
        <Col sm={12} md={6} lg={4} xl={3}>
         <Restaurantcard data={item}/>
        </Col>
      ))}

    </Row>
  )
   
}

export default Home