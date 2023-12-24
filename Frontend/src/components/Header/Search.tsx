import React from "react";
import { CiSearch } from "react-icons/ci";
import { useAppDispatch, useAppSelector } from "../../Type";
import { RootState } from "../../Redux/store";
import { setSearchValue } from "../../Redux/Slice/filterSlice";

const Search: React.FC = () => {
  const searchValue = useAppSelector(
    (state: RootState) => state.filter.searchValue
  );
  const dispatch = useAppDispatch();
  return (
    <div className=" relative">
      <CiSearch className=" text-gray-400 text-3xl absolute top-2 xl:top-3 left-2" />
      <input
        value={searchValue}
        onChange={(e) => dispatch(setSearchValue(e.target.value))}
        placeholder="Search here..."
        type="text"
        className=" h-full w-52 xl:w-72 pl-10 bg-gray-200 border-none rounded-xl xl:rounded-full p-3 outline-none"
      />
    </div>
  );
};

export default Search;
