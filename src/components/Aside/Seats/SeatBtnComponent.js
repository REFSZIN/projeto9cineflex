import "./style.js";
import {SeatBtn} from "./style.js";
import { useState } from "react";
export default function SeatBtnComponent(props){ 
  const {data , assetos, setAssentos, setIds, ids} = props;
  const [status, setStatus] = useState(false);
  const selectSeats = (data) => {
    if(assetos.length < 2) {
        if(data.isAvailable){
            setAssentos([...assetos, data.name])               
            data.isAvailable = false;
            setIds([...ids, data.id]);
            setStatus(true)
        }
        else{
            alert("Esse Assento não esta Disponivel")
        }
    } else {
        alert("Você já selecionou dois assentos")
    }
}
return(
    <SeatBtn setStatus={setStatus} assetos={assetos} setAssentos={setAssentos} setIds={setIds} ids={ids} data={data} status={status} isAvailable={data.isAvailable} selectSeats={selectSeats} onClick={() => selectSeats(data)}>
      {data.name}
    </SeatBtn>
  )
}