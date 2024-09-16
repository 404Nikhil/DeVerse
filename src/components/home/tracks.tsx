import React from 'react';

const Tracks: React.FC = () => {
  return (
    <section id="Tracks" className="py-14 md:py-[72px] flex flex-col items-center gap-10 relative container mx-auto px-6">
      <div className="flex flex-col gap-3 items-center self-center">
        <h3 className="flex min-h-7 items-center justify-center gap-2 rounded-none bg-surface-secondary px-3.5 pb-px text-sm font-medium text-text-tertiary dark:bg-dark-surface-secondary dark:text-dark-text-tertiary md:text-base">
          Communication
        </h3>
        <div className="flex max-w-[800px] flex-col justify-center gap-1 items-center self-center">
          <h4 className="text-pretty text-3xl font-medium md:text-4xl text-center">
            Enhanced Team Communication
          </h4>
        </div>
        <p className="max-w-screen-md text-pretty text-lg font-light text-text-tertiary dark:text-dark-text-tertiary md:text-xl text-center">
          Simplify team discussions and collaboration with our efficient messaging features, enabling swift decision-making and project progress tracking.
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <article className="flex min-h-96 w-full max-w-[380px] flex-col rounded-lg border border-border bg-surface-secondary p-px dark:border-dark-border dark:bg-dark-surface-secondary sm:max-w-full md:w-full md:flex-row md:odd:flex-row-reverse xl:gap-16">
          <figure className="p-2 md:h-auto md:w-[360px] lg:w-[480px] xl:w-[560px]">
            <img
              alt=""
              loading="lazy"
              width="560"
              height="374"
              decoding="async"
              data-nimg="1"
              className="block aspect-video h-[200px] w-full rounded-lg border border-border object-cover dark:border-dark-border md:h-full"
              srcSet="https://assets.basehub.com/fa068a12/pd73iO2GEL7WtrCu6Rn8R/features-streamlined-team-communication-real-time-messaging-(dark-mode)3x.jpg?format=auto&amp;quality=90&amp;width=640 1x, https://assets.basehub.com/fa068a12/pd73iO2GEL7WtrCu6Rn8R/features-streamlined-team-communication-real-time-messaging-(dark-mode)3x.jpg?format=auto&amp;quality=90&amp;width=1200 2x"
              src="https://assets.basehub.com/fa068a12/pd73iO2GEL7WtrCu6Rn8R/features-streamlined-team-communication-real-time-messaging-(dark-mode)3x.jpg?format=auto&amp;quality=90&amp;width=1200"
              style={{ color: 'transparent' }}
            />
          </figure>
          <div className="flex flex-col gap-8 p-5 pt-6 md:flex-1 md:p-10">
            <div className="flex flex-col items-start gap-2">
              <h5 className="text-2xl font-medium text-text-primary dark:text-dark-text-primary md:text-3xl">
                Real-Time Messaging
              </h5>
              <p className="font-normal text-text-secondary dark:text-dark-text-secondary md:text-lg">
                Our platform offers instantaneous messaging to keep your team connected and responsive. This ensures that all team members are aligned and can react quickly to any updates or changes.
              </p>
            </div>
            <ul className="flex flex-col items-start gap-3 pl-2 md:text-lg">
              <li className="flex items-center gap-4 font-normal text-text-secondary dark:text-dark-text-secondary">
                <span className="flex size-6 items-center justify-center rounded-none bg-surface-tertiary dark:bg-dark-surface-tertiary">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-text-tertiary dark:text-dark-text-tertiary">
                    <path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                  </svg>
                </span>
                Instant message delivery
              </li>
              <li className="flex items-center gap-4 font-normal text-text-secondary dark:text-dark-text-secondary">
                <span className="flex size-6 items-center justify-center rounded-none bg-surface-tertiary dark:bg-dark-surface-tertiary">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-text-tertiary dark:text-dark-text-tertiary">
                    <path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                  </svg>
                </span>
                User status indicators (online, offline, busy)
              </li>
              <li className="flex items-center gap-4 font-normal text-text-secondary dark:text-dark-text-secondary">
                <span className="flex size-6 items-center justify-center rounded-none bg-surface-tertiary dark:bg-dark-surface-tertiary">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-text-tertiary dark:text-dark-text-tertiary">
                    <path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                  </svg>
                </span>
                Chat history and search
              </li>
            </ul>
          </div>
        </article>
        <article className="flex min-h-96 w-full max-w-[380px] flex-col rounded-lg border border-border bg-surface-secondary p-px dark:border-dark-border dark:bg-dark-surface-secondary sm:max-w-full md:w-full md:flex-row md:odd:flex-row-reverse xl:gap-16">
          <figure className="p-2 md:h-auto md:w-[360px] lg:w-[480px] xl:w-[560px]">
            <img
              alt=""
              loading="lazy"
              width="560"
              height="374"
              decoding="async"
              data-nimg="1"
              className="block  aspect-video h-[200px] w-full rounded-lg border border-border object-cover dark:border-dark-border md:h-full"
              srcSet="https://assets.basehub.com/fa068a12/LjqmKEgcHqPTWDXCrY33M/features-streamlined-team-communication-integrated-task-management-(dark-mode)3x.jpg?format=auto&quality=90&width=640 1x, https://assets.basehub.com/fa068a12/LjqmKEgcHqPTWDXCrY33M/features-streamlined-team-communication-integrated-task-management-(dark-mode)3x.jpg?format=auto&quality=90&width=1200 2x"
              src="https://assets.basehub.com/fa068a12/LjqmKEgcHqPTWDXCrY33M/features-streamlined-team-communication-integrated-task-management-(dark-mode)3x.jpg?format=auto&quality=90&width=1200"
              style={{ color: 'transparent' }}
            />
          </figure>
          <div className="flex flex-col gap-8 p-5 pt-6 md:flex-1 md:p-10">
            <div className="flex flex-col items-start gap-2">
              <h5 className="text-2xl font-medium text-text-primary dark:text-dark-text-primary md:text-3xl">
                Integrated Task Management
              </h5>
              <p className="font-normal text-text-secondary dark:text-dark-text-secondary md:text-lg">
                Seamlessly integrate task management within your messaging platform. Assign tasks, set deadlines, and track progress—all from a unified interface that enhances team productivity.
              </p>
            </div>
            <ul className="flex flex-col items-start gap-3 pl-2 md:text-lg">
              <li className="flex items-center gap-4 font-normal text-text-secondary dark:text-dark-text-secondary">
                <span className="flex size-6 items-center justify-center rounded-none bg-surface-tertiary dark:bg-dark-surface-tertiary">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-text-tertiary dark:text-dark-text-tertiary">
                    <path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                  </svg>
                </span>
                Task assignment and tracking
              </li>
              <li className="flex items-center gap-4 font-normal text-text-secondary dark:text-dark-text-secondary">
                <span className="flex size-6 items-center justify-center rounded-none bg-surface-tertiary dark:bg-dark-surface-tertiary">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-text-tertiary dark:text-dark-text-tertiary">
                    <path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                  </svg>
                </span>
                Task prioritization and deadlines
              </li>
              <li className="flex items-center gap-4 font-normal text-text-secondary dark:text-dark-text-secondary">
                <span className="flex size-6 items-center justify-center rounded-none bg-surface-tertiary dark:bg-dark-surface-tertiary">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-text-tertiary dark:text-dark-text-tertiary">
                    <path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                  </svg>
                </span>
                Deadline reminders and notifications
              </li>
            </ul>
          </div>
        </article>
        <article className="flex min-h-96 w-full max-w-[380px] flex-col rounded-lg border border-border bg-surface-secondary p-px dark:border-dark-border dark:bg-dark-surface-secondary sm:max-w-full md:w-full md:flex-row md:odd:flex-row-reverse xl:gap-16">
          <figure className="p-2 md:h-auto md:w-[360px] lg:w-[480px] xl:w-[560px]">
            <img
              alt=""
              loading="lazy"
              width="560"
              height="374"
              decoding="async"
              data-nimg="1"
              className="hidden dark:block block aspect-video h-[200px] w-full rounded-lg border border-border object-cover dark:border-dark-border md:h-full"
              srcSet="https://assets.basehub.com/fa068a12/pd73iO2GEL7WtrCu6Rn8R/features-streamlined-team-communication-real-time-messaging-(dark-mode)3x.jpg?format=auto&amp;quality=90&amp;width=640 1x, https://assets.basehub.com/fa068a12/pd73iO2GEL7WtrCu6Rn8R/features-streamlined-team-communication-real-time-messaging-(dark-mode)3x.jpg?format=auto&amp;quality=90&amp;width=1200 2x"
              src="https://assets.basehub.com/fa068a12/pd73iO2GEL7WtrCu6Rn8R/features-streamlined-team-communication-real-time-messaging-(dark-mode)3x.jpg?format=auto&amp;quality=90&amp;width=1200"
              style={{ color: 'transparent' }}
            />
            <img
              alt=""
              loading="lazy"
              width="560"
              height="374"
              decoding="async"
              data-nimg="1"
              className="dark:hidden block aspect-video h-[200px] w-full rounded-lg border border-border object-cover dark:border-dark-border md:h-full"
              srcSet="https://assets.basehub.com/fa068a12/qZeFxPJWNB7UQdwUzjX3e/features-streamlined-team-communication-real-time-messaging-(light-mode)3x.jpg?format=auto&amp;quality=90&amp;width=640 1x, https://assets.basehub.com/fa068a12/qZeFxPJWNB7UQdwUzjX3e/features-streamlined-team-communication-real-time-messaging-(light-mode)3x.jpg?format=auto&amp;quality=90&amp;width=1200 2x"
              src="https://assets.basehub.com/fa068a12/qZeFxPJWNB7UQdwUzjX3e/features-streamlined-team-communication-real-time-messaging-(light-mode)3x.jpg?format=auto&amp;quality=90&amp;width=1200"
              style={{ color: 'transparent' }}
            />
          </figure>
          <div className="flex flex-col gap-8 p-5 pt-6 md:flex-1 md:p-10">
            <div className="flex flex-col items-start gap-2">
              <h5 className="text-2xl font-medium text-text-primary dark:text-dark-text-primary md:text-3xl">
                Real-Time Messaging
              </h5>
              <p className="font-normal text-text-secondary dark:text-dark-text-secondary md:text-lg">
                Our platform offers instantaneous messaging to keep your team connected and responsive. This ensures that all team members are aligned and can react quickly to any updates or changes.
              </p>
            </div>
            <ul className="flex flex-col items-start gap-3 pl-2 md:text-lg">
              <li className="flex items-center gap-4 font-normal text-text-secondary dark:text-dark-text-secondary">
                <span className="flex size-6 items-center justify-center rounded-none bg-surface-tertiary dark:bg-dark-surface-tertiary">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-text-tertiary dark:text-dark-text-tertiary">
                    <path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                  </svg>
                </span>
                Instant message delivery
              </li>
              <li className="flex items-center gap-4 font-normal text-text-secondary dark:text-dark-text-secondary">
                <span className="flex size-6 items-center justify-center rounded-none bg-surface-tertiary dark:bg-dark-surface-tertiary">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-text-tertiary dark:text-dark-text-tertiary">
                    <path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                  </svg>
                </span>
                User status indicators (online, offline, busy)
              </li>
              <li className="flex items-center gap-4 font-normal text-text-secondary dark:text-dark-text-secondary">
                <span className="flex size-6 items-center justify-center rounded-none bg-surface-tertiary dark:bg-dark-surface-tertiary">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-text-tertiary dark:text-dark-text-tertiary">
                    <path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                  </svg>
                </span>
                Chat history and search
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Tracks;
