import React from "react";

export default function Price() {
  return (
    <div className="mt-7  border  items-center flex flex-col rounded-xl  md:flex-row md:justify-start lg:justify-between">
      <div className="flex flex-col items-center md:flex-col py-12 lg:mx-auto">
        <p className="text-Black font-extrabold px-16 text-5xl">$89,914</p>
        <p className="mt-4 text-Gray mb-6 md:mb-0">of 100,000 backed</p>
        <hr className="bg-black w-36 md:hidden" />
      </div>
      <hr className="hidden md:flex h-20 w-0.5 bg-slate-200 " />
      <div className="flex flex-col items-center md:flex-col py-12 lg:mx-auto">
        <p className="text-Black font-extrabold px-16 text-5xl">5,007</p>
        <p className="mt-4 text-Gray mb-6 md:mb-0">total backers</p>
        <hr className="bg-black w-36 md:hidden" />
      </div>
      <hr className="hidden md:flex h-20 w-0.5 bg-slate-200 " />
      <div className="flex flex-col items-center md:flex-col py-12 lg:mx-auto">
        <p className="text-Black font-extrabold px-16 text-5xl">56</p>
        <p className="mt-4 text-Gray mb-6 md:mb-0">days left</p>
        <hr className="bg-black w-36 md:hidden" />
      </div>
    </div>
  );
}
