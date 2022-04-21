import axios from 'axios'
import{RESTAURANTS_LIST_REQUEST,RESTAURANTS_LIST_SUCCESS,RESTAURANTS_LIST_FINAL} from '../constants/restaurantsConstants'
import axios from 'axios'
export const listRestaurants =()=>async (dispatch)=>{
    try{
        const {data}=await axios.get('/restaurants.json')
        dispatch({
            type :RESTAURANTS_LIST_SUCCESS,payload:data.restaurarants
        
        })
    }catch(error){
        dispatch(
            {
                type:RESTAURANTS_LIST_FINAL,payload:error
            }
        )
    }
}











// thunk is act asa middleware basically usedto execute an async function inside a asycronous environment