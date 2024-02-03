import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

function Cart() {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? (
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">
          <div className="w-[100%] md:w-[60%] flex flex-col p-2">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index}></CartItem>
            ))}
          </div>

          <div className="w-[100%] md:w-[40%] mt-5 flex flex-col justify-between ml-4 gap-3 lg:h-[80vh] mb-10">
            <div className="flex flex-col gap-4">
              <div className="text-xl text-green-700 uppercase font-semibold">
                Your Cart
              </div>
              <div className="text-4xl text-green-700 uppercase font-semibold -mt-4">
                Summary
              </div>
              <p className="text-lg">
                <span className="font-semibold">
                  Total Items : {cart.length}
                </span>
              </p>
            </div>
            <div className="flex flex-col w-10/12">
              <p className="text-lg font-bold">
                <span className="text-gray-700 font-semibold">
                  Total Amount:
                </span>{" "}
                ${totalAmount}
              </p>
              <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-2 text-xl">
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-700 font-semibold text-xl mb-2">
            Your cart is empty!
          </h1>
          <Link to="/">
            <button className="uppercase bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;


