import { useState } from "react"
export default function SignUpForm(){

    // state
    let [user, setUser] = useState({
        email: "",
        password: "",
        confirmPass: "",
        newsLetter: false
    })

    // function
    function changeHandler(e){
        const {name, value, checked, type} = e.target;
        setUser(prevState => {
            return {
                ...prevState,
                [name] : type =="checkbox"? checked : value
            }
        })
    }

    function submitHandler(e){
        e.preventDefault();
        let count = 0
        // using if
        if(user.password === user.confirmPass){
            console.log("successfully signed up!");
            if(user.newsLetter){
                console.log("thanks for signing up for our news letter!");
            }
        }else{console.log("password does not match!");} 
        
    }
    return(
        <div className="p-16 bg-white rounded-lg drop-shadow-2xl">
            <form className="flex flex-col gap-4 items-center" onSubmit={submitHandler}>
                <input onChange={changeHandler} type="email" value={user.email} name="email" className="py-2 px-4 border border-gray-500 rounded" placeholder="Email" required/>
                <input onChange={changeHandler} type="password" value={user.password} name="password" className="py-2 px-4 border border-gray-500 rounded" placeholder="Password" required/>
                <input onChange={changeHandler} type="password" value={user.confirmPass} name="confirmPass" className="py-2 px-4 border border-gray-500 rounded" placeholder="Confirm password" required/>
                <label>
                    <input type="checkbox" name="newsLetter" className="mx-2" checked={user.newsLetter} onChange={changeHandler}/>
                    I want to join the newsletter
                </label>
                <button className="bg-[#663399] py-2 px-8 rounded-lg text-white">Sign Up</button>
            </form>
        </div>
    )
}