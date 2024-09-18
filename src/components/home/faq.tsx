import React from 'react';

const FAQsSection: React.FC = () => {
  return (
    <section  id="FAQs" className="py-14 md:py-[72px] flex flex-col items-center gap-10 relative container mx-auto px-6">
      <div className="flex flex-col gap-3 items-center self-center">
        <h3 className="flex min-h-7 items-center justify-center gap-2 rounded-none bg-surface-secondary px-3.5 pb-px text-sm font-medium text-text-tertiary dark:bg-dark-surface-secondary dark:text-dark-text-tertiary md:text-base">
          FAQs
        </h3>
        <div className="flex max-w-[800px] flex-col justify-center gap-1 items-center self-center">
          <h4 className="text-pretty text-3xl font-medium md:text-4xl text-center" title="Frequently asked questions">
            Have a Doubt?
          </h4>
        </div>
        <p className="max-w-screen-md text-pretty text-lg font-light text-text-tertiary dark:text-dark-text-tertiary md:text-xl text-center">
          Answers from our team.
        </p>
            </div>
            <ul className="mx-auto flex w-full grid-cols-3 flex-col place-content-start items-start gap-8 self-stretch lg:grid lg:gap-14 lg:px-24">
        <li className="flex flex-col gap-1.5">
          <p className="font-medium leading-relaxed tracking-tighter sm:text-lg">
            Can SE and TE students combine to form a team?
          </p>
          <p className="text-sm leading-relaxed tracking-tight text-text-tertiary dark:text-dark-text-tertiary sm:text-base">
            Either ONLY TE students or ONLY SE students should make up teams.
          </p>
        </li>
        <li className="flex flex-col gap-1.5">
          <p className="font-medium leading-relaxed tracking-tighter sm:text-lg">
            How many students can make up a team?
          </p>
          <p className="text-sm leading-relaxed tracking-tight text-text-tertiary dark:text-dark-text-tertiary sm:text-base">
            Teams can consist of up to 4 members.
          </p>
        </li>
        <li className="flex flex-col gap-1.5">
          <p className="font-medium leading-relaxed tracking-tighter sm:text-lg">
            Does the event have a registration fee?
          </p>
          <p className="text-sm leading-relaxed tracking-tight text-text-tertiary dark:text-dark-text-tertiary sm:text-base">
            FREE FREE FREE
          </p>
        </li>
        <li className="flex flex-col gap-1.5">
          <p className="font-medium leading-relaxed tracking-tighter sm:text-lg">
            Can team members be from other colleges?
          </p>
          <p className="text-sm leading-relaxed tracking-tight text-text-tertiary dark:text-dark-text-tertiary sm:text-base">
            No, all team members must be from the same college.
          </p>
        </li>
        <li className="flex flex-col gap-1.5">
          <p className="font-medium leading-relaxed tracking-tighter sm:text-lg">
            What are the perks of participating in De'Verse?
          </p>
          <p className="text-sm leading-relaxed tracking-tight text-text-tertiary dark:text-dark-text-tertiary sm:text-base">
            Participants will gain valuable experience, networking opportunities, and the chance to win exciting prizes.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default FAQsSection;