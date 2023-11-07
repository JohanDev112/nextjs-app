'use client'
import { useSelector } from "react-redux";
import { Products, StateProps } from "../../type";
import { useEffect, useState } from "react";

const OrderDetails = () => {
  const { orderData } = useSelector((state: StateProps) => state?.shopping);

  const [totalAmount, setTotalAmount] = useState(0)
  useEffect(() =>{
    let amt = 0
    orderData?.order?.map((item:Products) => {
        amt += item.price * item.quantity
      return;
    })
    setTotalAmount(amt)
  }, [orderData.order])
  return (
  <div>
    <div>
        <p>Producto</p>
        <p>Cantidad</p>
        <p>Precio unitario</p>
        <p>Monto</p>
    </div>
  </div>
  )
};

export default OrderDetails;
