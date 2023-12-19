import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import List from './Components/List'
import { myStore } from './redux/store'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Provider store={myStore}>
        <List />
      </Provider>
    </>
  )
}

export default App
