import { useContext } from 'react'
import { CartContext } from '../contexts/CartProvider'
import { FaTrash } from 'react-icons/fa'
import Swal from 'sweetalert2'

const Cart = () => {
    const { cartItems, totalPrice, clearCart, removeFromCart } = useContext(CartContext)

    const removeAllItems = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to clear your cart!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ef233c',
            cancelButtonColor: '#60A5FA',
            confirmButtonText: 'Yes, clear it!'
        }).then((result) => {
            if (result.isConfirmed) {
                clearCart()
            }
        })
    }
    return (
        <div className='pb-20'>
            <div className='max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8'>
                <h1 className="text-center text-3xl font-semibold text-secondary my-10">Cart</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className='col-span-2'>
                        {
                            cartItems.length > 0 ? cartItems.map(item => (
                                <div key={item._id}>
                                    <div className="bg-white flex gap-5 items-center shadow-md rounded-md p-5">
                                        <img src={item.pictureUrl} alt="" className="w-20 object-cover" />
                                        <h2 className="text-xl font-semibold mt-2 flex-1">{item.name}</h2>
                                        <div className='flex gap-2 text-accent mt-2 items-center'>
                                            <p className="font-semibold text-lg">${item.price} <span className='text-primary text-[13px]'>x{item.quantity}</span></p>
                                            <button className='p-2' onClick={() => removeFromCart(item._id)}>
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )) :
                                <div className='grid items-center place-items-center justify-center'>
                                    <img className='w-3/4 md:w-1/4' src="/images/emptycart.svg" alt="cart.svg" />
                                    <h1 className="text-2xl mt-5 lg:mt-0 font-semibold">No item found</h1>
                                </div>
                        }
                    </div>
                    <div>
                        <div className="flex gap-5 items-center shadow-md rounded-md p-5 mt-5">
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold mt-2">Subtotal</h2>
                                <p className="text-accent font-semibold mt-2">${totalPrice}</p>

                                <h2 className="text-xl font-semibold mt-2">Shipping</h2>
                                <p className="text-accent font-semibold mt-2">Free</p>

                                <h2 className="text-xl font-semibold mt-2">Total</h2>
                                <p className="text-accent font-semibold mt-2">${totalPrice}</p>
                                <button className="btns mt-5 w-full" onClick={removeAllItems}>
                                    Clear Cart
                                </button>
                                <button className="btns mt-2 w-full">
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart