import { BrowserRouter } from "react-router-dom";
import { About, Hero, Navbar, Contact } from "./components";
import Working from "./components/Working";
import Ai from "./components/Ai";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Contact />
    </div>
  );
}

export default App;
