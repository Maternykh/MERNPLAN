import React from "react";
import { useAppDispatch, useAppSelector } from "../Type";
import { RootState } from "../Redux/store";
import {
  setClearPurps,
  setDescPurps,
  setIsCompletedPurps,
  setTitlePurps,
  setValuePurps,
} from "../Redux/Slice/addPurps";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setLoading } from "../Redux/Slice/paramSlice";

const AddNote: React.FC = () => {
  const { title, value, isCompleted, desc } = useAppSelector(
    (state: RootState) => state.addpurp
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  //   const OnCLickSubmit = () => {
  //     const add = {
  //       title,
  //       desc,
  //       value,
  //       isCompleted,
  //     };
  //     dispatch(setLoading(true));
  //     axios.put(`http://localhost:8888/purp/${id}`, add).then(() => {
  //       dispatch(setLoading(false));
  //       dispatch(setClearPurps());
  //       navigate("/");
  //     });
  //   };
  const OnCLickSubmit = () => {
    const add = {
      title,
      value,
      isCompleted,
      desc,
    };
    dispatch(setLoading(true));
    axios
      .post(`https://fullstack-plans-app-mern.onrender.com/purp`, add)
      .then(() => {
        dispatch(setLoading(false));
        dispatch(setClearPurps());
        navigate("/");
      });
  };
  return (
    <div className="xl:w-1/4 w-full">
      <div className=" bg-white rounded-xl p-2 text-xl font-bold mb-1">
        Purpos constructor
      </div>
      <div className=" p-2 bg-white rounded-xl mb-1">
        <div>
          <input
            placeholder="Name purpose"
            onChange={(e) => dispatch(setTitlePurps(e.target.value))}
            className=" bg-gray-200 rounded-xl p-2 outline-none mb-2 w-full"
            type="text"
            value={title}
          />
        </div>
        <div>
          <input
            onChange={(e) => dispatch(setDescPurps(e.target.value))}
            placeholder="Description purpose"
            className=" bg-gray-200 rounded-xl p-2 outline-none mb-2 w-full"
            type="text"
            value={desc}
          />
        </div>
        <div>
          <textarea
            onChange={(e) => dispatch(setValuePurps(e.target.value))}
            value={value}
            placeholder="Value purpose"
            className=" bg-gray-200 rounded-xl p-2 outline-none h-40 w-full"
          ></textarea>
        </div>
        <div
          onClick={() => dispatch(setIsCompletedPurps(!isCompleted))}
          className={`${
            isCompleted ? " bg-green-400" : " bg-red-500"
          } text-white flex justify-center rounded-full p-1 hover:cursor-pointer`}
        >
          {isCompleted ? "Complete" : "Incomplite"}
        </div>
      </div>
      <div
        onClick={() => OnCLickSubmit()}
        className=" hover:cursor-pointer flex justify-center p-2 bg-white rounded-xl"
      >
        Add purp
      </div>
    </div>
  );
};

export default AddNote;
