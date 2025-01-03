import React from "react";

function Signup() {
  return (
    <div className="bg-cover bg-center h-screen flex items-center justify-center text-white overflow-hidden"style={{backgroundImage:"url('/bg.jpg')"}}>
      <div className="w-full max-w-md p-8 bg-opacity-75 bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-white mb-4">Sign Up</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-white text-sm font-medium mb-1">Email address:</label>
            <input type="email" id="email" className="w-full px-3 py-2 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="username" className="block text-white text-sm font-medium mb-1">Username:</label>
            <input type="text" id="username" className="w-full px-3 py-2 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="password" className="block text-white text-sm font-medium mb-1">Password:</label>
            <input type="password" id="password" className="w-full px-3 py-2 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:border-blue-500" />
          </div>
          <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">Submit</button>
        </form>
        <div className="mt-4 text-center text-white">
          <span>If you already have an account, then click on </span>
          <a href="/login" className="text-blue-400 hover:underline">Log In</a>
        </div>
      </div>
    </div>
  );
}

export default Signup;
