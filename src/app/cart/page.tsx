"use client";
import React from "react";
import Container from "@/components/Container";
import { useDispatch, useSelector } from "react-redux";
import { StateProps } from "../../../type";
import CartItem from "@/components/CartItem";
import { resetCart } from "@/redux/shoppingSlice";
import PaymentForm from "@/components/PaymentForm";
import Link from "next/link";

const CartPage = () => {
  const { productData } = useSelector((state: StateProps) => state?.shopping);

  const dispatch = useDispatch();
  return (
    <Container>
      {
        productData.length > 0 ? 
        <Container>
          <h2 className="text-2xl font-semibold mb-2">Carrito</h2>
          <div className="flex flex-col gap-5">
            <CartItem />
            <div className="flex items-center justify-end">
              <button
                onClick={() => dispatch(resetCart())}
                className="bg-red-500 text-base font-semiboldv text-slate-100 py-2 px-6 hover:bg-red-700 hover:text-white duration-200"
              >
                Limpiar carrito
              </button>
            </div>
            {/* Payment Form */}
            <PaymentForm />
          </div>
        </Container> : 
        <div className="flex flex-col gap-y-6 items-center justify-center bg-gray-200 h-96 px-4
        ">
          <p className="border-[1px] border-black w-auto p-2 text-center">Tu carrito está vacío</p>
          <Link href={"/"}>
          <button className="bg-black text-white py-2 px-6 rounded-md duration-200">Regresa al menú</button>    
          </Link>
        </div>
      }
    </Container>
  );
};
export default CartPage;
