import {
    RESTAURANTS_LIST_FAIL,
    RESTAURANTS_LIST_REQUEST,
    RESTAURANTS_LIST_SUCCESS

} from '../constants/restaurantsConstants'

export const restaurantListReducer =(states ={restaurants:[]},actions)=>{
    switch(actions.type)
    {
        case RESTAURANTS_LIST_SUCCESS:
            return{restaurants:action.payload}
        case  RESTAURANTS_LIST_FAIL:
            return{restaurants:action.payload} 
        default:return states       
    }
}