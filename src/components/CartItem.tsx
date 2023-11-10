import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { Products, StateProps } from "../../type";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
} from "@/redux/shoppingSlice";
import FormattedPrice from "./FormattedPrice";

const CartItem = () => {
  const { productData } = useSelector((state: StateProps) => state?.shopping);

  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-y-2">
      <div className="hidden lg:inline-flex items-center justify-between font-semibold bg-gray-200 p-2">
        <p className="w-1/4">Producto</p>
        <p className="w-1/4 flex items-center justify-between">Descripción</p>
        <p className="w-1/4 flex items-center justify-evenly">Cantidad</p>
        <p className="w-1/4 flex items-center justify-end">Subtotal</p>
      </div>

      {/* Generate the product */}
      <div className="flex flex-col gap-y-2">
        {productData?.map((item: Products) => (
          <div
            key={item._id}
            className="w-full bg-gray-300 p-4 flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center gap-x-3">
              <span
                onClick={() => dispatch(deleteProduct(item._id))}
                className="text-lg hover:text-red-600 duration-200 cursor-pointer"
              >
                <AiOutlineClose />
              </span>
              <Image
                src={item?.image}
                width={500}
                height={500}
                alt="Product image"
                className="w-20 h-20 object-cover"
                loading="lazy"
              />
            </div>

            {/* Product's name and description */}
            <div className="w-1/4 md:flex-row">
              <h3 className="font-semibold">{item?.title}</h3>
              <p className="text-sm">{item?.description}</p>
            </div>

            {/* Quantity */}
            <div className="w-auto flex items-center justify-center gap-x-1 ml-32 border-[1px] border-black py-2 px-4">
              <p>Cantidad</p>
              <div className="flex items-center text-lg w-20 justify-evenly">
                <span
                  onClick={() => dispatch(decreaseQuantity(item))}
                  className="cursor-pointer"
                >
                  <FiChevronLeft />
                </span>
                <span>{item?.quantity}</span>
                <span
                  onClick={() => dispatch(increaseQuantity(item))}
                  className="cursor-pointer"
                >
                  <FiChevronRight />
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="w-1/4 flex items-end justify-start md:justify-end">
              <p className="text-lg font-semibold">
                <FormattedPrice amount={item.price * item.quantity} />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItem;
