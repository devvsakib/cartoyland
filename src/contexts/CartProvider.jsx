import React, { createContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

// Create the cart context
export const CartContext = createContext();

// Create a cart provider component
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Load cart items from localStorage on component mount
    useEffect(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
            try {
                const parsedCartItems = JSON.parse(storedCartItems);
                setCartItems(parsedCartItems);
            } catch (error) {
                setCartItems([]);
            }
        } else {
            localStorage.setItem('cartItems', JSON.stringify([]));
        }
    }, []);

    // Update cart items in localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    // Add an item to the cart
    const addToCart = (item) => {
        const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

        if (existingItem) {
            const updatedItems = cartItems.map((cartItem) =>
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            );
            toast.success('Item added to cart');
            setCartItems(updatedItems);
        } else {
            toast.success('Item added to cart');
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    };

    // Remove an item from the cart
    const removeFromCart = (itemId) => {
        const updatedItems = cartItems.filter((cartItem) => cartItem._id !== itemId);
        toast.success('Item removed from cart');
        setCartItems(updatedItems);
    };

    // Clear the cart
    const clearCart = () => {
        toast.success('Cart cleared');
        setCartItems([]);
    };

    //   Total quantity of items in the cart
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    //  Total price of items in the cart
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

    // Provide the cart context value to the children
    return (
        <CartContext.Provider value={{ cartItems, totalItems, totalPrice, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
