import React from "react";
import { data } from "../data";
import { useSelector } from "react-redux";
import { addProduct } from "../redux/itemRedux";
import { useDispatch } from "react-redux";
function RightContainer() {
  const total = useSelector((state) => state.item.total);
  const dispatch = useDispatch();
  console.log(total);

  const handleClick = (item) => {
    dispatch(addProduct({ item, price: item.price }));
  };

  return (
    <div className="flex  flex-col gap-[16px] p-[10px]">
      <ul className="flex justify-around text-white  text-[15px]   font-normal px-[10px]">
        <li className="bg-[#168891] rounded-[35px] px-[20px] py-[8px] cursor-pointer ">
          All
        </li>
        <li className="bg-white text-black rounded-[35px] px-[20px] py-[8px] cursor-pointer">
          Living room
        </li>
        <li className="bg-white text-black rounded-[35px] px-[20px] py-[8px] cursor-pointer">
          Dining room
        </li>
      </ul>

      <div className="flex  flex-col gap-[16px] px-[10px] py-[5px] h-screen scrollbar  scrollbar-thin scrollbar-rounded-lg scrollbar-thumb-gray-600 scrollbar-RTL overflow-y-auto ">
        {data.map((item) => (
          <div
            className="flex gap-[5px] bg-white p-[15px] rounded-xl shadow-md cursor-pointer"
            onClick={(e) => handleClick(item)}
          >
            <div>
              <img
                className="rounded-xl w-32 h-20"
                src={item.url}
                alt="My Image"
              />
            </div>

            <div>
              <div className="text-[16px] font-normal">
                Florence Sofa-Balboa shadow
              </div>
              <div className="text-[12px]">84W x 38D x 35 H </div>
              <div className="flex justify-between text-[15px]">
                ${item.price}
                <img
                  className="rounded bg-[#168891] p-1"
                  src="/assets/Icon.svg"
                  alt="My Image"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RightContainer;
