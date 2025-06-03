import React from 'react';

const Signup = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
            <h1 className="text-[30px] font-bold mb-6 text-center">Sign Up</h1>
            <div className="w-full max-w-md shadow-lg border-2 border-gray-700 rounded-[20px] flex flex-col justify-center items-start p-6 space-y-4 bg-white">
                <div className="w-full">
                    <label htmlFor="name" className="block mb-1 font-semibold">First Name</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Enter your First Name"
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <label htmlFor="name" className="block mb-1 font-semibold">Last Name</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Enter your Last Name"
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div className="w-full">
                    <label htmlFor="password" className="block mb-1 font-semibold">Email</label>
                    <input
                        id="password"
                        type="email"
                        placeholder="Enter your email or phone"
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div className="w-full">
                    <label htmlFor="password" className="block mb-1 font-semibold">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div className="w-full">
                    <label htmlFor="password" className="block mb-1 font-semibold">Confirm Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Confirm password"
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <button className="w-full bg-black text-white py-2 rounded transition hover:bg-gray-800">
                    Singup
                </button>

                <div className="w-full flex justify-between text-sm">
                    <button className="text-indigo-600 hover:underline focus:outline-none">
                        Login
                    </button>
                    <button className="text-indigo-600 hover:underline focus:outline-none">
                        Forgot Password?
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Signup;
