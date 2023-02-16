export default function CardContent(){
    return (
        <div className="bg-bg3 py-6 px-8 flex flex-col items-center">
            <div>
                <div className="flex flex-col text-center">
                    <h1 className="text-2xl font-bold text-white">Laura Smith</h1>
                    <h1 className="text-cardText1 text-sm">Frontend Developer</h1>
                    <h1 className="text-xs text-white">Devwithlaura.com</h1>
                </div>
            </div>

            {/* btns */}
            <div className="flex justify-between text-sm py-8 space-x-3 font-medium w-11/12">
                <button className="flex items-center justify-center w-32 rounded-md py-3 px-3 bg-white border-2 border-gray-300"><i class="mx-1 fa-solid fa-envelope"></i>Email</button>
                <button className="flex items-center justify-center w-32 rounded-md py-3 px-3 bg-cardbg1 text-white"><i class="mx-1 fa-brands fa-linkedin"></i>Linkedin</button>
            </div>

            {/* about */}
            <div className="text-white flex flex-col py-4 space-y-4 items-center w-11/12">
                <div className="flex flex-col space-y-2">
                    <h1 className="font-bold text-lg">
                        About
                    </h1>
                    <p className="text-xs">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                </div>
                <div className="flex flex-col space-y-2">
                    <h1 className="font-bold text-lg">
                        Interest
                    </h1>
                    <p className="text-xs">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                </div>
            </div>
        </div>
    )
}