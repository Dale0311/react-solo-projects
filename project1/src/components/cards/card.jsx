// components
import CardHeader from "./cardcomponents/cardhead"
import CardContent from "./cardcomponents/content/cardcontent"
import CardFooter from "./cardcomponents/footer/cardfooter"

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