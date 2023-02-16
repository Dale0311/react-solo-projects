import Card from "./cards/card"
import Card2 from "./cards/card2"
import CardWhite from "./cards/cardwhite"
import CardWhite2 from "./cards/cardwhite2"
export default function App() {

  return (
    <div className="bg-bg1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-14">
      <Card />
      <CardWhite />
      <Card2 />
      <CardWhite2 />
    </div>
  )
}