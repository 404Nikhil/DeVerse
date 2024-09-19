import React from "react";

const prizeData = [
  {
    id: 1,
    amount: "Rs. 6k",
    description: "description",
    label: "Second Winner!",
    color: "#C0C0C0",
  },
  {
    id: 2,
    amount: "Rs. 8k",
    description: "description",
    label: "First Winner!",
    color: "#FFD700",
  },
  {
    id: 3,
    amount: "Rs. 3k",
    description: "description",
    label: "Third Winner!",
    color: "#CD7F32",
  },
];

const Prizes: React.FC = () => {
  return (
    <section
      id="Prizes"
      className="py-7 md:py-[72px] flex flex-col items-center gap-10 relative container mx-auto px-6 xl:max-w-screen-xl"
    >
      <div className="flex flex-col gap-3 items-center self-center">
        <h3 className="flex min-h-7 items-center justify-center gap-2 rounded-none bg-surface-secondary px-3.5 pb-px text-sm font-medium text-text-tertiary dark:bg-dark-surface-secondary dark:text-dark-text-tertiary md:text-base">
          Money Stuff
        </h3>
        <div className="flex max-w-[800px] flex-col justify-center gap-1 items-center self-center">
          <h4
            className="text-pretty text-3xl font-medium md:text-4xl text-center"
            title="Prizes"
          >
            Prizes
          </h4>
        </div>
      </div>
      <p className="max-w-screen-md text-pretty text-lg font-[500] text-text-tertiary dark:text-dark-text-tertiary md:text-xl text-center">
        TEs Category
      </p>
      <div className="flex flex-col gap-5 self-stretch lg:flex-row">
        {prizeData.map((prize) => (
          <article
            key={prize.id}
            className="relative flex flex-1 flex-col overflow-hidden rounded-2xl border border-border dark:border-dark-border"
          >
            <header className="flex flex-col gap-4 px-8 pb-0 pt-10">
              {prize.label && (
                <span
                  style={{ color: prize.color }}
                  className="bg-primary absolute left-1/2 top-4 -translate-x-1/2 text-center text-sm font-light text-accent-500 lg:text-base"
                >
                  {prize.label}
                </span>
              )}
              <span className="text-center text-3xl font-medium lg:text-4xl">
                {prize.amount}
              </span>
              <div className="flex flex-col">
                <h5 className="text-center text-lg font-[400] text-text-tertiary lg:text-xl">
                  {prize.description}
                </h5>
              </div>
            </header>
            <div className="flex flex-1 flex-col gap-6 p-6 !pb-12 lg:p-8"></div>
            <footer className="absolute bottom-0 flex w-full items-center self-stretch px-8 py-8">
              <svg
                fill="none"
                viewBox="0 0 312 175"
                xmlns="http://www.w3.org/2000/svg"
                className="pointer-events-none absolute left-0 top-0 h-full w-full origin-bottom scale-[2.0] text-accent-500"
              >
                <g filter="url(#filter0_f_6956_27669)">
                  <path
                    d="M-41 398C-41 371.998 -35.9174 346.251 -26.0424 322.229C-16.1673 298.206 -1.69321 276.379 16.5535 257.993C34.8002 239.607 56.4622 225.022 80.3027 215.072C104.143 205.121 129.695 200 155.5 200C181.305 200 206.857 205.121 230.697 215.072C254.538 225.022 276.2 239.607 294.446 257.993C312.693 276.379 327.167 298.206 337.042 322.229C346.917 346.251 352 371.998 352 398L-41 398Z"
                    fill={prize.color}
                  ></path>
                </g>
                <defs>
                  <filter
                    color-interpolation-filters="sRGB"
                    filterUnits="userSpaceOnUse"
                    height="598"
                    id="filter0_f_6956_27669"
                    width="793"
                    x="-241"
                    y="0"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      mode="normal"
                      result="shape"
                    ></feBlend>
                    <feGaussianBlur
                      result="effect1_foregroundBlur_6956_27669"
                      stdDeviation="100"
                    ></feGaussianBlur>
                  </filter>
                </defs>
              </svg>
            </footer>
          </article>
        ))}
      </div>
      <p className="max-w-screen-md text-pretty font-[500] text-lg text-text-tertiary dark:text-dark-text-tertiary md:text-xl text-center">
        SEs Category
      </p>
      <div className="flex flex-col gap-5 self-stretch lg:flex-row">
        {prizeData.map((prize) => (
          <article
            key={prize.id}
            className="relative flex flex-1 flex-col overflow-hidden rounded-2xl border border-border dark:border-dark-border"
          >
            <header className="flex flex-col gap-4 px-8 pb-0 pt-10">
              {prize.label && (
                <span
                  style={{ color: prize.color }}
                  className="bg-primary absolute left-1/2 top-4 -translate-x-1/2 text-center text-sm font-light text-accent-500 lg:text-base"
                >
                  {prize.label}
                </span>
              )}
              <span className="text-center text-3xl font-medium lg:text-4xl">
                {prize.amount}
              </span>
              <div className="flex flex-col">
                <h5 className="text-center text-lg font-[400] text-text-tertiary lg:text-xl">
                  {prize.description}
                </h5>
              </div>
            </header>
            <div className="flex flex-1 flex-col gap-6 p-6 !pb-12 lg:p-8"></div>
            <footer className="absolute bottom-0 flex w-full items-center self-stretch px-8 py-8">
              <svg
                fill="none"
                viewBox="0 0 312 175"
                xmlns="http://www.w3.org/2000/svg"
                className="pointer-events-none absolute left-0 top-0 h-full w-full origin-bottom scale-[2.0] text-accent-500"
              >
                <g filter="url(#filter0_f_6956_27669)">
                  <path
                    d="M-41 398C-41 371.998 -35.9174 346.251 -26.0424 322.229C-16.1673 298.206 -1.69321 276.379 16.5535 257.993C34.8002 239.607 56.4622 225.022 80.3027 215.072C104.143 205.121 129.695 200 155.5 200C181.305 200 206.857 205.121 230.697 215.072C254.538 225.022 276.2 239.607 294.446 257.993C312.693 276.379 327.167 298.206 337.042 322.229C346.917 346.251 352 371.998 352 398L-41 398Z"
                    fill={prize.color}
                  ></path>
                </g>
                <defs>
                  <filter
                    color-interpolation-filters="sRGB"
                    filterUnits="userSpaceOnUse"
                    height="598"
                    id="filter0_f_6956_27669"
                    width="793"
                    x="-241"
                    y="0"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      mode="normal"
                      result="shape"
                    ></feBlend>
                    <feGaussianBlur
                      result="effect1_foregroundBlur_6956_27669"
                      stdDeviation="100"
                    ></feGaussianBlur>
                  </filter>
                </defs>
              </svg>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Prizes;
