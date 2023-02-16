// components
import CardHeader from "./cardcomponents/cardhead"
import CardContent from "./cardcomponents/content/cardcontentwhite2"
import CardFooter from "./cardcomponents/footer/cardfooterwhite2"

export default function Card(){
    return (
        <div className="bg-bg2 py-11 flex justify-center">
            <div className="w-3/4 lg:w-2/3">
                {/* card header */}
                <CardHeader />
                {/* card content */}
                <CardContent />
                {/* card footer */}
                <CardFooter />
            </div>
        </div>
    )
}