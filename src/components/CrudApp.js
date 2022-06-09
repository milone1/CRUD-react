import { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";


const   initialDb = [
    {
        id: 1,
        name: "Seiya",
        constellation: "Pegazo",
    },
    {
        id: 2,
        name: "Shiryu",
        constellation: "Dragon",
    },
    {
        id: 3,
        name: "hyoga",
        constellation: "Cisne",
    },
    {
        id: 4,
        name: "Shun",
        constellation: "Cisne",
    },
    {
        id: 5,
        name: "Ikky",
        constellation: "Fenix",
    }
];

const CrudApp = () => {
    const [ db, setDb ] = useState(initialDb);
    const [ dataToEdit, setDataToEdit ] = useState(null);

    const createData = (data) => {
        console.log(data);
        data.id = Date.now();
        setDb([...db, data]);
    };

    const updateData = (data) => {

    };

    const deleteData = (id) => {

    };

    return(
        <div>
            <h2>Crud App</h2>
            <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>
            <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData}/>
        </div>
    );
}

export default CrudApp;