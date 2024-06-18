import React, { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../Hooks/useGif";

const Tag = () => {
  const [tag, setTag] = useState("tom");
  const { loading, gif, fetchData } = useGif(tag);
  return (
    <>
      <div className="flex flex-col items-center bg-blue-400 md:w-1/2 w-11/12 rounded-lg border-2 border-gray-600 gap-y-5 mt-[15px] mx-auto py-5">
        <h1 className="uppercase font-bold text-2xl underline ">
          random {tag} gif
        </h1>
        <div>
          {loading ? <Spinner /> : <img src={gif} alt="gif" width="450" />}
        </div>
        <div className="flex flex-col items-center gap-y-3 w-full">
          <input
            type="text"
            value={tag}
            onChange={(event) => setTag(event.target.value)}
            className="uppercase bg-[#F0F0F0] w-9/12 rounded-lg font-normal py-[5px] text-sm text-center ring-1 focus:ring-4 focus:outline-none"
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                setTag(event.target.value);
                fetchData(tag);
              }
            }}
          />
        </div>
        <button
          className="uppercase bg-[#F0F0F0] w-10/12 rounded-lg font-normal py-2 text-xl"
          onClick={() => fetchData(tag)}
        >
          Generate
        </button>
      </div>
    </>
  );
};

export default Tag;
