'use client'
import React from 'react'

export default function StripeCheckout() {
const handleCheckout =() => {
    
}

    return (
        <div className='flex flex-col'>
            <div>StripeCheckout</div>
            <button onClick={handleCheckout} className='px-4 py-1 bg-rose-400 text-gray-700 text-bold'>Checkout</button>
        </div>
    )
}
