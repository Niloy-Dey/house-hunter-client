import React, { useEffect, useState } from 'react';

// import component 👇
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [user, setUser] = useState(null);
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }


    useEffect(() => {
        fetch('https://house-hunter1.onrender.com/users')
            .then(res => res.json())
            .then(data => {
                const lastUser = data[data.length - 1];
                setUser(lastUser?.email);
            });
    }, []);
    // console.log(user);
    const signOut = () => {
        // Perform sign-out logic here
        setUser(null); // Update user state to null or any initial value
    };


    return (
        <div>

            <Drawer
                style={{ backgroundColor: "#0F172A", color: "white" }}
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                className='bla bla bla pt-4'
            >
                <Link to="/home" className='text-center  font-bold text-xl  flex'> <img className='w-16 mr-2' src="" alt="" />House Hunter  </Link>
                <ul class="menu  px-1">
                    <li><Link className=' bg-black text-white hover:bg-black hover:text-white' to="/home">Home</Link></li>
                    {
                        user ? <li><Link className=' bg-black text-white hover:bg-black hover:text-white' to="/dashboard">Dashboard</Link></li> : ''
                    }

                    {
                        user ? <button className=' bg-black text-white hover:bg-black hover:text-white' onClick={signOut}>Sign Out</button> : <li><Link className=' bg-black text-white hover:bg-black hover:text-white' to="/signUp">Register</Link></li>
                    }
                </ul>
            </Drawer>


            <div class="navbar shadow-lg   bg-black  py-3 text-white justify-between">
                <div class="navbar-start">
                    <Link to="/home" class="normal-case text-xl flex  " > <img className='w-16 mr-2' src="" alt="" />House Hunter  </Link>
                </div>


                <div class="navbar-end hidden lg:flex">
                    <ul class="menu menu-horizontal px-1">
                        <li><Link className=' bg-black text-white hover:bg-black hover:text-white' to="/home">Home</Link></li>
                        {
                            user ? <li><Link className=' bg-black text-white hover:bg-black hover:text-white' to="/dashboard">Dashboard</Link></li> : ''
                        }
                        {
                            user ? <button className=' bg-black text-white hover:bg-black hover:text-white' onClick={signOut}>Sign Out</button> : <li><Link className=' bg-black text-white hover:bg-black hover:text-white' to="/signUp">Register</Link></li>
                        }
                    </ul>
                </div>


                <button className='lg:hidden ' onClick={toggleDrawer}><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></button>
            </div>
        </div>
    );
};

export default Navbar;