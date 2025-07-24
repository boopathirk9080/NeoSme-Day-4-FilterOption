import React from 'react'
import { Link } from 'react-router'

function Cart() {
return (
    <div className="flex flex-col items-center justify-center min-h-3.5 bg-white mt-5 ">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Cart</h2>
            <p className="text-gray-600 mb-6 text-center">The cart is empty.</p>
            <Link
                to="/"
                className="flex justify-center"
                style={{ textDecoration: 'none' }}
            >
                <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200 font-semibold">
                    Add Products to Cart
                </button>
            </Link>
        </div>
    </div>
)
}

export default Cart