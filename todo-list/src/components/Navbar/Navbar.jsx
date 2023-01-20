import {Link} from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {

    return (
        <div className='navbar'>
            <Link className='main-heading' to='/'>To Do List Project</Link>
        </div>
    );
};
export default Navbar