import React from "react";
import CarResponseInterface from "../interfaces/CarResponseInterface";
import {Typography} from "@mui/material";
import './styles.css';


let CarComponent: React.FC<CarResponseInterface> = ({id, marca, modelo, placa}) => {
    return (
      <div className='single_car'>
        <Typography display='block' variant='h4'>Marca: {marca}</Typography>
        <Typography display='block' variant='h4'>Modelo: {modelo}</Typography>
        <Typography display='block' variant='h4'>Placa: {placa}</Typography>
      </div>
    );
}

export default CarComponent;
