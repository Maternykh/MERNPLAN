import React from "react";
import {
  setDescPurps,
  setIdPurps,
  setIsCompletedPurps,
  setTitlePurps,
  setValuePurps,
} from "../Redux/Slice/addPurps";
import { useAppDispatch, useAppSelector } from "../Type";
import { RootState } from "../Redux/store";
import { IoMdTrash } from "react-icons/io";
import { BiPencil } from "react-icons/bi";
import axios from "axios";
import { setLoading } from "../Redux/Slice/paramSlice";
import { useNavigate, useParams } from "react-router-dom";
import { setClearPurps } from "../Redux/Slice/addPurps";
import { Link } from "react-router-dom";
const FullPurp: React.FC = () => {
  const { id } = useParams();
  const { _id, title, value, isCompleted, desc } = useAppSelector(
    (state: RootState) => state.addpurp
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const Delete = () => {
    dispatch(setLoading(true));
    axios
      .delete(`https://fullstack-plans-app-mern.onrender.com/purp/${id}`)
      .then(() => {
        dispatch(setLoading(false));
        navigate("/");
        dispatch(setClearPurps());
      });
  };
  const setPutPurp = () => {
    dispatch(setIdPurps(_id));
    dispatch(setTitlePurps(title));
    dispatch(setDescPurps(desc));
    dispatch(setIsCompletedPurps(isCompleted));
    dispatch(setValuePurps(value));
  };
  return (
    <div className="xl:w-1/4 w-full">
      <div className=" bg-white rounded-xl p-2 mb-2">
        <div className=" font-bold text-xl">{title}</div>
        <div>{desc}</div>
        <div className="mb-2">{value}</div>
        <div
          className={`${
            isCompleted ? " bg-green-400" : " bg-red-500"
          } flex justify-center rounded-full p-1 `}
        >
          {isCompleted ? "Complete" : "Incomplite"}
        </div>
      </div>
      <div className=" flex">
        <Link
          to={`/putPurps/${_id}`}
          onClick={() => setPutPurp()}
          className=" mr-2 text-xl bg-white p-2 rounded-xl text-orange-500"
        >
          <BiPencil />
        </Link>
        <div
          onClick={() => Delete()}
          className=" text-xl bg-white p-2 rounded-xl text-red-500"
        >
          <IoMdTrash />
        </div>
      </div>
    </div>
  );
};

export default FullPurp;
