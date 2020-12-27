import React from 'react'
import ArrowForwardTwoToneIcon from '@material-ui/icons/ArrowForwardTwoTone';
import ArrowBackTwoToneIcon from '@material-ui/icons/ArrowBackTwoTone';
import {NavLink} from "react-router-dom"

function Banner() {
    return (
        <div className="w-full h-22 bg-white flex">

            {/* left */}

            <div className="mt-14 ml-5 w-96 ">
                <h2 className="font-semibold text-4xl w-96 ">Food Near Me</h2>
            </div>

            {/* right */}

            <div className="   w-96 h-24 absolute right-2 flex">
<NavLink to="/">
        <ArrowBackTwoToneIcon className="mt-14 ml-72 bg-gray-300 rounded-xl hover:bg-gray-600 border-2 hover:border-blue-900"/>

        </NavLink>

        <NavLink to="/2">
        <ArrowForwardTwoToneIcon className="ml-2 mt-14 rounded-xl bg-gray-300 hover:bg-gray-600 border-2 hover:border-blue-900"/>
        </NavLink>
            </div>
            
        </div>
    )
}

export default Banner
