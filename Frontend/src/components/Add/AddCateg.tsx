import React from "react";
import { RootState } from "../../Redux/store";
import { useAppDispatch, useAppSelector } from "../../Type";
import { addCategory, delCategory } from "../../Redux/Slice/addDaySlice";
import { FaDeleteLeft } from "react-icons/fa6";
import {
  removeCateg,
  setCateg,
  setIdCateg,
} from "../../Redux/Slice/categorySlice";
const AddCateg: React.FC = () => {
  const { color, category } = useAppSelector(
    (state: RootState) => state.addday
  );
  const { categ, id } = useAppSelector((state: RootState) => state.categ);
  const greenbg = color === "green" && "border-green-400 ";
  const orangebg = color === "orange" && "border-orange-400 ";
  const bluebg = color === "blue" && "border-blue-400 ";
  const redbg = color === "red" && "border-red-400 ";
  const indigobg = color === "indigo" && "border-indigo-400 ";
  const basebg = color === "base" && "border-gray-200 ";
  const dispatch = useAppDispatch();

  const onClickcateg = () => {
    dispatch(setIdCateg(Math.random() * 10));
    if (categ !== "") {
      dispatch(addCategory({ id, categ }));
    }
    dispatch(removeCateg());
  };
  return (
    <>
      <div>Category:</div>
      <div className=" flex flex-wrap">
        {category.map((cat, index) => (
          <div
            key={index}
            className={` border-2 mr-2 mb-2 p-2 ${greenbg} ${orangebg} ${bluebg} ${redbg} ${indigobg} ${basebg}  rounded-xl w-52 flex justify-between items-center`}
          >
            <div>{cat.categ}</div>
            <div
              onClick={() => dispatch(delCategory(cat.id))}
              className="  text-xl hover:scale-125 hover:cursor-pointer duration-200"
            >
              <FaDeleteLeft />
            </div>
          </div>
        ))}
      </div>
      <div className=" flex mb-2">
        <input
          value={categ}
          onChange={(e) => dispatch(setCateg(e.target.value))}
          placeholder="Enter category"
          type="text"
          className=" mr-2 p-2  bg-gray-200 border-none outline-none rounded-xl"
        />
        <div
          onClick={() => onClickcateg()}
          className=" hover:cursor-pointer bg-gray-200 px-3 py-2 rounded-xl"
        >
          Add
        </div>
      </div>
    </>
  );
};

export default AddCateg;
