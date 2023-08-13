import React from "react";

export default function Price() {
  return (
    <div className="mt-7  border  items-center flex flex-col rounded-xl  ">
      <div className="flex flex-col items-center md:flex-row py-6">
        <p className="text-Black font-extrabold px-16 text-5xl">$89,914</p>
        <p className="mt-4 text-Gray mb-6">of 100,000 backed</p>
        <hr className="bg-black w-36" />
      </div>
      <div className="flex flex-col items-center md:flex-row py-6">
        <p className="text-Black font-extrabold px-16 text-5xl">5,007</p>
        <p className="mt-4 text-Gray mb-6">total backers</p>
        <hr className="bg-black w-36" />
      </div>
      <div className="flex flex-col items-center md:flex-row py-6">
        <p className="text-Black font-extrabold px-16 text-5xl">56</p>
        <p className="mt-4 text-Gray mb-6">days left</p>
        <hr className="bg-black w-36" />
      </div>
    </div>
  );
}
