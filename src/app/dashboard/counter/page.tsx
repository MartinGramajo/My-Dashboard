'use client'
import { useState } from "react";
// prc - para crear el component page
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Counter Page',
  description: 'Counter client side',
};


export default function CounterPage() {

  const [counter, setCounter] = useState(5);

  const incrementar = (numero: number = 1): void => {
    setCounter(counter + numero)
  }

  const decrementar = (numero: number = 1): void => {
    setCounter(counter - numero)
  }


  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>
        Productos en el carrito
      </span>
      <span className="text-9xl">
        {counter}
      </span>
      <div className="flex">
        <button className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2 "
          onClick={() => incrementar()}
        >+1</button>
        <button className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2 " onClick={() => decrementar()}>-1</button>
      </div>
    </div>
  );
}
