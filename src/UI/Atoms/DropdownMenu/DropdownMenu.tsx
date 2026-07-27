import { useEffect } from "react";
import "./DropdownMenu.css";

function DropdownMenu ({ options , size}) {
    useEffect(()=>{
        console.log(options)
        console.log(size)

    },[]);


    return (
        <div className="DropdownMenu">
            <select className={size}>
                
                <option value= {options[0]}></option>
                <option value={options[1]}></option>
                <option value={options[2]}></option>

            </select>
        </div>
    );

}

export default DropdownMenu;