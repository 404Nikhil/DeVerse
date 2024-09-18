"use client";
import { useState } from "react";
import { Container, Icons } from "@/components";
import Image from "next/image";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Prizes", href: "#Prizes" },
    { label: "Timeline", href: "#Timeline" },
    { label: "Tracks", href: "#Tracks" },
    { label: "FAQs", href: "#FAQs" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleScroll = (href: any) => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header className="px-4 h-14 sticky top-0 inset-x-0 w-full bg-grayscale-950/85 backdrop-blur-lg border-b border-border z-50">
        <Container reverse>
          <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-2xl">
            <div className="flex items-start">
              <div
                onClick={() => handleHome()}
                className="flex cursor-pointer items-center gap-2"
              >
                <Image src="/assets/osslogo.svg" alt="OSS Logo" width={28} height={28} className="w-7 h-7" />
                <span className="text-lg font-medium">De&apos;Verse</span>
              </div>
            </div>
            <nav className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <ul
                data-orientation="horizontal"
                className="flex flex-1 gap-0.5 px-4"
                dir="ltr"
              >
                {menuItems.map((item, index) => (
                  <li key={index} className="relative items-center gap-0.5">
                    <a
                      className="font-normal rounded-none ring-control focus-visible:ring-2 outline-none outline-0 inline-flex h-6 shrink-0 items-center justify-center gap-1 px-3 pb-px tracking-tight hover:bg-surface-tertiary dark:hover:bg-dark-surface-tertiary lg:h-7"
                      href={item.href}
                      onClick={() => handleScroll(item.href)}
                      style={{ cursor: "pointer" }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="items-center gap-2 justify-self-end flex">
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
              <a
                className="gap-1 font-normal shrink-0 rounded-none sm:flex hidden ring-control focus-visible:ring-2 outline-none outline-0 bg-accent-500 hover:bg-accent-600 text-textOnAccent-primary border-accent-600 items-center justify-center px-3.5 text-sm h-8 md:px-5 !px-3.5"
                href="/sign-up"
                style={{ cursor: "pointer" }}
              >
                Register
              </a>
              <button
                aria-label="Toggle Menu"
                onClick={toggleMobileMenu}
                className="col-start-3 flex items-center justify-center gap-2 justify-self-end rounded border border-border bg-surface-secondary p-2 dark:border-dark-border dark:bg-dark-surface-secondary lg:hidden lg:h-7"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4"
                >
                  <path
                    d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </Container>
      </header>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden fixed top-[55px] border-b inset-x-0 bg-grayscale-950/85 backdrop-blur-lg border-t border-border z-50">
          <ul
            data-orientation="vertical"
            className="flex flex-col gap-0.5 px-4 py-2"
            dir="ltr"
          >
            {menuItems.map((item, index) => (
              <li key={index} className="relative items-center gap-0.5 py-2">
                <a
                  className="font-normal rounded-none ring-control focus-visible:ring-2 outline-none outline-0 inline-flex h-6 shrink-0 items-center justify-center gap-1 px-3 tracking-tight opacity-85"
                  href={item.href}
                  style={{ cursor: "pointer" }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navbar;
