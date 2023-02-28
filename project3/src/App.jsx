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
    />)
  })

  // to render
  return (
    <div className="container mx-auto">
      <div className="my-10 grid grid-cols-3 gap-10 text-white text-center text-3xl">
        {toRenderBox}
      </div>
    </div>
  )
}