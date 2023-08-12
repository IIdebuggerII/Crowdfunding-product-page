import React from "react";

export default function Bookmarker() {
  return (
    <div className="justify-center flex">
      <img
        src="../public/logo-mastercraft.svg"
        alt=""
        className="absolute z-10"
      />
      <div className="top-6 absolute bg-white pt-14 rounded-xl border min-w-full justify-center flex flex-col">
        <div className="flex flex-col justify-center items-center">
          <p className="text-Black  text-2xl font-extrabold px-16 text-center">
            Mastercraft Bamboo Monitor Riser
          </p>
          <p className="text-center text-Gray px-8 pt-4">
            {" "}
            A beautifully & handcrafted monitor stand to reduce and eye strain.
          </p>
        </div>
        <div className="flex justify-around pt-8 pb-9">
          <button className="rounded-3xl bg-Cyan text-white font-bold p-4 w-9/12 lg:w-4/12 hover:bg-DarkCyan">
            Back this project
          </button>
          <button className="rounded-full flex items-center bg-gray-200">
            <img
              src="../../public/icon-bookmark.svg"
              className="rounded-full bg-orange-600"
              alt=""
            />
            <p className="hidden lg:inline text-Gray mx-3">Bookmark</p>
          </button>
        </div>
      </div>
    </div>
  );
}
