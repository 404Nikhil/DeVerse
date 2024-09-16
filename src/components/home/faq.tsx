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
            Frequently asked questions
          </h4>
        </div>
        <p className="max-w-screen-md text-pretty text-lg font-light text-text-tertiary dark:text-dark-text-tertiary md:text-xl text-center">
          Advice and answers from the our team.
        </p>
      </div>
      <ul className="mx-auto flex w-full grid-cols-3 flex-col place-content-start items-start gap-8 self-stretch lg:grid lg:gap-14 lg:px-24">
        <li className="flex flex-col gap-1.5">
          <p className="font-medium leading-relaxed tracking-tighter sm:text-lg">
            What industries can benefit from your AI solutions?
          </p>
          <p className="text-sm leading-relaxed tracking-tight text-text-tertiary dark:text-dark-text-tertiary sm:text-base">
            Our AI solutions are applicable across various industries, including healthcare, finance, retail, and manufacturing.
          </p>
        </li>
        <li className="flex flex-col gap-1.5">
          <p className="font-medium leading-relaxed tracking-tighter sm:text-lg">
            How do you ensure data privacy and security?
          </p>
          <p className="text-sm leading-relaxed tracking-tight text-text-tertiary dark:text-dark-text-tertiary sm:text-base">
            We adhere to strict data privacy regulations and implement robust security measures to protect sensitive information.
          </p>
        </li>
        <li className="flex flex-col gap-1.5">
          <p className="font-medium leading-relaxed tracking-tighter sm:text-lg">
            Can your AI solutions be customized to fit specific business needs?
          </p>
          <p className="text-sm leading-relaxed tracking-tight text-text-tertiary dark:text-dark-text-tertiary sm:text-base">
            Automate repetitive tasks and free up valuable time for strategic initiatives.
          </p>
        </li>
        <li className="flex flex-col gap-1.5">
          <p className="font-medium leading-relaxed tracking-tighter sm:text-lg">
            Do you provide ongoing support and maintenance for your AI solutions?
          </p>
          <p className="text-sm leading-relaxed tracking-tight text-text-tertiary dark:text-dark-text-tertiary sm:text-base">
            Absolutely, we offer comprehensive support and maintenance services to ensure the smooth operation of our AI solutions.
          </p>
        </li>
        <li className="flex flex-col gap-1.5">
          <p className="font-medium leading-relaxed tracking-tighter sm:text-lg">
            How can I Register with your AI solutions?
          </p>
          <p className="text-sm leading-relaxed tracking-tight text-text-tertiary dark:text-dark-text-tertiary sm:text-base">
            Simply reach out to our team to schedule a consultation and explore how our AI solutions can benefit your business.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default FAQsSection;