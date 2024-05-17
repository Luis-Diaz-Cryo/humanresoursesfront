import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/NavBar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddEmpleado from "./entities/empleado/AddEmpleado";
import EditEmpleado from "./entities/empleado/EditEmpleado";
import ViewEmpleado from "./entities/empleado/ViewEmpleado";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addEmpleado" element={<AddEmpleado />} />
          <Route exact path="/editEmpleado/:eid" element={<EditEmpleado />} />
          <Route exact path="/viewEmpleado/:eid" element={<ViewEmpleado />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
