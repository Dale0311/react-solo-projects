import GenCard from "./cards"
import cardData from "./data/cardData"
export default function Card(){
    const Cards = cardData.map(value=>{
        return ( 
            <GenCard img={value.img} rating1={value.stats.rating} reviewCount={value.stats.reviewCount} location={value.location} title={value.title} price={value.price}/>
        )
    })
    console.log(Cards);
    return(
        <div className="my-8 mx-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* card here */}
            {Cards}
        </div>
    )
}