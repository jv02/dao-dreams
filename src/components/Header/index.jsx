import React, { useState } from "react";
import { CgMenu, CgClose } from "react-icons/cg";
import Logo from "../../assets/images/logo.svg";
import { Dialog, Transition, Listbox } from "@headlessui/react";

import {
  AiFillCalendar,
  AiOutlineRise,
  AiFillCaretDown,
  AiOutlineCheck,
} from "react-icons/ai";
import { TbLanguage } from "react-icons/tb";

const languages = ["English", "French"];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);

  const navItems = [
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Documents",
      path: "/documents",
    },
    {
      name: "Audit",
      path: "/audit",
    },
    {
      name: "Instructions",
      dropdown: true,
    },
  ];
  return (
    <header className="header__wrapper">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            <a href="/" className="hover:opacity-50 ease-linear duration-150">
              <img src={Logo} alt="" />
            </a>

            <nav className="lg:block hidden">
              <ul className="flex items-center gap-6">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.path}
                      className="text-white hover:opacity-50 cursor-pointer ease-linear duration-150"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex items-center gap-2 text-white border border-zinc-300 rounded-lg py-1 p-2">
                <AiFillCalendar />

                <span>3.735</span>

                <AiOutlineRise className="text-green-500" />
              </div>

              <div>
                <Listbox value={selected} onChange={setSelected}>
                  <div className="relative mt-1">
                    <Listbox.Button className="relative w-full cursor-default pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                      {/*<span className="block truncate">{selected}</span>*/}
                      <div className="flex items-center gap-2 cursor-pointer  duration-150">
                        <TbLanguage className="text-xl" />
                        {selected}
                        <AiFillCaretDown />
                      </div>
                    </Listbox.Button>
                    <Transition
                      as={React.Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {languages.map((lang, langIndex) => (
                          <Listbox.Option
                            key={langIndex}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                active
                                  ? "bg-amber-100 text-amber-900"
                                  : "text-gray-900"
                              }`
                            }
                            value={lang}
                          >
                            {({ selected }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selected ? "font-medium" : "font-normal"
                                  }`}
                                >
                                  {lang}
                                </span>
                                {selected ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                    <AiOutlineCheck
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>

              <button className="header__button hover:opacity-50 ease-linear duration-150">
                Enter App
              </button>
            </div>

            <h1 className="lg:hidden block text-white text-xl">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <CgMenu />
              </button>
            </h1>
          </div>
        </div>
      </div>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a
              href="/"
              className="hover:opacity-50 ease-linear duration-150 -m-1.5 p-1.5"
            >
              <span className="sr-only">Your Company</span>
              <img src={Logo} alt="" style={{ filter: "invert(1)" }} />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <CgClose className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navItems.map((item, i) => (
                  <a
                    key={i}
                    href={item.path}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
