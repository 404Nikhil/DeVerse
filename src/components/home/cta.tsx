import React from "react";
import clsx from "clsx";
import styles from "./cta.module.css";

const CTA: React.FC = () => {
  return (
    <section className="py-14 md:py-[72px] flex flex-col items-center gap-10 relative container mx-auto px-6">
      <article className="relative flex flex-col items-center justify-center self-stretch overflow-hidden rounded-xl border border-border bg-surface-secondary p-6 dark:border-dark-border dark:bg-dark-surface-secondary">
        {/* Lines and bg  */}
        <div
          className={clsx(
            "absolute left-0 top-10 h-px w-full bg-gradient-to-l from-white/70 dark:to-transparent",
            styles.line
          )}
        />
        <div
          className={clsx(
            "absolute bottom-[12px] left-0 h-px w-full bg-gradient-to-l from-white/70 dark:to-transparent",
            styles.line
          )}
        />
        <div
          className={clsx(
            "absolute -bottom-24 left-0 h-px w-full bg-gradient-to-l from-white/70 dark:to-transparent",
            styles.line
          )}
        />
        <div className="absolute left-0 top-0 z-10 h-full w-full bg-surface-secondary blur-3xl filter dark:bg-dark-surface-secondary" />
        {/* -------- */}
        <div className="relative z-20 flex flex-col items-center gap-2 text-center">
          <h4 className="text-center text-3xl font-medium tracking-tighter text-text-primary dark:text-dark-text-primary sm:max-w-full sm:px-0 md:text-4xl">
            Enhance your team&apos;s productivity with De'Verse
          </h4>
          <p className="text-lg text-text-secondary dark:text-dark-text-secondary md:text-xl">
            Write in threads, focus, and collaborate without video calls.
          </p>
        </div>
        <div className="relative z-10 flex items-center gap-2 pt-8">
          <a
            className="gap-1 font-normal shrink-0 rounded-none ring-control focus-visible:ring-2 outline-none bg-accent-500 hover:bg-accent-600 text-textOnAccent-primary border-accent-600 inline-flex items-center justify-center px-3.5 text-sm h-8 md:px-5"
            href="/sign-up"
          >
            Register
          </a>
          <a
                className="gap-1 group font-normal shrink-0 rounded-none ring-control focus-visible:ring-2 outline-none outline-0 bg-surface-secondary text-text-primary border-border border dark:bg-dark-surface-secondary dark:text-dark-text-primary dark:border-dark-border hover:bg-surface-tertiary dark:hover:bg-dark-surface-tertiary inline-flex items-center justify-center px-3.5 text-sm h-8 md:px-5 !px-3.5"
                href="/sign-in"
                style={{ cursor: "pointer" }}
              >
                RuleBook
                <div className="relative w-4 h-4 flex items-center">
                  <svg
                    className="h-4 w-4 absolute transition-all group-hover:translate-x-1 group-hover:opacity-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z"
                    ></path>
                  </svg>
                  <svg
                    className="h-4 w-4 absolute opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.22 2.97a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06l2.97-2.97H3.75a.75.75 0 010-1.5h7.44L8.22 4.03a.75.75 0 010-1.06z"
                    ></path>
                  </svg>
                </div>
              </a>
        </div>
      </article>
    </section>
  );
};

export default CTA;
