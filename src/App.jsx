import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import TourInfo from "./pages/TourInfo"


function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/tourInfo" element={<TourInfo/>}/>
      </Routes>
    </>
  )
}

export default App
