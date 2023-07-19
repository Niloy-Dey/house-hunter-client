import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';

const Dashboard = () => {
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
                        <div className='text-center text-white py-5 '>
                            <h1>Name: Niloy dey</h1>
                            <h3>Email: niloy@gmail.com</h3>
                        </div>
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to="" className='border-1 bg-white text-black hover:bg-white hover:text-black shadow-md mb-1'>Profile</Link></li>
                        <li><Link to="" className='border-1  bg-white text-black hover:bg-white hover:text-black shadow-md mb-1'>Profile</Link></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;