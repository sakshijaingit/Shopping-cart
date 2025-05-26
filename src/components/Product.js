import React from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch , useSelector} from 'react-redux';
import {add, remove} from '../redux/Slices/CartSlice'

const Product = ({post}) => {

    const {cart} = useSelector((state) =>state);
    const dispatch= useDispatch();

    const addTocart = () => {
        dispatch(add(post));
        toast.success("Item added to cart");
    }

    const removeFromCart = () => {
        dispatch(remove(post.id));
         toast.error("Item removed from cart");


    }

  return (
    <div className='product-main-container'>
        <div className='product-main-title'>
            <p>{post.title}</p>
        </div>
        <div>
            <p className='product-desc'>{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
        </div>
        <div className='product-img-div'>
            <img src={post.image} className="product-img"/>
        </div>

        <div className='product-price-add-container'>
             <div>
            <p className='product-price-para'>${post.price}</p>
             </div>
       
       {
        Array.isArray(cart) && cart.some((p) => p.id ==post.id) ?
        (<button onClick={removeFromCart} className='product-btn-remove'>Remove Item</button>) :
        (<button onClick={addTocart} className='product-btn-add'>Add to Cart</button>)
       }

        </div>

       

    </div>
  )
}

export default Product