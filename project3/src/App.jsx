import { useState } from "react";
import Box from "./components/Box";
import boxData from "./data/boxes"

export default function App() {
  let [boxes, setBoxes] = useState(boxData);
  
  function onClickHandler(id){
    setBoxes(prevState =>{
      return prevState.map(box => {
        return id === box.id? {...box, on: !box.on} : box;
      })
    })
  }

  const toRender = boxes.map(box=>{
      return <Box 
        key = {box.id}
        id = {box.id}
        isActive = {box.on}
        fn = {() => onClickHandler(box.id)}
      />
  })
  
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-3 gap-4">
        {toRender}
      </div>
    </div>
  )
}