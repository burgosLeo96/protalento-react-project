import React, {useState} from 'react';
import './App.css';
import CreateCarFormComponent from "./components/CreateCarFormComponent";
import CarListComponent from "./components/CarListComponent";
import CarResponseInterface from "./interfaces/CarResponseInterface";
import {StompSessionProvider, useSubscription} from "react-stomp-hooks";

const App: React.FC = () => {

    return (
        <StompSessionProvider url={'ws://localhost:8080/cars-publisher'}>
            <SubscribingComponent/>
        </StompSessionProvider>
    );
}

const SubscribingComponent: React.FC = () => {
    let[carList, setCarList] = useState<CarResponseInterface[]>([]);

    useSubscription("/cars-topic", (event) => {
        let carEvent: CarResponseInterface = JSON.parse(event.body);
        if (carEvent.action === 'added') {
            setCarList((currentList) => [...currentList, carEvent]);
        }
        else if(carEvent.action === 'deleted') {
            setCarList((currentList) => {
                let newList = currentList.filter(carItem => carItem.id !== carEvent.id);
                return [...newList];
            })
        }
    });

    return (
        <div className="App">
            <span className='heading' >Creador de carros</span>
            <CreateCarFormComponent/>
            <CarListComponent carList={carList} />
        </div>
    );
}

export default App;
