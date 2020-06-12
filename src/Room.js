import React , { useState } from 'react';
import './Room.css'

function Room() {
    let [islit, setlit] = useState(false);
    let [temp, settemp] = useState(22)
    function updateclickon() {
        console.log ('Button Clicked for On');
        setlit(true);
         }

         function updateclickOff() {
            console.log ('Button Clicked for Off');
            setlit(false)
             }

             function uptemp() {
               console.log ('Button clicked for Temp up')
               settemp(++temp)
             }

             function downtemp() {
              console.log ('Button clicked for Temp down')
              settemp(--temp)

             }
  return (
    <div className={`room ${islit? "lit": "dark"}`}> 
    This room is {islit? `lit` : `dark` } 
    <br/> <br/>
    Room Temperature is {temp} degree Celcius
    <br/> <br/>
    
    <button onClick= {updateclickOff}> OFF </button>
    <br/> <br/>
    <br/><br/>
    <button onClick= {updateclickon}> ON </button>
    <br/> <br/>
    <br/> <br/>
    <button onClick= {uptemp}> + </button>
    <br/> <br/>
    <button onClick= {downtemp}> - </button>

</div>
  );
}



export default Room;
