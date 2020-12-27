import React from 'react'


function Cover() {
    return (

    //   whole cover



        <div className="w-full h-screen bg-black" >
            <img className="w-full h-screen" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1585258609/assets/e0/c39a2d-20d7-42d3-a58a-8bd9de81906f/original/Wok.png" />

       {/* heading */}


            <div className="absolute top-56 left-9">
                <h2 className="text-6xl font-semibold max-w-7xl">Hungry? You're in the right place</h2>
            </div>


{/* placeholder */}
            <div className="absolute top-80 left-9 w-1/2 h-16  ">
                <input className="w-full h-0 pr-20 p-5 shadow-2xl" placeholder="Enter Delivery address"/>
            </div>
            

            {/* buttons */}
            <div className="absolute top-80 right-52  ">
      <button className="mr-1 bg-gray-200 hover:bg-gray-300 border border-gray-400 text-black font-bold py-2 px-6 ">Deliver Now</button>
    
      <button className="mr-5 bg-black hover:bg-gray-900 border border-gray-400 text-white font-bold py-2 px-6 ">Find Food</button>

     
            </div>

            <div className="absolute bottom-28 left-12">
            <h6 className=""><a className="underline mr-2" href="#">Sign In</a>for your recent addresses</h6>
            </div>

            
            
        </div>
    )
}

export default Cover
