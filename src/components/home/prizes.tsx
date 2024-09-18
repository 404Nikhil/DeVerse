import React from "react";

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
            title="Simple, fair pricing for your team"
          >
            Prizes
          </h4>
        </div>
      </div>
      <p className="max-w-screen-md text-pretty text-lg font-light text-text-tertiary dark:text-dark-text-tertiary md:text-xl text-center">
          TEs
        </p>
      <div className="flex flex-col gap-5 self-stretch lg:flex-row">
      <article className="relative block lg:hidden flex-1 flex-col overflow-hidden rounded-2xl border border-border dark:border-dark-border">
          <header className="flex flex-col gap-4 px-8 pb-0 pt-10">
            <span className="bg-primary absolute left-1/2 top-4 -translate-x-1/2 text-center text-xs font-medium text-accent-500 lg:text-sm">
              Winner Winner!
            </span>
            <span className="text-center text-3xl font-medium lg:text-4xl">
            Rs. 8k
            </span>
            <div className="flex flex-col">
              <h5 className="text-center text-lg font-medium lg:text-xl">
              </h5>
              <p className="text-center text-sm text-text-tertiary dark:text-dark-text-tertiary lg:text-base">
              </p>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-6 p-6  lg:p-8">
            {/* <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-text-secondary dark:text-dark-text-secondary lg:text-base">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-0.5 size-4 shrink-0 lg:size-5"
                >
                  <path
                    d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
                <span></span>
              </li>
            </ul> */}
          </div>
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
                  fill="#FFD700"
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
        <article className="relative flex flex-1 flex-col overflow-hidden rounded-2xl border border-border dark:border-dark-border">
          <header className="flex flex-col gap-4 px-8 pb-0 pt-10">
            <span className="text-center text-3xl font-medium lg:text-4xl">
            Rs. 6k
            </span>
            <div className="flex flex-col">
              <h5 className="text-center text-lg font-medium lg:text-xl">
              </h5>
              <p className="text-center text-sm text-text-tertiary dark:text-dark-text-tertiary lg:text-base">
              </p>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-6 p-6 !pb-12 lg:p-8">
            {/* <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-text-secondary dark:text-dark-text-secondary lg:text-base">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-0.5 size-4 shrink-0 lg:size-5"
                >
                  <path
                    d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
                <span></span>
              </li>
            </ul> */}
          </div>
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
                  fill="#C0C0C0"
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

        <article className="relative hidden lg:block flex-1 flex-col overflow-hidden rounded-2xl border border-border dark:border-dark-border">
          <header className="flex flex-col gap-4 px-8 pb-0 pt-10">
            <span className="bg-primary absolute left-1/2 top-4 -translate-x-1/2 text-center text-xs font-medium text-accent-500 lg:text-sm">
              Winner Winner!
            </span>
            <span className="text-center text-3xl font-medium lg:text-4xl">
            Rs. 8k
            </span>
            <div className="flex flex-col">
              <h5 className="text-center text-lg font-medium lg:text-xl">
              </h5>
              <p className="text-center text-sm text-text-tertiary dark:text-dark-text-tertiary lg:text-base">
              </p>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-6 p-6  lg:p-8">
            {/* <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-text-secondary dark:text-dark-text-secondary lg:text-base">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-0.5 size-4 shrink-0 lg:size-5"
                >
                  <path
                    d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
                <span></span>
              </li>
            </ul> */}
          </div>
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
                  fill="#FFD700"
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
        <article className="relative flex flex-1 flex-col overflow-hidden rounded-2xl border border-border dark:border-dark-border">
          <header className="flex flex-col gap-4 px-8 pb-0 pt-10">
            <span className="text-center text-3xl font-medium lg:text-4xl">
            Rs. 3k
            </span>
            <div className="flex flex-col">
              <h5 className="text-center text-lg font-medium lg:text-xl">
              </h5>
              <p className="text-center text-sm text-text-tertiary dark:text-dark-text-tertiary lg:text-base">
              </p>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-6 p-6 !pb-12 lg:p-8">
            {/* <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-text-secondary dark:text-dark-text-secondary lg:text-base">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-0.5 size-4 shrink-0 lg:size-5"
                >
                  <path
                    d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
                <span></span>
              </li>
            </ul> */}
          </div>
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
                  fill="#CD7F32"
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
      </div>

      <p className="max-w-screen-md text-pretty text-lg font-light text-text-tertiary dark:text-dark-text-tertiary md:text-xl text-center">
          SEs
        </p>
      <div className="flex flex-col gap-5 self-stretch lg:flex-row">
      <article className="relative block lg:hidden flex-1 flex-col overflow-hidden rounded-2xl border border-border dark:border-dark-border">
          <header className="flex flex-col gap-4 px-8 pb-0 pt-10">
            <span className="bg-primary absolute left-1/2 top-4 -translate-x-1/2 text-center text-xs font-medium text-accent-500 lg:text-sm">
              Winner Winner!
            </span>
            <span className="text-center text-3xl font-medium lg:text-4xl">
            Rs. 8k
            </span>
            <div className="flex flex-col">
              <h5 className="text-center text-lg font-medium lg:text-xl">
              </h5>
              <p className="text-center text-sm text-text-tertiary dark:text-dark-text-tertiary lg:text-base">
              </p>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-6 p-6  lg:p-8">
            {/* <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-text-secondary dark:text-dark-text-secondary lg:text-base">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-0.5 size-4 shrink-0 lg:size-5"
                >
                  <path
                    d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
                <span></span>
              </li>
            </ul> */}
          </div>
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
                  fill="#FFD700"
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
        <article className="relative flex flex-1 flex-col overflow-hidden rounded-2xl border border-border dark:border-dark-border">
          <header className="flex flex-col gap-4 px-8 pb-0 pt-10">
            <span className="text-center text-3xl font-medium lg:text-4xl">
            Rs. 6k
            </span>
            <div className="flex flex-col">
              <h5 className="text-center text-lg font-medium lg:text-xl">
              </h5>
              <p className="text-center text-sm text-text-tertiary dark:text-dark-text-tertiary lg:text-base">
              </p>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-6 p-6 !pb-12 lg:p-8">
            {/* <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-text-secondary dark:text-dark-text-secondary lg:text-base">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-0.5 size-4 shrink-0 lg:size-5"
                >
                  <path
                    d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
                <span></span>
              </li>
            </ul> */}
          </div>
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
                  fill="#C0C0C0"
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

        <article className="relative hidden lg:block flex-1 flex-col overflow-hidden rounded-2xl border border-border dark:border-dark-border">
          <header className="flex flex-col gap-4 px-8 pb-0 pt-10">
            <span className="bg-primary absolute left-1/2 top-4 -translate-x-1/2 text-center text-xs font-medium text-accent-500 lg:text-sm">
              Winner Winner!
            </span>
            <span className="text-center text-3xl font-medium lg:text-4xl">
            Rs. 8k
            </span>
            <div className="flex flex-col">
              <h5 className="text-center text-lg font-medium lg:text-xl">
              </h5>
              <p className="text-center text-sm text-text-tertiary dark:text-dark-text-tertiary lg:text-base">
              </p>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-6 p-6  lg:p-8">
            {/* <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-text-secondary dark:text-dark-text-secondary lg:text-base">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-0.5 size-4 shrink-0 lg:size-5"
                >
                  <path
                    d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
                <span></span>
              </li>
            </ul> */}
          </div>
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
                  fill="#FFD700"
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
        <article className="relative flex flex-1 flex-col overflow-hidden rounded-2xl border border-border dark:border-dark-border">
          <header className="flex flex-col gap-4 px-8 pb-0 pt-10">
            <span className="text-center text-3xl font-medium lg:text-4xl">
            Rs. 3k
            </span>
            <div className="flex flex-col">
              <h5 className="text-center text-lg font-medium lg:text-xl">
              </h5>
              <p className="text-center text-sm text-text-tertiary dark:text-dark-text-tertiary lg:text-base">
              </p>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-6 p-6 !pb-12 lg:p-8">
            {/* <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-text-secondary dark:text-dark-text-secondary lg:text-base">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-0.5 size-4 shrink-0 lg:size-5"
                >
                  <path
                    d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
                <span></span>
              </li>
            </ul> */}
          </div>
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
                  fill="#CD7F32"
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
      </div>
    </section>
  );
};

export default Prizes;
