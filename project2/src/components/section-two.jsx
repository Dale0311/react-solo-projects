import jokesData from "./data/jokesData";

export default function Section2(){
    return(
        <div className="space-y-2 py-4">
            <span className="">
                <h1 className="text-3xl">Joke List: </h1>
                <div className="flex items-center space-x-6">
                    <h1 className="text-lg font-semibold">Joke grade: </h1>
                    <span>
                        <i className="fa-solid fa-star text-red-500"></i>: Bad
                    </span>
                    <span>
                        <i className="fa-solid fa-star text-yellow-500"></i>: Neutral
                    </span>
                    <span>
                        <i className="fa-solid fa-star text-green-500"></i>: Good
                    </span>
                </div>
            </span>

            {jokesData.map(value=>{
                let color;
                if(value.likes > 3){
                    color = "text-green-500"
                }else if(value.likes < 3){
                    color = "text-red-500"
                }else{
                    color="text-yellow-500"
                }

                return(
                    <div className="border-b-2 border-red-500 py-4">
                        {value.setup && <h1 className="text-xl">Setup: {value.setup}</h1>}
                        <h1 className="font-bold">Punchline: {value.punchline}</h1>
                        <h1>Rating: {value.likes}<i className={`fa-solid fa-star ${color}`}></i></h1>
                    </div>
                )
            })}
        </div>
    )
}