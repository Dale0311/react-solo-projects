import logo from "../assets/logo.png"
export default function Nav(){
    return(
        <nav className="py-8 px-4">
            <img src={logo} alt="" className="w-40"/>
        </nav>
    )
}