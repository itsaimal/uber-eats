import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

function Header() {
    return (
        <div className="bg-white shadow-2xl w-full h-20 flex fixed z-10">

            <MenuIcon className="mt-6 ml-12" />

            <img className="ml-12 mb-2" src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ee037401cb5d31b23cf780808ee4ec1f.svg"/>


<div  className="absolute right-10 top-4 ">
            <Button className="" variant="outlined" > Sign in</Button>
            
            </div>

        </div>
    )
}

export default Header
