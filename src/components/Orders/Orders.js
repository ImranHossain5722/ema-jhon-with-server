import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
        //this our build custom hook useProduct
    const [products,setProducts ] =useProducts ()
    const [cart,setCart] = useCart(products)
    const handelRemoveProduct =product=>{

        console.log(product);
    }
    return (
        <div className='shop-container'>

            <div className='product-cartxxxx'>

                {
                    cart.map(product=> <ReviewItem  key={product.id} product={product} handelRemoveProduct={handelRemoveProduct} ></ReviewItem>)
                }

            </div>

            <div className='orderSummery'>

                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;