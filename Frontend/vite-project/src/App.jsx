import { fetchControllerDelete, fetchControllerGet, fetchControllerPost, fetchControllerPut } from './controllers/controllerMake'

import './App.css'

function App() {
  return (
    <>
      <button onClick={fetchControllerGet}>GET</button>
      <button onClick={fetchControllerPost}>POST</button>
      <button onClick={fetchControllerPut}>PUT</button>
      <button onClick={fetchControllerDelete}>DELETE</button>
    </>
  )
}

export default App