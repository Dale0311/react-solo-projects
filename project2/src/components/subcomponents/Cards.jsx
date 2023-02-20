export default function TravelComponent(props){
    return(
        <div className="flex flex-col lg:flex-row items-center">
            <div className="flex-1 max-w-[400px]">
                <img src={`./public/img/${props.items.imageUrl}`} alt="" className="rounded-xl"/>
            </div>

            {/* content */}
            <div className="flex-1 space-y-6 px-4">
                <div className="space-y-2 text-center md:text-left">
                    <span className="flex justify-center md:justify-start items-end space-x-4 mt-4 md:mt-0 flex-row">
                        <h3 className="tracking-[4px] lg:text-lg "><i class="fa-solid fa-location-dot text-red-500"></i>{props.items.location}</h3>
                        <a target="_" href={props.items.googleMapsUrl} className="text-sm text-gray-400 p-0 m-0 border-b-[1px] border-gray-400">View on Google Maps</a>
                    </span>
                    <h1 className="text-xl lg:text-2xl font-bold tracking-[1px]">{props.items.title}</h1>
                </div>
                
                <div className="space-y-2 text-center md:text-left">
                    <p className="font-bold">{props.items.startDate} - {props.items.endDate}</p>
                    <p className="max-w-[400px]">{props.items.description}</p>
                </div>
            </div>
        </div>
    )
}