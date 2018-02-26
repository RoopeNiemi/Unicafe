
const initialState = {
    good: 0,
    ok: 0,
    bad: 0
  }
  
  const CounterReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
      case 'GOOD':
     initialState.good=initialState.good+1
      state=initialState
        return state
      case 'OK':
      initialState.ok=initialState.ok+1
      state=initialState
        return state
      case 'BAD':
      initialState.bad= initialState.bad +1
      state=initialState
        return state
      case 'ZERO':
      state.bad=0
      state.ok=0
      state.good=0
        return state
        
      default:
      return state
    }
  }
  
  export default CounterReducer