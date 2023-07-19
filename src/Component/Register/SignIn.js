import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Shared/Navbar';

const SignIn = () => {
    const navigate = useNavigate()
    const [signInData, setSignInData] = useState({
        email: '',
        password: '',
    });
    const [checkUser, setCheckUser] = useState('');
    const [singleUser, setSingleUserData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                const singleUserData = data.map(user => ({
                    email: user.email,
                    password: user.password,
                }));
                setSingleUserData(singleUserData);
            });
    }, []); 

    console.log("single user", singleUser);
    const handleChange = (e) => {
        setSignInData({
            ...signInData,
            [e.target.name]: e.target.value,
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setSignInData({
          email: '',
          password: '',
        });
        console.log("sign in data", signInData);
        
        if (singleUser[0]?.email === signInData?.email) {
          const checkUserObj = { email: signInData.email }; // Create an object with the email key
          setCheckUser(checkUserObj);
          console.log("checkUser", checkUserObj);
          
        //   fetch('http://localhost:5000/loggedUser', {
        //     method: 'POST',
        //     headers: {
        //       'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(checkUserObj) // Send the object as JSON
        //   })
        //     .then(res => res.json())
        //     .then(data => {
        //       if (data.insertedId) {
        //         console.log("form submitted successfully");
        //       }
        //     })
        //     .catch(error => {
        //       console.error("Error:", error);
        //     });
        }
        
        navigate('/dashboard');
      };
      
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setSignInData({
    //         email: '',
    //         password: '',
    //     });
    //     console.log("sign in data",signInData)
    //     if (singleUser[0]?.email === signInData?.email) {
    //         setCheckUser(signInData?.email);
    //         console.log("checkUser", signInData?.email)

    //     }
        

        
    //     fetch('http://localhost:5000/newLoggedUser', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(checkUser)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.insertedId) {
    //                 console.log("data submitted successfully")
    //             }
    //         })

    //     navigate("/dashboard")
    // }

    return (

        <div>
            <Navbar></Navbar>
            <div className="flex justify-center items-center h-screen">
                <div className=" bg-white rounded-md">
                    <form onSubmit={handleSubmit}>
                        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={signInData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">
                                Password:
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required
                                value={signInData.password}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        >
                            Log In
                        </button>
                    </form>

                    <p>Don't have an Account Please <Link to="/signUp" className='text-blue-500'>Sign Up</Link></p>
                </div>

            </div>
        </div>
    );
};

export default SignIn;
