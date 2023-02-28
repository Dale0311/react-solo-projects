import { useState } from "react"

export default function Box(props){
    const [boxState, setBoxState] = useState(props.on);
    const style = {backgroundColor: boxState? "#333": "orange"}
    
    // fn - handlers
    function clickHandler(){
        setBoxState(prevState => !prevState)
    }
    return(
        <div style={style} className="p-14 rounded" key={props.id} onClick={clickHandler}></div>
    )
}