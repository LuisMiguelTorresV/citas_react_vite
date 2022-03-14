import DatosPaciente from "./DatosPaciente";

const ListadoPaciente = ({pacientes,setPaciente,eliminarPaciente}) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ?(
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">
            Administra tus {""}
            <span className="text-indigo-600 font-bold ">Pacientes y Citas</span>
            </p>
            { pacientes.map( paciente=>(
                <DatosPaciente
                  key= {paciente.id}
                  paciente={paciente}
                  setPaciente={setPaciente}
                  eliminarPaciente={eliminarPaciente}
                />
        ))}
        </>
        
      ) : (
      <>
        <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-lg mt-5 text-center mb-10">
            Añade pacientes y{" "}
            <span className="text-indigo-600 font-bold ">se mostraran aqui</span>
          </p>
      </>
      )}
        
    </div>     
  )
}

export default ListadoPaciente
