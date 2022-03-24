import {BrowserRouter as Router, Route, Routes}from "react-router-dom"
import { NavBar } from "./components/navBar"
import { Anime } from "./pages/anime"


export function Routers(){
    return (
        <Router>
            <Routes>
                <Route path="/anime" element={<Anime/>} />
                <Route path="" element={<NavBar/>} />
            </Routes>
        </Router>
    )
}

