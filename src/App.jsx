import Formulario from "./componentes/Formulario"
import Header from "./componentes/Header"
import ListadoPaciente from "./componentes/ListadoPaciente"
import {useState, useEffect} from "react"
function App() {

  const [pacientes,setPacientes]=useState([]);
  const [paciente,setPaciente]=useState({});

  useEffect(()=>{
    const obetenerLS=()=>{
      const pacientesLS = JSON.parse(localStorage.getItem("pacientes"))??[];
      setPacientes(pacientesLS)
    }
    obetenerLS();
  },[]);

  useEffect(()=>{
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  },[pacientes])

  const eliminarPaciente=id=>{
    //console.log("Eliminando paciente ", id);
    const pacientesActualizado=pacientes.filter(paciente=>paciente.id!==id);
    setPacientes(pacientesActualizado)
  }

  return (
    
    <div className="container mx-auto mt-20">
        <Header/>
        <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPaciente
        pacientes={pacientes}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
        />
        </div>
    </div>
  )
}

export default App
