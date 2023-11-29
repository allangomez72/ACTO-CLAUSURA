import React from 'react';
import { FaStar, FaCheck, FaHeart } from 'react-icons/fa'; // Importa los íconos de React

const Programa = () => {
  return (
    <section className='text-white text-justify mx-auto max-w-2xl mb-12' id="actos">
    <div className='mb-8'>
      <h1 className='text-4xl text-center font-bold mb-4'>PROGRAMA DE CLAUSURA SEXTO PRIMARIA</h1>
      <div className='mb-8'>
        <ol className='list-decimal pl-4'>
          <li className='mb-4'>Ingreso de la XXIX Promoción, acompañados del Director y Docentes de sexto grado.</li>
          <li className='mb-4'>Invocación a Dios por la profesora:</li>

          <li className='mb-4'> Ingreso del Pabellón Nacional y Estandarte del Establecimiento Portado por los alumnos abanderados.</li>
          <p>
            Sexto A:
            <br /><br />
            Sexto B:
            <br /><br />
            Sexto C:
          </p>
          <br />
          <li className='mb-4'> Canto del Himno Nacional dirigido por la alumna</li>
          <li className='mb-4'> Jura a la Bandera por la alumna.</li>
          <li className='mb-4'> Ingreso de alumnos abanderados de Quinto Primaria y traspaso de la Bandera Nacional y Estandarte del Establecimiento. </li>
          <li className='mb-4'> Condecoración de alumnos abanderados de sexto grado por la Comisión de Evaluación.</li>
          <li className='mb-4'> Palabras de bienvenida por el profesor</li>
          <li className='mb-4'> Intervención del Señor Director prof. Julio César Calí Otzoy.</li>
          <li className='mb-4'> Entrega de Diplomas a los y las estudiantes de sexto primaria A, B y C.</li>
          <li className='mb-4'> Intervención de un representante de La Junta Directiva.</li>
          <li className='mb-4'> Palabras de despedida por la alumna:</li>
          <li className='mb-4'> Egreso del Pabellón Nacional y Estandarte del Establecimiento por estudiantes distinguidos de quinto grado.</li>
          <li className='mb-4'> Egreso de Mesa Directiva</li>
          <li className='mb-4'> Palabras de agradecimiento por la profesora</li>
        </ol>
      </div>
      </div>

      <div className='text-center mt-8'>
        <h1 className='text-2xl font-bold mb-4'>Conductores del Programa</h1>
        <p className='text-xl'>
           Profa. <br />
           Profa.
        </p>
      </div>
    </section>
  );
}

export default Programa;
