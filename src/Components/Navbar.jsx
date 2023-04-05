import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <>
        <h3>Navbar</h3>
        <Link to="/" >Home</Link>
        <Link to="/About" >About</Link>
        </>
    )
}

export default Navbar