import React from 'react'

function Cards() {
    return (
        <div className="w-full h-96 bg-red-50 flex">
            
            <div className=" ml-4 h-96 w-4/12  mr-4 shadow-2xl">
         <img  src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/cef389b486cb4827e6ba007f26ebddab.svg"/>

         <h1 className="text-3xl font-semibold pb-3">Feed your employees</h1>

         <a><h1 className="underline cursor-pointer">Create a business account</h1></a>
            </div>

            <div className="h-96 w-4/12  mr-4 shadow-2xl">
<img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/7f56b34e6c253cb54a35bacf5150dde9.svg"/>

<h1 className="text-3xl font-semibold pb-3">Your restaurant,delivered</h1>

<a><h1 className="underline cursor-pointer">Add your restaurant</h1></a>

            </div>


            <div className="h-96 w-4/12  mr-2 shadow-2xl">
<img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/84d6770ca439c4b1ba2d6f53adc1d039.svg"/>

<h1 className="text-3xl font-semibold pb-3">Deliver the Eats</h1>

<a><h1 className="underline cursor-pointer">Sign up to deliver</h1></a>
            </div>
        </div>
    )
}

export default Cards
