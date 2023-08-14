import React from "react";
import Card from "./Card";

export default function AboutProject() {
  return (
    <>
      <div className="border rounded-lg py-6 px-16 mt-7">
        <p className="text-Black font-extrabold text-2xl mb-12">
          About this project
        </p>
        <p className="text-Gray">
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand .{" "}
        </p>
        <p className="text-Gray mt-8">
          Featuring artisan craftsmanship , the simplicity of design creates
          extra desk space below your computer to allow notepads,pens,and USB
          sticks to be stored under the stand.
        </p>
        <Card
          standName="bambo Stand"
          pledge="$23"
          pladgeInfo="Ut qui voluptate incididunt dolore sint nostrud officia minim proident officia enim pariatur est proident. Irure amet magna amet esse cupidatat sit ad tempor aute aliqua in enim veniam tempor. Ea est sint pariatur officia ipsum. Commodo sunt dolor ex sunt sit veniam minim laboris occaecat minim. Sunt labore excepteur mollit id aliquip consequat anim ea. Duis in pariatur velit Lorem magna minim sit"
          leftDays="420"
        />
        <Card
          standName="bambo2"
          pledge="$25"
          pladgeInfo="312321Ut qui voluptate incididunt dolore sint nostrud officia minim proident officia enim pariatur est proident. Irure amet magna amet esse cupidatat sit ad tempor aute aliqua in enim veniam tempor. Ea est sint pariatur officia ipsum. Commodo sunt dolor ex sunt sit veniam minim laboris occaecat minim. Sunt labore excepteur mollit id aliquip consequat anim ea. Duis in pariatur velit Lorem magna minim sit"
          leftDays="82"
        />
      </div>
    </>
  );
}
