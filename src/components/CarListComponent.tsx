import React from "react";
import CarResponseInterface from "../interfaces/CarResponseInterface";
import CarComponent from "./CarComponent";
import {List, ListItem} from "@mui/material";

interface CarListComponentProps {
    carList: CarResponseInterface[];
}


let renderCar: Function = ({id, marca, modelo, placa, action}: CarResponseInterface) => {
    return (
        <ListItem key={id}>
            <CarComponent id={id} marca={marca} placa={placa} modelo={modelo} action={action} />
        </ListItem>
    );
}

let CarListComponent: React.FC<CarListComponentProps> = ({carList}) => {
    return carList && (
        <List>
            {
                carList.map((car) => renderCar(car))
            }
        </List>
        );
}

export default CarListComponent;
