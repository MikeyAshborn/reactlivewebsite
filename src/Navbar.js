import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>App</h1>
            <div className="links">
                <Link to="/">Home</Link>
                
                <Link to="/create" >New Blog</Link>
            </div>
        </nav>
     );
}


export default Navbar;
<nav className="navbar">
    <h1>New app</h1>
    <div className="links">
        <a href="/">Home</a>

    </div>
</nav>