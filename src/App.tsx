import { BrowserRouter, Routes, Route } from "react-router"

import { Home } from "./pages/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/home" element={ <Home /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
