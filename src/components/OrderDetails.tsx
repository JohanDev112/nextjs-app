"use client";
import { useDispatch, useSelector } from "react-redux";
import { Products, StateProps } from "../../type";
import { useEffect, useState } from "react";
import Image from "next/image";
import FormattedPrice from "./FormattedPrice";
import { resetOrder } from "@/redux/shoppingSlice";
import Link from "next/link";

const OrderDetails = () => {
  const dispatch = useDispatch();
  const { orderData } = useSelector((state: StateProps) => state?.shopping);

  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    let amt = 0;
    orderData?.order?.map((item: Products) => {
      amt += item.price * item.quantity;
      return;
    });
    setTotalAmount(amt);
  }, [orderData.order]);
  return (
    <div>
      {orderData.order?.length > 0 ? (
        <div>
          <div className="grid grid-cols-7 uppercase text-sm font-medium py-2 border-b-[1px] border-gray-300">
            <p className="col-span-4">Producto</p>
            <p className="flex items-center justify-center">Cantidad</p>
            <p className="flex items-center justify-center">Precio unitario</p>
            <p className="flex items-center justify-center">Monto</p>
          </div>
          <div className="py-2 flex flex-col justify-center gap-2">
            {orderData?.order?.map((item: Products) => (
              <div
                key={item?._id}
                className="py-2 border-b-[1px] border-gray-300 grid grid-cols-7 items-center bg-gray-200"
              >
                <div className="col-span-4 flex items-start gap-2 text-sm">
                  <Image
                    src={item?.image}
                    alt="Product Image"
                    width={500}
                    height={500}
                    className="w-16 h-18 object-cover"
                  />
                  <div>
                    <h3 className="text-base font-semibold mb-.5">
                      {item?.title}
                    </h3>
                    <p>{item?.description}</p>
                  </div>
                </div>
                <p className="flex items-center justify-center">
                  {item?.quantity}
                </p>
                <p className="flex items-center justify-center">
                  {" "}
                  <FormattedPrice amount={item?.price} />
                </p>
                <p className="flex items-center justify-center">
                  <FormattedPrice amount={item?.price * item.quantity} />
                </p>
              </div>
            ))}
          </div>
          <div className="text-lg font-medium py-2 border-b-[1px] border-b-gray-300">
            <p>Detalles de pago</p>
          </div>
          <p className="py-2">
            Pago total:{" "}
            <span className="text-xl font-semibold">
              <FormattedPrice amount={totalAmount} />
            </span>
          </p>

          
        </div>
      ) : (
        <div className="py-10 bg-gray-200 text-black text-2xl text-center">
          <p>No haz realizado pedidos 😫</p>
          <Link href={"/"}>
            <button className="bg-black text-slate-100 w-56 h-12 rounded-full text-base font-semibold hover:bg-green-500 duration-200 my-4">
              Continúa comprando
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
