import cardimg from "../assets/cardimg.png"
export default function Card(){
    return (
        <div className="bg-bg2 w-1/2 py-11 px-20 flex justify-center">
            <div className="w-1/2">
                {/* card header */}
                <div>
                    <img src={cardimg} alt="" />
                </div>
                {/* card content */}
                <div className="bg-bg3 py-6">
                    <div>
                        <div className="flex flex-col text-center text-white">
                            <h1 className="text-xl font-bold">Laura Smith</h1>
                            <h1 className="text-cardText1 text-xs">Frontend Developer</h1>
                            <h1 className="text-[10px]">Angularisoverrated@gmail.com</h1>
                        </div>
                        <div className="flex text-sm py-6 justify-center space-x-3 font-medium">
                            <button className="w-28 rounded-md py-2 px-3 bg-white">Email</button>
                            <button className="w-28 rounded-md py-2 px-3 bg-cardbg1">Linkedin</button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1>
                                About
                            </h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ducimus deserunt veniam ad similique perferendis!</p>
                        </div>
                        <div>
                            <h1>
                                Interest
                            </h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, ratione.</p>
                        </div>
                    </div>
                </div>
                {/* card footer */}
                <div>
                    <p>Footer goes here</p>
                </div>
            </div>
        </div>
    )
}