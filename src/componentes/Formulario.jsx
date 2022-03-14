import {useState, useEffect} from "react";
import Error from "./Error";

const Formulario = ({pacientes,setPacientes,paciente,setPaciente}) => {
  const [nombre,setNombre]=useState("");
  const [edad,setEdad]=useState("");
  const [sexo,setSexo]=useState("");
  const [dueño,setDueño]=useState("");
  const [correo,setCorreo]=useState("");
  const [alta,setAlta]=useState("");
  const [sintomas,setSintomas]=useState("");
  
  const [error,setError]= useState(false);

  useEffect(()=>{
      if(Object.keys(paciente).length>0){
        setNombre(paciente.nombre)
        setEdad(paciente.edad)
        setSexo(paciente.sexo)
        setDueño(paciente.dueño)
        setCorreo(paciente.correo)
        setAlta(paciente.alta)
        setSintomas(paciente.sintomas)
      }
  },[paciente])

  const generarId=()=>{
    const random= Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random+fecha
  }

  const handleSubmit=(e)=>{
    e.preventDefault();

    //validacion de formulario
    if([nombre,edad,sexo,dueño,correo,alta,sintomas].includes("")){
      console.log("Hay al menos un campo vacio...")

      setError(true)
      return;
    }
      setError(false)

      //Objet de paciente
      const objetoPaciente={
        nombre,
        edad,
        sexo,
        dueño,
        correo,
        alta,
        sintomas
      }
      
      if(paciente.id){
        //Editando registro
        objetoPaciente.id=paciente.id
        console.log(paciente)
        console.log(objetoPaciente)

        const pacientesActualizado = pacientes.map( pacienteState => 
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

        setPacientes(pacientesActualizado)
      }else{
        //Nuevo registro
        objetoPaciente.id=generarId();
        setPacientes([...pacientes, objetoPaciente]);
      }

      //console.log(objetoPaciente)
      setPaciente({});
      //reiniciar form
      setNombre("")
      setEdad("")
      setSexo("")
      setDueño("")
      setCorreo("")
      setAlta("")
      setSintomas("")
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

        <p className="text-lg mt-5 text-center mb-10">
            Añade Pacientes y {""}
            <span className="text-indigo-600 font-bold ">Administralos</span>
        </p>
        <form 
          onSubmit={handleSubmit}
          className="bg-gray-400 shadow-md rounded-lg py-10 px-5 mb-5">
            {error && <Error><p>"Todos los campos son obligatorios"</p></Error>}
            <div className="mb-5">
                <label htmlFor="mascota"className="block text-gray-700 uppercase font-bold">
                  Nombre Mascota
                </label>
                <input
                  id="mascota"
                  type="text"
                  placeholder="Nombre de la Mascota"
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                  value={nombre}
                  onChange={(e)=>setNombre(e.target.value)}
                  />
            </div>
            <div className="mb-5">
                <label htmlFor="edadMascota"className="block text-gray-700 uppercase font-bold">
                  Edad Mascota
                </label>
                <input
                  id="edadMascota"
                  type="text"
                  placeholder="Edad de la Mascota"
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                  value={edad}
                  onChange={(e)=>setEdad(e.target.value)}
                  />
            </div>
            <div className="mb-5">
                <label htmlFor="sexoMascota"className="block text-gray-700 uppercase font-bold">
                  Sexo de la Mascota
                </label>
                <input
                  id="sexoMascota"
                  type="text"
                  placeholder="Sexo de la Mascota"
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                  value={sexo}
                  onChange={(e)=>setSexo(e.target.value)}
                  />
            </div>
            <div className="mb-5">
                <label htmlFor="dueño"className="block text-gray-700 uppercase font-bold">
                  Nombre Dueño
                </label>
                <input
                  id="dueño"
                  type="text"
                  placeholder="Nombre del Dueño"
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                  value={dueño}
                  onChange={(e)=>setDueño(e.target.value)}
                  />
            </div>
            <div className="mb-5">
                <label htmlFor="correo"className="block text-gray-700 uppercase font-bold">
                  Correo
                </label>
                <input
                  id="correo"
                  type="email"
                  placeholder="Correo"
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                  value={correo}
                  onChange={(e)=>setCorreo(e.target.value)}
                  />
            </div>
            <div className="mb-5">
                <label htmlFor="alta"className="block text-gray-700 uppercase font-bold">
                  Alta
                </label>
                <input
                  id="alta"
                  type="date"
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md cursor-pointer"
                  value={alta}
                  onChange={(e)=>setAlta(e.target.value)}
                  />
            </div>
            <div className="mb-5">
                <label htmlFor="dueño"className="block text-gray-700 uppercase font-bold">
                  Sintomas de la Mascota
                </label>
                <textarea 
                  id="sintomas"
                  type="text"
                  placeholder="Describe los sintomas de las mascota"
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                  value={sintomas}
                  onChange={(e)=>setSintomas(e.target.value)}
                />
            </div>
            <input 
              type="submit"
              className="bg-red-600 w-full p-3 text-white uppercase font-bold hover:bg-red-800
              cursor-pointer"
              value={paciente.id ? "Editar paciente" : "Agregar paciente"}
            />
        </form>
    </div>
  )
}

export default Formulario