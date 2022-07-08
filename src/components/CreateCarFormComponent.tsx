import React, {useState} from "react";
import './styles.css';
import axios from "axios";
import CarInterface from "../interfaces/CarInterface";


const CreateCarFormComponent: React.FC = () => {

    let [formInfo, setFormInfo] = useState<CarInterface>({marca: "", modelo: 0, placa: ""});

    let setFormField: Function = (fieldName: string, fieldValue: string | number) => {
        setFormInfo(currentValues => ({
            ...currentValues,
            [fieldName]: fieldValue
        }));
    };

    let sendForm: Function = () => {
        console.log('Sending form');
        console.log(formInfo);
        axios.post('http://localhost:8080/protalento/cars', formInfo)
        .then(() => {
            alert('Auto creado correctamente');
            setFormInfo(() => ({marca: "", modelo: 0, placa: ""}));
        })
        .catch(err => {console.log('An error occurred calling the service: ' + err)})
    };

    return (
        <div className='input'>
            <input type='text' placeholder='Marca' className='input_box' value={formInfo.marca} onChange={(e) => setFormField('marca', e.target.value)} />
            <input type='text' placeholder='Modelo' className='input_box' value={formInfo.modelo} onChange={(e) => setFormField('modelo', e.target.value)} />
            <input type='text' placeholder='Placa' className='input_box' value={formInfo.placa} onChange={(e) => setFormField('placa', e.target.value)}/>
            <button className='input_submit' onClick={() => sendForm()} >
                Enviar
            </button>
        </div>
    );
};

export default CreateCarFormComponent;
