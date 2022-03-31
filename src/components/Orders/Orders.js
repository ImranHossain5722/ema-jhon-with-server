import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {
        //this our build custom hook useProduct
    const [products,setProducts ] =useProducts ()
    const [cart,setCart] = useCart(products)
    const handelRemoveProduct =product=>{

        const rest = cart.filter(pd=> pd.id!== product.id)
        setCart(rest)
        removeFromDb(product.id)
        console.log(product);
    }
    return (
        <div className='shop-container'>

            <div className='reviewContainer'>

                {
                    cart.map(product=> <ReviewItem  key={product.id} product={product} handelRemoveProduct={handelRemoveProduct} ></ReviewItem>)
                }

            </div>

            <div className='orderSummery'>

                <Cart cart={cart}>
                    <Link to='/inventory'>
                        <button>
                        Proceed Check Out
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;