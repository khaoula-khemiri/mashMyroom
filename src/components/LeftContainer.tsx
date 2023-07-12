import React from "react";
import { useSelector } from "react-redux";
import Draggable from "react-draggable";

function LeftContainer() {
  const total = useSelector((state) => state.item.total);
  const products = useSelector((state) => state.item.products);
  console.log(products);

  return (
    <div className="flex-1 flex flex-col gap-[20px] ">
      <div className="bg-[url('assets/empty-room.png')] h-[400px] w-full relative rounded-xl bg-cover bg-center bg-no-repeat ">
        {products.length > 0 &&
          products.map((product) => (
            <Draggable bounds="parent" defaultPosition={{ x: 0, y: 0 }}>
              <img className=" absolute cursor-move" src={product.item.url} />
            </Draggable>
          ))}
      </div>

      <div className=" bg-white p-[16px] rounded-xl shadow-md">
        <h1 className="font-semibold">order Summary</h1>
        <ul className="flex  flex-col gap-[16px] text-[#60695C] pb-5">
          <li className="flex justify-between ">
            <div> items</div>
            <div> ${total}</div>
          </li>
          <li className="flex justify-between">
            <div>Shipping</div>
            <div> $5849.37</div>
          </li>
          <li className="flex justify-between">
            <div>Estimated GST:</div>
            <div> $5849.37</div>
          </li>
          <li className="flex justify-between">
            <div>Gift Card</div>
            <div> $5849.37</div>
          </li>
        </ul>
        <hr />
        <div className="flex justify-between text-[#E5252C] font-medium py-[16px]">
          <div>Order Total:</div>
          <div> ${total}</div>
        </div>
        <hr />

        <button className="w-[100%] bg-[#1A1F16] hover:bg-[#2e2e31] text-white rounded-lg py-[5px] my-[16px]">
          Place your order
        </button>
      </div>
    </div>
  );
}

export default LeftContainer;
