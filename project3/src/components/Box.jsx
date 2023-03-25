export default function Box(props){
    const style  = {
        backgroundColor : props.isActive? "#333" : "white"
    }
    return(
        <div style={style} className="px-8 py-20 border border-emerald-800 text-center" onClick={props.fn}>
        </div>
    )
}