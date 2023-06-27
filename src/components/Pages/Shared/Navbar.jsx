
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/Logo.png';
import { AuthContext } from '../../../providers/AuthProvider';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut();
    }

    const navbar = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/blog'}>Blog</Link></li>
        <li><Link to={'/allToy'}>All Toys</Link></li>
        {user?.email ? <>
            <li><Link to={'/addToy'}>Add Toy</Link></li>
            <li><Link to={'/myToy'}>My Toys</Link></li>
        </> :
            <li><Link to={"/login"}>Login</Link></li>
        }

    </>

    return (
        <div className="navbar bg-gray-200 px-5" data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500">

            {/* Nav Item */}
            <div className="navbar lg:w-1/4">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navbar}
                    </ul>
                </div>
                {/* Logo Section */}
                <div className='lg:flex'>
                    <img src={logo} style={{ width: 90 }} alt="" />
                    <h2 className='lg:text-xl font-bold lg:ml-2'>UNIQUE TOYS</h2>
                </div>
            </div>
            <div className="navbar lg:w-2/4 justify-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navbar}
                </ul>
            </div>
            {user?.email ? <div className="navbar lg:w-1/4 gap-2 justify-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={user?.photoURL} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                {user?.displayName}
                            </a>
                        </li>
                        <li>
                            <a className="justify-between">
                                {user?.email}
                            </a>
                        </li>
                        <li><button onClick={handleLogOut}>Logout</button></li>
                    </ul>
                </div>
            </div> : <Link to={'/register'}></Link>}
        </div>

    );
};

export default Navbar;