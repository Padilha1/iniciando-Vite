import {BrowserRouter as Router, Route, Routes}from "react-router-dom"
import { Home } from "./components/Home"
import { NavBar } from "./components/navBar"
import { Anime } from "./pages/anime"
import { GlobalStyle } from "./styles"


export function Routers(){
    return (
        <Router>
            <Routes>
                <Route path="/anime" element={<Anime/>} />
                <Route path="" element={<NavBar/>} />
                <Route path="" element={<Home/>} />
            </Routes>
        </Router>
    )
}

