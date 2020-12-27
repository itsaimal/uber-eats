import React from 'react'

function RoundImg1({img1,img2,img3,img4,img5,img6,h1,h2,h3,h4,h5,h6}) {
    return (
        <div className="bg-white w-full h-48 flex">
            <div className=" h-48 w-2/12">
                <img className="h-32 w-32 rounded-full ml-6 mt-6" src={img1}/><h1 className="ml-12">{h1}</h1>
        

        </div>
           
            <div className=" h-48 w-2/12">
                <img className="h-32 w-32 rounded-full ml-6 mt-6" src={img2}/><h1 className="ml-12">{h2}</h1>

            </div>
            <div className=" h-48 w-2/12">
                <img className="h-32 w-32 rounded-full ml-6 mt-6" src={img3}/><h1 className="ml-16">{h3}</h1>

            </div>
            <div className=" h-48 w-2/12">
                <img className="h-32 w-32 rounded-full ml-6 mt-6" src={img4}/><h1 className="ml-16">{h4}</h1>

            </div>
            <div className=" h-48 w-2/12">
                <img className="h-32 w-32 rounded-full ml-6 mt-6" src={img5}/><h1 className="ml-20">{h5}</h1>

            </div>
            <div className=" h-48 w-2/12">
                <img className="h-32 w-32 rounded-full ml-6 mt-6" src={img6}/><h1 className="ml-16">{h6}</h1>

            </div>
            
       </div>
    )
}

export default RoundImg1
