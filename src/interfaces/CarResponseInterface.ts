import CarInterface from "./CarInterface";

export default interface CarResponseInterface extends CarInterface {
    id: string;
    action: string;
}
