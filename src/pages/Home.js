import React from 'react'
import { useState , useEffect} from 'react';
import Spinner from '../components/Spinner';
import Product from '../components/Product';

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    const API_URL= "https://fakestoreapi.com/products";

    async function fetchProductData() {
        setLoading(true);
        try{
            let res= await fetch(API_URL);
            const data= await res.json();
            console.log(data);
            setPosts(data);
        }
        catch(error) {

        }
        setLoading(false);
        
    }
    useEffect(() => {
      fetchProductData();
    }, [])
    
   
  return (
    <div>
        {
            loading ? 
            <Spinner />
            :
            posts.length >0 ?
            (
                <div className='home-mapping-div'>
                    {
                         posts.map((post) => (
                        <Product key={post.id} post={post} />
                        ))
                    }
                   
                </div>
            ) :
            <div className='home-nodata'>
                <p> No data found</p>
            </div>
            
        }
    </div>
  )
}

export default Home
//putting the mapping part inside curly braces is also impotant