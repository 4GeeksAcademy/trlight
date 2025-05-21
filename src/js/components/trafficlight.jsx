import React, { useState } from "react";
import "../../styles/index.css"
const TrafficLight = () => {
    const [color, setColor] = useState("");
    return (

        
        <div className="main">
            
            <div className='semaforo'>
                <div
                    className={`light red ${color === "red" ? "active" : ""}`}
                    onClick={() => setColor("red")}
                ></div>
                <div
                    className={`light yellow ${color === "yellow" ? "active" : ""}`}
                    onClick={() => setColor("yellow")}>
                </div>
                <div
                    className={`light green ${color === "green" ? "active" : ""}`}
                    onClick={() => setColor("green")}>
                </div>
            </div>
        </div>
    )
}

export default TrafficLight;