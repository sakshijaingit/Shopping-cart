import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem';
import { useEffect ,useState} from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = () => {

    const {cart} = useSelector((state) =>state);
    const [totalAmount, setTotalAmount] = useState(0);
    console.log("Print cart");
    console.log(cart);

    useEffect(() => {
       setTotalAmount( cart.reduce((accumulator , currentValue) => accumulator + currentValue.price , 0));
       //0 here is default value ,, reduce function is used to calculate sum 
    }, [cart])
    

  return (
    <div>
        {
            cart.length >0 ?
            (<div className='cart-section'>

                <div className='cart-item-section'> 
                    {
                        cart.map((item, index) =>{
                            return <CartItem  key={item.id} item={item} itemIndex={index}/>
                        })
                    }
                </div>


                <div className='cart-summary-section'>
                    <div className='part-1'>
                        <div className='heading-cart'>Your Cart</div>
                        <div className='heading summary'>Summary</div>
                        <p>
                            <span className='tot-item'>Total Items : {cart.length}</span>
                        </p>
                    </div>

                    <div className='part-2'>
                        <p className='tot-amt'>Total amount:${totalAmount}</p>
                        <button className='checkout-btn'>Checkout Now</button>
                    </div>
                </div>


            </div>) :
            (<div className='cart-empty-part'>
                <h1>Your cart is empty !</h1>
                <Link to="/"> <button className='btn'>Shop Now</button>  </Link>
            </div>)
        }
    </div>
  )
}

export default Cart