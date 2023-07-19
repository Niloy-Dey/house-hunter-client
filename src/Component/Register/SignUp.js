import React, { useState } from 'react';
import Navbar from '../Shared/Navbar';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        fullName: '',
        role: '',
        phoneNumber: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // You can perform further actions with the form data here
        // Reset the form after submission
        setFormData({
            fullName: '',
            role: '',
            phoneNumber: '',
            email: '',
            password: '',
        });





        fetch('https://house-hunter1.onrender.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log("form submitted successfully")
                }
            })
        // e.preventDefault();

        navigate('/dashboard');
    }




    return (
        <div>
            <Navbar></Navbar>
            <div className='flex justify-center items-center'>

                <div className=' bg-white  text-black rounded-md '>
                    <form className="w-96 mx-auto mt-8 px-4 " onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="fullName" className="block mb-2 text-sm font-medium">
                                Full Name:
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                required
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="role" className="block mb-2 text-sm font-medium ">
                                Role:
                            </label>
                            <select
                                id="role"
                                name="role"
                                required
                                value={formData.role}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            >
                                <option value="">Select Role</option>
                                <option value="House Owner">House Owner</option>
                                <option value="House Renter">House Renter</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium ">
                                Phone Number:
                            </label>
                            <input
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                required
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium ">
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium ">
                                Password:
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        >
                            Register
                        </button>

                    </form>
                    <p>Have an Account Please <Link to="/signIn" className='text-blue-500'>Sign In</Link></p>
                </div>

            </div>
        </div>
    );
};

export default SignUp;
