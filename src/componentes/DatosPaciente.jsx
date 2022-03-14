const DatosPaciente = ({paciente, setPaciente, eliminarPaciente}) => {
    const {nombre,edad,sexo,dueño,correo,alta,sintomas, id}=paciente

    const handleEliminar=()=>{
        console.log("Eliminando",id)
        const respuesta=confirm("Deseas eliminar este paciente?");
        if(respuesta){
            eliminarPaciente(id)
        }
    }

    return (
    <div>
        <div className=" bg-white shadow-md px-5 py-10 rounded-xl mx-5 my-10 mb-3 mt-3">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {""}
                <span className="font-normal normal-case">{nombre}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Edad de Mascota: {""}
                <span className="font-normal normal-case">{edad}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Sexo de la Mascota: {""}
                <span className="font-normal normal-case">{sexo}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Dueño: {""}
                <span className="font-normal normal-case">{dueño}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Correo: {""}
                <span className="font-normal normal-case">{correo}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Alta: {""}
                <span className="font-normal normal-case">{alta}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {""}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>
            <div className="flex justify-between mt-10">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 uppercase text-white 
                    font-bold rounded-lg"
                    onClick={()=>setPaciente(paciente)}
                >Editar</button>
                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 uppercase text-white 
                    font-bold rounded-lg"
                    onClick={handleEliminar}
                >Eliminar</button>
            </div>
        </div>
    </div>
  )
}

export default DatosPaciente
