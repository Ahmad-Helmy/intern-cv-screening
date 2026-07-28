import { useEffect } from "react";
import "./DropdownMenu.css";


type DropdownMenu_props = {
    options : string[];
    size : string;
    placeholder? : string
}

export default function DropdownMenu ({ options , size , placeholder = "Select"} : DropdownMenu_props) {
    useEffect(()=>{
        console.log(options)
        console.log(size)

    },[]);


    return (
        <div className="DropdownMenu">
            <select className={size} defaultValue= "Select">
                
                <option>{options[0]}</option>
                <option>{options[1]}</option>
                <option>{options[2]}</option>
                
            </select>
        </div>
    );

}