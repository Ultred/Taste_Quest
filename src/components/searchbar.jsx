import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [inputSearch, setInputSearch] = useState("");
  let navigate = useNavigate();
  const submitHandler = (e) => {
    navigate("/searched/" + inputSearch);
    e.preventDefault();
  };
  return (
    <form onSubmit={submitHandler} className="relative flex">
      <input
        type="text"
        placeholder="Search..."
        value={inputSearch}
        onChange={(e) => setInputSearch(e.target.value)}
        className="outline outline-2 outline-colormain rounded-md  md:w-[16rem] px-4 font-Serif h-11 my-auto w-full "
      />
      <BiSearch
        onClick={submitHandler}
        className="absolute text-2xl top-2/4 right-[14%] transform translate-x-full -translate-y-1/2 cursor-pointer text-colormain "
      />
    </form>
  );
}

export default SearchBar;
