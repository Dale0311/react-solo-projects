import { useState } from "react";
import Box from "./components/Box"
import boxData from "./data/boxes"
export default function App() {

  // setting custom component
  const [boxes, setboxes] = useState(boxData);
  const toRenderBox = boxes.map(box => {
    return (
    <Box 
      key = {box.id}
      id = {box.id}
      on = {box.on}
      clickHandler = {clickHandler} 
    />)
  })

  function clickHandler(id){
    setboxes(prevSquare=>{
      // think of this as variable = prevSqaure....
      return prevSquare.map(square=>{
        // think of this as returning the element to the variable
                  // is the id matched? is so then change change my "on" key, if not matched then return the square
        return square.id === id? {...square, on: !square.on}: square
      })
    })
  }

  // to render
  return (
    <div className="container mx-auto">
      <div className="my-10 grid grid-cols-3 gap-10 text-white text-center text-3xl">
        {toRenderBox}
      </div>
    </div>
  )
}