import React, { useContext } from 'react';
import { Contextstore } from './Contextapi';
import { FaTrash } from 'react-icons/fa';

const Cartproduct = () => {
  const { cartitems, deletecart, addtocart } = useContext(Contextstore);

  // Calculate subtotal
  const subtotal = cartitems.reduce((total, item) => total + item.price * item.quantity, 0);
  const delivery = cartitems.length > 0 ? 200 : 0;
  const total = subtotal + delivery;

  return (
    <div>
      <h1 className="ps-[70px] text-[30px] font-bold">Your Products</h1>

      <div className="max-w-[1320px] mx-auto flex justify-evenly mt-[30px] gap-4 flex-wrap">
        {/* Cart Items */}
        <div className="w-[600px] space-y-4">
          {cartitems.length === 0 ? (
            <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
          ) : (
            cartitems.map(item => (
              <div
                key={item.id}
                className="min-h-[180px] shadow-lg rounded-[20px] border-2 flex items-center px-4 py-3"
              >
                <img
                  className="w-[90px] h-[90px] object-cover rounded-md"
                  src={item.image}
                  alt={item.title}
                />
                <div className="flex-1 px-4 space-y-1">
                  <p className="font-semibold text-lg">{item.title}</p>
                  <p className="text-gray-700">Category: {item.category}</p>
                  <p className="text-gray-700">Price: $ {item.price}</p>
                </div>

                <div className="flex flex-col items-center space-y-2">
                  <FaTrash
                    className="text-red-600 text-xl cursor-pointer"
                    onClick={() => deletecart(item.id)}
                  />
                  <div className="flex items-center gap-2">
                    <button
                      className="bg-gray-200 px-2 rounded-full"
                      onClick={() =>
                        item.quantity > 1
                          ? deletecart(item.id) || addtocart({ ...item, quantity: item.quantity - 1 })
                          : deletecart(item.id)
                      }
                    >
                      -
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      className="bg-gray-200 px-2 rounded-full"
                      onClick={() => addtocart(item)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Billing Summary Box */}
        <div className="w-[500px] h-[220px] shadow-lg rounded-[20px] border-2 p-4">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between text-gray-700">
            <p>Subtotal</p>
            <p>$ {subtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between text-gray-700">
            <p>Delivery</p>
            <p>$ {delivery}</p>
          </div>
          <div className="flex justify-between font-bold mt-2">
            <p>Total</p>
            <p>$ {total.toFixed(2)}</p>
          </div>
          <button className="w-full mt-4 bg-black text-white py-2 rounded-full">Pay Now</button>
        </div>
      </div>
    </div>
  );
};

export default Cartproduct;
