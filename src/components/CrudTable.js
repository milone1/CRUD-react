import React from 'react';
import CrudTableRow from './CrudTableRow';
//* rafc shorcut

const CrudTable = ({data}) => {
  console.log("data", data);
  return (
    <div>  
      <h3>Tabla de datos:</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre:</th>
            <th>Constelacion:</th>
            <th>Acciones:</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
          <tr>
            <td coldSpan="3">Sin datos</td>
          </tr>
          ) : (
            data.map((el) => <CrudTableRow key={el.id} el={el}/>)
          )}
        </tbody>
      </table>
    </div>
  )
}

export default CrudTable
