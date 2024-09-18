"use client";

import { HoverEffect } from "../ui/card-hover";
import tracks from "../../constants/tracks"; 

export function Tracks() {
  return (
    <>
    <section
      id="Tracks"
      className="py-14 md:py-[72px] flex flex-col justify-center items-center gap-10 relative lg:container lg:mx-auto lg:flex-col lg:gap-0 lg:p-28"
    >
    <div className="flex flex-col gap-3 items-center self-center">
        <h3 className="flex min-h-7 items-center justify-center gap-2 rounded-none bg-surface-secondary px-3.5 pb-px text-sm font-medium text-text-tertiary dark:bg-dark-surface-secondary dark:text-dark-text-tertiary md:text-base">
        Idea Theme
        </h3>
        <div className="flex max-w-[800px] flex-col justify-center gap-1 items-center self-center">
          <h4 className="text-pretty text-3xl font-medium md:text-4xl text-center">
          Tracks
          </h4>
        </div>
        <p className="max-w-screen-md text-pretty text-lg font-light text-text-tertiary dark:text-dark-text-tertiary md:text-xl text-center">
        </p>
      </div>
      <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={tracks} />
    </div>
    </section>
        
    </>
  );
}

export default Tracks;