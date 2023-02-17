import mainPic from "../assets/main.png"
export default function HeroSection(){
    return(
        <div>
            <div className="flex justify-center mt-4 p-4">
                <img src={mainPic} alt="" />
            </div>
            <div className="mt-4 p-4">
                <h1 className="font-semibold text-4xl">Online Experience</h1>
                <p className="font-light mt-4 max-w-[320px] leading-5">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
    )
}