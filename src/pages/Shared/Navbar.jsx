import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'

const Navbar = () => {
    return (
        <div className='bg-green-300'>
            <div className="container mx-auto navbar">
                <div className="flex-1">
                    <img width={50} src={logo} alt="" />
                    <Link to='/' className="text-xl text-white font-bold uppercase">Life<span className='ml-2'> Recovery</span></Link>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" alt='' />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link to='/' className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li><Link to='/signUp'>Sign In</Link></li>
                            <li><Link to='/'>Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;