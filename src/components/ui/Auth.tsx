import React from 'react'

const Auth = () => {
  return (
    <div className="flex items-center justify-end gap-2">
        
        <button className="bg-yellow-300 border-2 border-white px-6 py-3 font-bold rounded-full hover:drop-shadow-lg hover:border-2 hover:border-yellow-900">Sign In</button>
        <button className="bg-yellow-500 border-2 border-white px-6 py-3 font-bold rounded-full hover:drop-shadow-lg hover:border-2 hover:border-yellow-900">Sign Up</button>
    </div>
  )
}

export default Auth