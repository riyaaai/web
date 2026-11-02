import { Link } from "react-router-dom"
const Navbar = (props)=>{

    return(
        <div className="flex justify-between p-5 bg-[#F5EBD0] text-[#7F011F] items-center">
            <p className="text-xl font-bold">{props.mytitle}</p>

            <div className="flex gap-7">
                <Link to="/">Home</Link>
                <Link to="/coll">Collectionsff</Link>
                <p>Our story</p>
                <p>About</p>
            </div>

            <button className="bg-[#7F011F] text-[#F5EBD0] p-2 px-5 rounded-md" >Login</button>
        </div>
    )
}


export default Navbar