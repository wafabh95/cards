import './App.css';
import {connect} from 'react-redux'
import {increment,decrement} from './actions/CounterAction'
function App(props) {
console.log(props)
  return (
 <div >
<h1>redux</h1>
<h1>{props.count}</h1>
<button onClick={()=>props.plus()}>+</button>
<button onClick={()=>props.minus()}>-</button>
</div>
  );  
}
const mapStateToProps=(state)=>{
  return{
    count:state.CounterReducer
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    plus:()=>dispatch(increment()),
    minus:()=>dispatch(decrement())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
