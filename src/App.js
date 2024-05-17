import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/NavBar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddEmpleado from "./entities/empleado/AddEmpleado";
import EditEmpleado from "./entities/empleado/EditEmpleado";
import ViewEmpleado from "./entities/empleado/ViewEmpleado";
import AddPerfil from "./entities/perfil/AddPerfil";
import EditPerfil from "./entities/perfil/EditPerfil"
import ViewPerfil from './entities/perfil/ViewPerfil'


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
          <Route exact path="/addPerfil" element={<AddPerfil />} />
          <Route exact path="/editPerfil/:emId" element={<EditPerfil />} />
          <Route exact path="/viewPerfil/:emId" element={<ViewPerfil />} />
          <Route exact path="/addRol" element={<AddEmpleado />} />
          <Route exact path="/editRol/:nomRol" element={<EditEmpleado />} />
          <Route exact path="/viewRol/:nomRol" element={<ViewEmpleado />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
