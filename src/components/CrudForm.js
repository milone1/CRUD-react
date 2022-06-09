import React from "react";
import { useState, useEffect } from "react";
const initialForm = {
    name : "",
    constellation : "",
    id : null
}

const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit }) => {
    const [ values, setValues ] = useState(initialForm);

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name] : e.target.value, 
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!values.name || !values.constellation){
            alert("datos incompletos");
        }
        if(values.id === null){
            createData(values);
        } else {
            updateData(values);
        }
        handleReset();
    };

    const handleReset = (e) => {
        setValues(initialForm);
        setDataToEdit(null);
    }

    return(
        <div>
            <h3>Agregar</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Ingrese el nombre" onChange={handleChange} value={values.name}/>
                <input type="text" name="constellation" placeholder="Ingrese la constelacion" onChange={handleChange} value={values.constellation}/>
                <input type="submit" value="Enviar" />
                {/*a la funcion que recibe de rest es apra limpiar el fomulario */}
                <input type="reset" value="Limpiar" onClick={handleReset}/>
            </form>
        </div>
    );
}

export default CrudForm;