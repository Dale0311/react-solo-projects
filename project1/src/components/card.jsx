import cardimg from "../assets/cardimg.png"
export default function Card(){
    return (
        <div className="bg-bg2 w-1/2 py-11 px-20 flex justify-center">
            <div>
                {/* card header */}
                <div>
                    <img src={cardimg} alt="" />
                </div>
                {/* card content */}
                <div className="bg-bg3">
                    <div>
                        <div>
                            <h1>Laura Smith</h1>
                            <h3>Frontend Developer</h3>
                            <h4>Angularisoverrated@gmail.com</h4>
                        </div>
                        <div>
                            <button>Email</button>
                            <button>Linkedin</button>
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