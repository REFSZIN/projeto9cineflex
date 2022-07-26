import { Asidee } from"./style.js";
import Hour from "./Hour/Hour";
import Seats from "./Seats/Seats";
import Success from "./Success/Success";

export default function Aside(){
    return(
        <Asidee>
            <Hour />
            <Seats />
            <Success />
        </Asidee>
    );
};