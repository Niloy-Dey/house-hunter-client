import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';

const Dashboard = () => {
    const [user, setUser] = useState('')

    useEffect(() => {
        fetch('https://house-hunter1.onrender.com/users')
            .then(res => res.json())
            .then(data => {
                const lastUser = data[data.length - 1];
                setUser(lastUser?.role);
            });
    }, []);

console.log(user)
    return (
        <div>
            <Navbar></Navbar>
            <div class="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    {/* <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                    <Outlet></Outlet>

                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 w-80 h-full bg-black text-base-content">
                        
                        {/* <!-- Sidebar content here --> */}
                        {
                            user === "House Owner" ? <li><Link to="/dashboard/houseOwner" className='border-1 bg-white text-black hover:bg-white hover:text-black shadow-md mb-1'>Owner</Link></li> : ""
                        }
                        {
                            user === "House Renter" ? <li><Link to="/dashboard/houseRenter" className='border-1  bg-white text-black hover:bg-white hover:text-black shadow-md mb-1'>Renter</Link></li>: ""
                        }

                        

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;