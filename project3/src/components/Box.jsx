export default function Box(props){

    const style = {backgroundColor: props.on? "#333": "orange"}
    return(
        <div style={style} className="p-14 rounded" key={props.id} onClick={()=>props.clickHandler(props.id)}></div>
    )
}
