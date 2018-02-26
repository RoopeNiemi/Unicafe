import React from 'react'
import ReactDOM from 'react-dom'
import CounterReducer from './reducer'
import {createStore} from 'redux'
const Statistiikka = () => {
  const palautteita=store.getState().good+
  store.getState().ok+store.getState().bad
  const goodPercent=(store.getState().good/palautteita*100).toFixed(2)
  if (palautteita === 0) {
    console.log(store.getState())
    return (
      <div>
        <h2>statistiikka</h2>
        <div>ei yhtään palautetta annettu</div>
      </div>
    )
  }

  return (
    <div>
      <h2>statistiikka</h2>
    <div>
   <p>  Hyvä: {store.getState().good} </p>
    <p> Neutraali: {store.getState().ok}  </p>
    <p> Huono: {store.getState().bad}  </p>
     <p>Hyviä: {goodPercent}% </p>
      </div>

      <button onClick={e=>store.dispatch({type:'ZERO'})}>nollaa tilasto</button>
    </div >
  )
}

const store=createStore(CounterReducer)
store.subscribe(()=>{
  console.log(store.getState())
  render()
})
const render=()=>{
  ReactDOM.render(<App />,document.getElementById('root'))
}
class App extends React.Component {
  klik = (nappi) => () => {

  }

  render() {
    return (
      <div>
        <h2>anna palautetta</h2>
        <button onClick={e=>store.dispatch({type: 'GOOD'})}>hyvä</button>
        <button onClick={e=>store.dispatch({type: 'OK'})}>neutraali</button>
        <button onClick={e=>store.dispatch({type: 'BAD'})}>huono</button>
        <Statistiikka />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App