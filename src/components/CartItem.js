import React from 'react'
import toast from 'react-hot-toast';
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';
import './CartItem.css'

const CartItem = ({item , itemIndex}) => {
 
    const dispatch = useDispatch();
    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.error("Item removed from Cart");
    }

  return (
    <div>
        <div className='item-section'>
            <div className='item-img-div'>
                <img src={item.image} className='item-img'/>
            </div>
            <div className='item-section-desc'>
                <h1 className='title'>{item.title}</h1>
                <h1 className='desc'>{item.description}</h1>
                <div className='item-price-delete'>
                    <p className='price'>${item.price}</p>
                    <div onClick={removeFromCart} className='delete-btn'><MdDelete /></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem