import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import useCategories from "../hooks/useCategories";
import toast from "react-hot-toast";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter: string = searchParams.get("query") || "";
  const [value, setValue] = useState<string>(currentFilter);
  const { refetch } = useCategories(`query=${value}&number=6`);

  function handleClick() {
    if (value === "" && currentFilter === "") {
      toast("لطفا مقداری وارد کنید");
      return;
    }
    searchParams.set("query", value);
    setSearchParams(searchParams);
    refetch();
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    setValue(value);
  };

  return (
    <div className='w-auto relative'>
      <input
        value={value}
        onChange={handleChange}
        type='text'
        className='btnCartStyle w-[500px] h-16 border border-[#dfdfdf] p-4'
        placeholder='Search...'
      />
      <button
        onClick={handleClick}
        className='btnCartStyle w-40 h-16 bg-gray text-white absolute -right-24'>
        Search
      </button>
    </div>
  );
};

export default Search;
