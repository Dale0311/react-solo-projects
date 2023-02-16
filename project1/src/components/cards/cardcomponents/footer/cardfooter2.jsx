import fblogo from "../../../../assets/logos/Facebook.png"
import iglogo from "../../../../assets/logos/Instagram.png"
import twitterlogo from "../../../../assets/logos/Twitter.png"
import githublogo from "../../../../assets/logos/Github.png"
import linkedin from "../../../../assets/logos/Linkedin.png"

export default function CardFooter(){
    return(
        <div className="flex justify-center space-x-6 bg-footerbg py-8 px-12">
            <img src={fblogo} alt="" className="flex-initial" />
            <img src={iglogo} alt="" className="flex-initial" />
            <img src={twitterlogo} alt="" className="flex-initial" />
            <img src={githublogo} alt="" className="flex-initial" />
            <img src={linkedin} alt="" className="flex-initial" />
        </div>
    )
}