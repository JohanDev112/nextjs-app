"use client";

import Image from "next/image";
import { ItemProps } from "../../type";
import { calculatePercentage } from "@/helpers";
import FormattedPrice from "./FormattedPrice";
import { IoIosStar } from "react-icons/io";
import { productData } from "@/constanst/data";

const ProductsData = ({ item }: ItemProps) => {
  const product = productData.find((product) => product?._id === item?._id);
  if (!product) {
    return null;
  }

  const startArray = Array.from({ length: product?.rating }, (_, index) => (
    <span key={index} className="text-yellow-500">
      <IoIosStar />
    </span>
  ));

  return (
    <div className="w-full rounded-lg overflow-hidden">
      <div>
        <div className="w-full h-96 group overflow-hidden relative">
          <Image
            src={item?.image}
            alt="imagen del producto"
            width={500}
            height={500}
            className="w-full h-full object-scale-down group-hover:scale-110 duration-200 rounded-t-lg border-[1px] border-black"
          />
          {item?.isNew && (
            <span className="absolute top-4 right-2 font-medium text-xs py-1 px-3 rounded-full group-hover:bg-black group-hover:text-white border-[1px] border-black">
              New Arrival!
            </span>
          )}
        </div>
        <div className="border-[1px] border-black border-t-0 px-2 py-4 flex flex-col gap-y-2 rounded-b-lg">
          <p>{item?.title}</p>
          <div className="flex items-center justify-between">
            <div className=" text-white bg-red-600 py-1 px-4 rounded-full text-xs inline-block">
              <p>{calculatePercentage(item.price, item?.oldPrice)}% off</p>
            </div>
            <div className="flex items-center gap-x-2">
              <p className="text-slate-500 line-through text-sm">
                <FormattedPrice amount={item?.oldPrice} />
              </p>
              <p className="font-semibold">
                <FormattedPrice amount={item?.price} />
              </p>
            </div>
          </div>
          {/* Add to cart button */}
          <div className="flex items-center justify-between">
            <button className="bg-slate-300 px-4 py-2 text-sm tracking-wide rounded-full hover:bg-slate-900 hover:text-white duration-300">
              Añade al carrito
            </button>
            {/* Star icons */}
            <div className="flex items-center gap-x-1">{startArray}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsData;
