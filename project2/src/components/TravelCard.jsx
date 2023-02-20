import dataTravel from "./data/dataTravel"
import Cards from "./subcomponents/Cards"

const cards = dataTravel.map(items =>{
    return(
        <Cards 
            key={items.key}
            items = {items}
        />
    )
})
console.log(dataTravel);
export default function TravelCard(){
    return(
        <div className="my-4 p-4 grid grid-cols-1 md:grid-cols-2 gap-8">
            {cards}
        </div>
    ) 
}