import {HashRouter, Route, Routes} from "react-router"
import Login from "./Pages/Login"

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
