import React from 'react'
import { Link } from 'react-router'

function NavBar() {
    return (
        <div>
            <nav className="bg-gray-800 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white text-lg font-bold">
                        <b>E-commerce</b>
                    </div>
                    <div className="space-x-4">
                        <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                        <Link to="/cart" className="text-white hover:text-gray-300">Cart</Link>                        
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar