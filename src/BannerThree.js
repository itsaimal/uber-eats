import React from 'react'
import AndroidRoundedIcon from '@material-ui/icons/AndroidRounded';
import AppleIcon from '@material-ui/icons/Apple';

function BannerThree() {
    return (
        <div className="w-full h-44  flex items-center">
            
 <img className="ml-64 w-20" src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/0c6de4f0b3884eb89b28a29ecbc10d59.svg"/>


 <h1 className="ml-6">There's more to love in the app.</h1>

 <div className="flex ml-6">
     <button className="w-24 bg-gray-300 rounded-l-xl  rounded-r-xl  hover:bg-gray-400"><AppleIcon/>iPhone</button>


     <button className=" bg-gray-300 rounded-l-xl  rounded-r-xl w-24 h-7 ml-2 hover:bg-gray-400 ">< AndroidRoundedIcon  />Android</button>

 </div>

        </div>
    )
}

export default BannerThree
