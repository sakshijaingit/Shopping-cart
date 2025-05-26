import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const{cart} = useSelector((state) => state);
  return (
    <div>
        <div className='navbar'>

            <div className='navbar-content'>

                   <NavLink to="/">
                <div>
                     <img src='/home.jpeg' className='nav_img_home'/>
                </div>
            </NavLink>
            <div className='navbar_routes'>
                <NavLink to="/">
                      <p className='home_route'>Home</p>
                </NavLink>

                <NavLink to="/cart">

                    <div className='nav-cart-block'>
                        <img src='/cart.jpg' className='nav_img_cart' /> 
                      {
                        cart.length>0 &&
                        <span className='nav_cart_length'>{cart.length}</span> 

                      }  
                    </div>

                    
                </NavLink>
            </div>

            </div>

     
        </div>
    </div>
  )
}

export default Navbar

//NavLink is used to route throgh clicking the image or a text 