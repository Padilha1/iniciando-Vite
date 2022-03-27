import { Routers } from "./routes";
import { NavBar } from "./components/navBar"
import { Home } from "./components/Home";

function App() {
  return  (
    <div className="mother">
      <NavBar/>
      <Home/>
    </div>

  );
}

export default App

