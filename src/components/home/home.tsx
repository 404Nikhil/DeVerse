import { GitCommitIcon } from "lucide-react";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <div
        id="Home"
        className="relative min-h-[calc(630px-var(--header-height))] overflow-hidden pb-10"
      >
        <div className="absolute left-0 top-0 z-0 grid h-full w-full grid-cols-[clamp(28px,10vw,120px)_auto_clamp(28px,10vw,120px)] border-b border-border dark:border-dark-border">
          <div className="col-span-1 flex h-full items-center justify-center"></div>
          <div className="col-span-1 flex h-full items-center justify-center border-x border-border dark:border-dark-border"></div>
          <div className="col-span-1 flex h-full items-center justify-center"></div>
        </div>
        <figure className="pointer-events-none absolute -bottom-[70%] left-1/2 z-0 block aspect-square w-[520px] -translate-x-1/2 rounded-none bg-accent-500/40 blur-[200px]"></figure>
        <figure className="pointer-events-none absolute left-[4vw] top-[64px] z-20 hidden aspect-square w-[32vw] rounded-none bg-surface-primary opacity-50 blur-[100px] dark:bg-dark-surface-primary md:block"></figure>
        <figure className="pointer-events-none absolute bottom-[-50px] right-[7vw] z-20 hidden aspect-square w-[30vw] rounded-none bg-surface-primary opacity-50 blur-[100px] dark:bg-dark-surface-primary md:block"></figure>
        <div className="relative z-10 flex flex-col divide-y divide-border pt-[35px] dark:divide-dark-border">
          <div className="flex flex-col items-center justify-end">
            <div className="flex items-center gap-2 !border !border-b-0 border-border px-4 py-2 dark:border-dark-border">
              <div className="flex -space-x-3 rtl:space-x-reverse">
                <GitCommitIcon size={16} />
              </div>
              <p className="text-sm tracking-tight text-text-tertiary dark:text-dark-text-tertiary">
                Collaborate, Contribute, Create
              </p>
            </div>
          </div>
          <div>
            <div className="mx-auto flex min-h-[288px] max-w-[80vw] shrink-0 flex-col items-center justify-center gap-2 px-2 py-4 sm:px-16 lg:px-24">
              <h1 className="max-w-screen-lg text-pretty text-center text-[clamp(32px,7vw,64px)] font-medium leading-none tracking-[-1.44px] text-text-primary dark:text-dark-text-primary md:tracking-[-2.16px]">
                De&apos;Verse
              </h1>
              <h2 className="text-md max-w-2xl text-pretty text-center text-text-tertiary dark:text-dark-text-tertiary md:text-lg">
                AIT OSS Club presents{" "}
                <span className="font-[500]">De&apos;Verse</span> &ndash; an
                exclusive event for AIT students to learn valuable tech skills
                from expert mentors. Win prizes and goodies worth over{" "}
                <span className="font-[500]">₹40,000.</span> Don&apos;t miss
                this chance to upskill and excel!
              </h2>
            </div>
          </div>
          <div className="flex items-start justify-center px-8 sm:px-24">
            <div className="flex w-full max-w-[80vw] py-4 gap-4 flex-col items-center justify-start md:!max-w-[392px]">
              <div className="flex flex-col justify-center items-center">
                <h4 className="text-md max-w-2xl text-pretty text-center text-text-tertiary dark:text-dark-text-tertiary md:text-lg">
                  Registration ends in
                </h4>
                <h1 className="text-3xl tracking-wide"> 10:19:12:03</h1>
              </div>
              <a
                className="gap-1 font-normal shrink-0 ring-control focus-visible:ring-2 outline-none outline-0 bg-accent-500 hover:bg-accent-600 text-textOnAccent-primary border-accent-600 px-3.5 text-sm md:text-xl md:px-5 !h-14 flex-col items-center justify-center rounded-none flex w-full"
                href="/sign-up"
                style={{ cursor: "pointer" }}
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
