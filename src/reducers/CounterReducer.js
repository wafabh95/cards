import { INCREMENT,DECREMENT } from "../actions/Types"

const count=0
const CounterReducer=(state=count,action)=>{
    switch (action.type) {
        case INCREMENT: return state+1
        case DECREMENT: return state-1
        default: return state
           
    }
   
}
export default CounterReducer