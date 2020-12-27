import React from 'react'
import AndroidRoundedIcon from '@material-ui/icons/AndroidRounded';
import AppleIcon from '@material-ui/icons/Apple';


function Footer() {
    return (
        <div className=" w-full h-screen">

            <div className=" w-full h-56">

            </div>
            <div className="bg-black w-full h-96 absolute ">
                
<img  className="mt-16 ml-12" src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/c266ad32e5e88af804b3a1b6b60098f9.svg"/>

<div className="flex mt-32 ml-16">
<button className="w-24 border border-gray-200 bg-gray-900 text-white rounded-l-sm  rounded-r-sm  hover:bg-gray-400"><AppleIcon/>iPhone</button>


<button className=" bg-gray-900 border border-gray-200 rounded-l-sm  text-white rounded-r-sm w-24 h-7 ml-2 hover:bg-gray-400 ">< AndroidRoundedIcon   />Android</button>
</div>

<div className="bg-black max-w-7xl h-12 ml-9 mt-12 border-b"></div>

            </div>
        </div>

    )
}

export default Footer
