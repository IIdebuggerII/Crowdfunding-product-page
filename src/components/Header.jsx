import React from "react";

export default function Header() {
  return (
    <>
      <menu>
        <div className="static">
          <img
            src="../public/image-hero-desktop.jpg"
            alt=""
            className="min-w-full "
          />

          <div className="absolute  min-w-full top-4 md:top-12  flex ">
            <div className="max-w-screen-xl		 flex flex-row-reverse  justify-between items-center  m-auto w-11/12">
              <div className="">
                <ul className="flex-row-reverse flex text-white ">
                  <li className="ml-6 hover:border-b">
                    <a href="">Get Started</a>
                  </li>
                  <li className="ml-6 hover:border-b">
                    <a href="">Discover</a>
                  </li>
                  <li className="hover:border-b">
                    <a href="">About</a>
                  </li>
                </ul>
              </div>
              <div>
                <img src="../public/logo.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </menu>
    </>
  );
}
