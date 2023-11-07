"use client";
import Image from "next/image";
import FormattedPrice from "./FormattedPrice";
import { IoMdCart } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/shoppingSlice";
import toast, { Toaster } from "react-hot-toast";

const SingleProduct = ({ product }: any) => {
  const dispatch = useDispatch();
  return (
    <div className="grid lg:grid-cols-2 gap-5 bg-black p-4 rounded-3xl text-white">
      <div>
        <Image
          src={product?.image}
          alt="Product image"
          width={500}
          height={500}
          className="w-full max-h-[700px] object-cover rounded-lg"
        />
      </div>
      {/* título del producto y sus detalles */}
      <div className="flex flex-col justify-center gap-y-10">
        <div>
          <p className="text-3xl font-semibold">{product?.title}</p>
          <p className="text-xl font-semibold">
            <FormattedPrice amount={product?.price} />
          </p>
        </div>
        <p className="text-lightText">{product?.description}</p>
        <div className="text-sm text-lightText flex justify-evenly text-center">
          <span>
            SKU: <span>{product?._id}</span>
          </span>{" "}
          <span>
            Categoría: <span>{product?.category}</span>
          </span>
        </div>
        <div
          onClick={() =>
            dispatch(addToCart(product)) &&
            toast.success(
              `¡${product?.title.substring(
                0,
                15
              )} se añadió correctamente al carrito! 😎`
            )
          }
          className="flex items-center cursor-pointer group"
        >
          <span className="text-black bg-white text-xl w-12 flex items-center justify-center group group-hover:bg-slate-400 duration-300 py-3 rounded-l-full">
            <IoMdCart />
          </span>
          <button className="bg-white text-darkText text-sm px-4 py-3   uppercase border-r-[1px] border-r-gray rounded-r-full">
            Añadir al carrito
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default SingleProduct;
