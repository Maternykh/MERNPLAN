import React from "react";
import { purpMap, useAppDispatch } from "../../Type";
import { Link } from "react-router-dom";
import {
  setDescPurps,
  setIdPurps,
  setIsCompletedPurps,
  setTitlePurps,
  setValuePurps,
} from "../../Redux/Slice/addPurps";

const PurpCart: React.FC<purpMap> = ({
  _id,
  title,
  isCompleted,
  desc,
  value,
}) => {
  const dispatch = useAppDispatch();
  const onCLickPurp = () => {
    dispatch(setIdPurps(_id));
    dispatch(setTitlePurps(title));
    dispatch(setDescPurps(desc));
    dispatch(setIsCompletedPurps(isCompleted));
    dispatch(setValuePurps(value));
  };
  return (
    <Link onClick={() => onCLickPurp()} to={`/checkfullpurps/${_id}`}>
      <div className=" bg-white rounded-2xl p-2 ">
        <div className=" font-bold">{title}</div>
        <div>{desc}</div>
        <div
          className={`${
            isCompleted ? " bg-green-400" : " bg-red-500"
          } flex justify-center rounded-full p-1`}
        >
          {isCompleted ? "Complete" : "Incomplite"}
        </div>
      </div>
    </Link>
  );
};

export default PurpCart;
