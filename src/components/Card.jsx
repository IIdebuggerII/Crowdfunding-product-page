import React from "react";

export default function Card(props) {
  return (
    <>
      <div className="border-2 rounded-md py-5 px-5 mt-8">
        <div className="flex flex-col md:flex-row md:justify-between">
          <h1 className="text-lg font-bold">{props.standName}</h1>
          <h2 className="text-Cyan font-medium">
            Pledge {props.pledge} or more
          </h2>
        </div>
        <h3 className="my-6 text-Gray">{props.pladgeInfo} </h3>
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
          <p className="font-bold text-2xl">
            {props.leftDays}
            <span className="text-Gray ml-2 font-normal text-lg">left</span>
          </p>{" "}
          <button className="bg-Cyan hover:bg-DarkCyan text-white text-sm font-medium rounded-3xl px-9 py-3 mt-6 w-7/12 md:w-3/12">
            Select Reward
          </button>
        </div>
      </div>
    </>
  );
}
