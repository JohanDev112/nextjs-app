import React from "react";
import Container from "@/components/Container";
import Link from "next/link";

const SuccessPage = () => {
  return (
    <Container className="flex items-center justify-center py-20">
      <div className="min-h-[400px] flex flex-col items-center justify-center gap-y-5">
        <h2 className="text-4xl font-bold">Tu pedido ha sido creado. 😎</h2>
        <p>Revisa tus pedidos o continúa navegando</p>
        <div className="flex items-center gap-x-5">
          <Link href={"/order"}>
            <button className="bg-black text-slate-100 w-44 h-12 rounded-full text-base font-semibold hover:bg-green-500 duration-200">
              Ver pedidos
            </button>
          </Link>
          <Link href={"/"}>
            <button className="bg-black text-slate-100 w-56 h-12 rounded-full text-base font-semibold hover:bg-green-500 duration-200">
              Continúa comprando
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default SuccessPage;
