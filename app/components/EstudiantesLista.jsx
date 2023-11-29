import React from 'react';

const EstudiantesLista = () => {
  const estudiantes = [
    { nombre: 'Estudiante 1', edad: 20, calificacion: 90 },
    { nombre: 'Estudiante 2', edad: 22, calificacion: 85 },
    { nombre: 'Estudiante 3', edad: 21, calificacion: 88 },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-white">Lista de Estudiantes</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-600 rounded-lg overflow-hidden table-auto bg-[#181818]">
          <thead>
            <tr className="border-b bg-[#121212] text-white">
              <th className="py-2 px-4">Nombre</th>
              <th className="py-2 px-4">Edad</th>
              <th className="py-2 px-4">Calificación</th>
            </tr>
          </thead>
          <tbody>
            {estudiantes.map((estudiante, index) => (
              <tr
                key={index}
                className={`transition-all duration-300 ease-in-out hover:bg-gray-600 ${
                  index % 2 === 0 ? 'bg-[#181818]' : 'bg-[#121212]'
                }`}
              >
                <td className="py-2 px-4 border-b text-white">{estudiante.nombre}</td>
                <td className="py-2 px-4 border-b text-white">{estudiante.edad}</td>
                <td className="py-2 px-4 border-b text-white">{estudiante.calificacion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EstudiantesLista;
