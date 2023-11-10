"use client";

import Image from "next/image";
import { ItemProps } from "../../type";
import { calculatePercentage } from "@/helpers";
import FormattedPrice from "./FormattedPrice";
import { IoIosStar } from "react-icons/io";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/shoppingSlice";

const ProductsData = ({ item }: ItemProps) => {
  const dispatch = useDispatch();

  const startArray = Array.from({ length: item?.rating }, (_, index) => (
    <span key={index} className="text-yellow-400">
      <IoIosStar />
    </span>
  ));

  return (
    //  <div className="w-full rounded-lg overflow-hidden">
    //    <div>
    //      <Link href={{ pathname: "/product", query: { _id: item?._id } }}>
    //        <div className="w-full h-96 group overflow-hidden relative">
    //          <Image
    //            src={item?.image}
    //            alt="imagen del producto"
    //            width={500}
    //            height={500}
    //            className="w-full h-full object-cover group-hover:scale-110 duration-200 rounded-t-lg"
    //          />
    //          {item?.isNew && (
    //            <span className="absolute top-4 right-2 font-medium text-xs py-1 px-3 rounded-full group-hover:bg-black group-hover:text-white border-[1px] border-black">
    //              New Arrival!
    //            </span>
    //          )}
    //        </div>
    //      </Link>
    //      <div className="border-[1px] border-black border-t-0 px-2 py-4 flex flex-col gap-y-2 rounded-b-lg">
    //        <p>{item?.title}</p>
    //        <div className="flex items-center justify-between">
    //          <div className=" text-white bg-red-600 py-1 px-4 rounded-full text-xs inline-block">
    //            <p>{calculatePercentage(item.price, item?.oldPrice)}% off</p>
    //          </div>
    //          <div className="flex items-center gap-x-2">
    //            <p className="text-slate-500 line-through text-sm">
    //              <FormattedPrice amount={item?.oldPrice} />
    //            </p>
    //            <p className="font-semibold">
    //              <FormattedPrice amount={item?.price} />
    //            </p>
    //          </div>
    //        </div>
    //        {/* Add to cart button */}
    //        <div className="flex items-center justify-between">
    //          <button
    //            onClick={() =>
    //              dispatch(addToCart(item)) &&
    //              toast.success(
    //                `¡${item?.title.substring(
    //                  0,
    //                  15
    //                )} se añadió correctamente al carrito! 😎`
    //              )
    //            }
    //            className="bg-slate-300 px-4 py-2 text-sm tracking-wide rounded-full text-black hover:bg-slate-600 hover:text-white duration-300"
    //          >
    //            Añade al carrito
    //          </button>
    //          {/* Star icons */}
    //          <div className="flex items-center gap-x-1">{startArray}</div>
    //        </div>
    //      </div>
    //    </div>
    //    <Toaster
    //    toastOptions={{
    //      duration: 9000
    //    }}
    //    />
    //  </div>


    // ==============================
     <div className="w-full rounded-lg overflow-hidden">
       <div>
         <Link href={{ pathname: "/product", query: { _id: item?._id } }}>
           <div className="w-full h-96 group overflow-hidden relative">
             <Image
               src={item?.image}
               alt="imagen del producto"
               width={500}
               height={500}
               className="object-cover w-full h-full hover:scale-110 duration-200"
             />
           </div>
         </Link>
         <div className="bg-black text-white w-full h-full flex flex-col gap-y-2 px-6 py-2">
           <p className="font-bold">{item?.title}</p>
           <div className="flex">{startArray}</div>
           <div>
             <div className="font-semibold">
               <FormattedPrice amount={item?.price} />
               <span className="flex justify-end">
                 <button
                   onClick={() => {
                     dispatch(addToCart(item)) &&
                       toast.success(
                         `${item?.title.substring(
                           0,
                           15
                         )} se añadió correctamente. 🤘🏻`
                       );
                   }}
                   className="px-6 py-2 bg-white text-black rounded-sm m-3"
                 >
                   Añadir al carrito
                 </button>
               </span>
             </div>
           </div>
         </div>
       </div>
       <Toaster />
     </div>
  );
};

export default ProductsData;
