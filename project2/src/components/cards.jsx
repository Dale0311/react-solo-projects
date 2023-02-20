export default function GenCard({img, rating1, reviewCount, location, title, price}){
    return (
        <div className="flex flex-col px-8 py-4">
            {/* card header */}
            <div className="relative">
                <img src={img} alt="" className="w-11/12"/>
                <p className="absolute top-3 left-3 py-1 px-3 bg-white rounded-lg">Sold Out</p>
            </div>

            {/* card content */}
            <div className="flex flex-col py-2 space-y-1">
                <span className="font-light space-x-1">
                    <i className="fa-solid fa-star text-red-500"></i>{rating1}
                    <span className="text-gray-500">({reviewCount}) {location}</span>
                </span>
                <span>
                    <p>
                        {title}
                    </p> 
                    <p className="">
                        <span className="font-semibold">{price}</span> / person
                    </p>
                </span>
            </div>
        </div>
    )
}