// import React from 'react';
// import ReactDOM from 'react-dom';
//
// import App from './App';
//
// ReactDOM.render(<App />, document.getElementById('root'));

// import {createStore} from "redux"
//
// const reducer=(state,action)=>{
//   switch (action.type) {
//       case "ADD":
//           state+=action.payload;
//         break;
//       case "SUBTRACT":
//           state-=action.payload;
//         break;
//     default:
//   }
//   return state;
// }
//
// const store = createStore(reducer,15000);
//
// store.subscribe(()=>{
//   console.log("Update Store:", store.getState())
// })
//
// store.dispatch({
//   type: "ADD",
//   payload: 500
// });
//
// store.dispatch({
//   type: "SUBTRACT",
//   payload: 500
// });

import {createStore} from "redux"

const initialState = {counter: 0}

function render(state){
  document.getElementById("root").textContent = state.counter;
}

document.getElementById('button1').addEventListener('click',function(){countUp()})
document.getElementById('button2').addEventListener('click',function(){reset()})

function countUp(){
  store.dispatch({
    type: 'COUNTUP'
  })
}

function reset(){
  store.dispatch({
    type: 'RESET'
  })
}

function reducer(state,action){
  switch (action.type) {
    case 'RESET':
      state={
        counter:state.counter=0
      }
      break;

      case 'COUNTUP':
        state={
          counter:state.counter=state.counter+1
        }
      break;

    default:

  }
  return state;
}

const store = createStore(reducer,initialState)


store.subscribe(function(){
  render(store.getState())
})
