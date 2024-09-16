import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component

interface Feature {
  id: string;
  title: string;
  description: string;
  iconUrl: string;
  iconAlt: string;
}

const features: Feature[] = [
  {
    id: "1",
    title: "Real-time Messaging",
    description:
      "Instantly communicate with your team, ensuring swift decision-making and seamless collaboration on project tasks and updates.",
    iconUrl:
      "https://assets.basehub.com/fa068a12/4tjfOxi91wk29BRy6jH1p/mail.svg",
    iconAlt: "Real-time Messaging",
  },
  {
    id: "2",
    title: "Task Management",
    description:
      "Organize and prioritize tasks effectively, assigning responsibilities and tracking progress to keep projects on schedule and within scope.",
    iconUrl:
      "https://assets.basehub.com/fa068a12/xGzl38RZpWQq8bij8Hzhu/zap.svg",
    iconAlt: "Task Management",
  },
  {
    id: "3",
    title: "File Sharing",
    description:
      "Share documents, images, and other files effortlessly within your team, enabling easy access to project resources and materials.",
    iconUrl:
      "https://assets.basehub.com/fa068a12/bp99UZ-NioE-mvd_ZLLh-/bar-chart-2.svg",
    iconAlt: "File Sharing",
  },
  {
    id: "4",
    title: "Real-time Insights",
    description:
      "Gain actionable insights instantly with real-time data analysis and visualization.",
    iconUrl:
      "https://assets.basehub.com/fa068a12/ZJG_2vVCKgVzSUrxdDMHo/smile.svg",
    iconAlt: "Real-time Insights",
  },
  {
    id: "5",
    title: "Smart Notifications",
    description:
      "Stay informed about project updates and important discussions without being overwhelmed, thanks to customizable notification settings.",
    iconUrl:
      "https://assets.basehub.com/fa068a12/IDiRkDVimmZ2V_id1-FX7/command.svg",
    iconAlt: "Smart Notifications",
  },
  {
    id: "6",
    title: "Team Analytics",
    description:
      "Gain insights into team performance and communication trends with built-in analytics, empowering you to optimize workflows and enhance productivity.",
    iconUrl:
      "https://assets.basehub.com/fa068a12/F8riNXVtoCEr_slSKlQKE/message-circle.svg",
    iconAlt: "Team Analytics",
  },
];

const Timeline: React.FC = () => {
  return (
    <section
      id="Timeline"
      className="py-14 md:py-[72px] flex flex-col items-center gap-10 relative lg:container lg:mx-auto lg:!flex-row lg:gap-0 lg:p-28"
    >
      <div className="container relative top-0 mx-auto shrink self-stretch px-6 lg:w-1/2 lg:pl-0 lg:pr-12 xl:pr-20">
        <div className="sticky top-16 flex flex-col gap-10">
          <div className="flex flex-col gap-3 items-start self-start">
            <h3 className="flex min-h-7 items-center justify-center gap-2 rounded-none bg-surface-secondary px-3.5 pb-px text-sm font-medium text-text-tertiary dark:bg-dark-surface-secondary dark:text-dark-text-tertiary md:text-base">
              Productivity
            </h3>
            <div className="flex max-w-[800px] flex-col justify-center gap-1 items-start self-start">
              <h4
                className="text-pretty text-3xl font-medium md:text-4xl text-left"
                title="Supercharge Team Productivity"
              >
                Supercharge Team Productivity
              </h4>
            </div>
            <p className="max-w-screen-md text-pretty text-lg font-light text-text-tertiary dark:text-dark-text-tertiary md:text-xl text-left">
              Keep your team focused and productive as they collaborate on
              building and shipping products swiftly.
            </p>
          </div>
          <div className="flex items-center gap-3 md:order-3">
            <a
              href="/sign-up"
              className="gap-1 font-normal shrink-0 rounded-none ring-control focus-visible:ring-0 outline-none outline-0 bg-accent-500 hover:bg-accent-600 text-textOnAccent-primary border-accent-600 inline-flex items-center justify-center px-3.5 text-base h-8 md:px-5"
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
        </div>
      </div>
      <div className="w-full flex-1 shrink-0 lg:w-1/2 lg:flex-1">
        <div className="no-scrollbar flex gap-10 overflow-auto px-6 lg:flex-col lg:px-0">
          {features.map(({ id, title, description, iconUrl, iconAlt }) => (
            <article
              key={id}
              className="flex w-[280px] shrink-0 flex-col gap-4 rounded-lg border border-border bg-surface-secondary p-4 dark:border-dark-border dark:bg-dark-surface-secondary lg:w-full lg:flex-row lg:p-5"
            >
              <figure className="flex size-12 shrink-0 items-center justify-center rounded-none bg-surface-tertiary p-3 dark:bg-dark-surface-tertiary">
                <Image
                  alt={iconAlt}
                  className="dark:invert"
                  height={24}
                  src={iconUrl}
                  width={24}
                />
              </figure>
              <div className="flex flex-col items-start gap-1">
                <h5 className="text-lg font-medium">{title}</h5>
                <p className="text-pretty text-text-tertiary dark:text-dark-text-tertiary">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
