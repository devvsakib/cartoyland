import { Link, useLocation } from 'react-router-dom'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/AuthProvider'
import PrimaryButton from '../Common/PrimaryButton'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [path, setPath] = useState('')
    const [showPath, setShowPath] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const pathName = useLocation().pathname
    useEffect(() => {
        setShowPath(!pathName.startsWith('/toy/'));
        setPath(pathName.slice(1) ?? '')
    }, [pathName])
    const handleOpenMenu = () => {
        setMenuOpen(!menuOpen)
        console.log(123);
    }

    return (
        <nav className='py-4 backdrop-blur-sm z-10  w-full bg-white/40 border-b-[1px] border-black/30'>
            <div className='flex justify-between items-center'>
                <div>
                    <Link to="/" className='font-barlow text-2xl relative font-semibold'>CarToyLand<span className='capitalize font-thin absolute top-0 bottom-0 -right-14'>
                        {showPath && pathName !== '/' && ` | ${path}`}
                    </span></Link>
                </div>
                {
                    menuOpen &&
                    <ul className='lg:hidden flex z-40 absolute top-20 rounded w-[95vw] -left-2 bg-secondary px-5 text-sm md:p-10 py-5 text-white justify-between'>
                        <Link to="/"><li onClick={handleOpenMenu} className='bg-accent p-2'>Home</li></Link>
                        <Link to="/alltoys"><li onClick={handleOpenMenu} className='bg-accent p-2'>All Toys</li></Link>
                        {
                            user &&
                            <>
                                <Link to="/addtoy"><li onClick={handleOpenMenu} className='bg-accent p-2'>Add Toy</li></Link>
                                <Link to="/mytoys"><li onClick={handleOpenMenu} className='bg-accent p-2'>My Toys</li></Link>
                            </>
                        }
                        <Link to="/blogs"><li onClick={handleOpenMenu} className='bg-accent p-2'>Blogs</li></Link>
                        {!user && <Link to="/login"><li onClick={handleOpenMenu} className='bg-accent p-2'>Login</li></Link>}
                    </ul>

                }
                <ul className='hidden lg:flex items-center gap-10'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/alltoys">All Toys</Link></li>
                    {
                        user &&
                        <>
                            <li><Link to="/addtoy">Add Toy</Link></li>
                            <li><Link to="/mytoys">My Toys</Link></li>
                        </>
                    }
                    <li><Link to="/blogs">Blogs</Link></li>
                    {!user && <li><Link to="/login">Login</Link></li>}
                </ul>
                <div className='flex items-center gap-5'>
                    <FaShoppingCart />
                    {
                        user && <>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 mask mask-hexagon">
                                        <img src={user.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-5 shadow bg-base-100 rounded-box w-52">
                                    <li>{user.displayName}</li>
                                    <li className="mt-2" onClick={logOut}>
                                        <PrimaryButton text="Logout" fWidth={true} />
                                    </li>
                                </ul>
                            </div>
                        </>
                    }
                    <button onClick={handleOpenMenu} className='block lg:hidden'>
                        <label className="btn btn-circle bg-accent border-0 swap swap-rotate">
                            {
                                !menuOpen ?
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                                    :
                                    <svg className=" fill-current" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
                            }
                        </label>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar