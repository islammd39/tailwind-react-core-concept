import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars4Icon , XMarkIcon} from '@heroicons/react/24/solid'

const NavBar = () => {
    const [open,setOpen]=useState(false);
    const routes =[
        {id:1,name:'Home',path:'/home'},
        {id:2,name:'Contact',path:'/contact'},
        {id:3,name:'Order',path:'/order'},
        {id:4,name:'Service',path:'/service'},
        {id:5,name:'About',path:'/about'}
    ]
    return (
        <nav className='w-full bg-gray-400 py-5'>
           <div onClick={()=> setOpen(!open)} className="h-6 w-6 md:hidden">
           {
                open? <XMarkIcon/> : <Bars4Icon/>
            }
           </div>
            <ul className={` w-full bg-gray-400 md:flex justify-center absolute duration-500 ease-in md:static ${open? 'top-6' : 'top-[-120px]'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;