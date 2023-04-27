import React, { useState } from "react";
import Bird from "../../assets/images/bird.png";
import Coin from "../../assets/images/coin.png";
import Ton from "../../assets/images/ton.png";
import Donator from "../../assets/images/donator.svg";
import QRCode from "../../assets/images/qrcode.svg";
import LearnMoreButton from "../../components/LearnMoreButton";
import { AiFillCaretDown, AiOutlineSend } from "react-icons/ai";
import { FiCopy } from "react-icons/fi";
import Chart from "chart.js/auto";
import { CategoryScale, Filler } from "chart.js";
import LineChart from "./LineChart";
import { Transition, Menu } from "@headlessui/react";

Chart.register(CategoryScale);
Chart.register(Filler);

const ChartDropdown = () => {
  const dayChoices = [
    {
      value: 28,
      title: "Last 28 days",
    },
    {
      value: 21,
      title: "Last 21 days",
    },
    {
      value: 14,
      title: "Last 14 days",
    },
    {
      value: 7,
      title: "Last 7 days",
    },
  ];

  const [selected, setSelected] = useState(dayChoices[0]);
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center bg-transparent px-4 py-2 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <div className="flex items-center gap-1">
            <span>{selected.title}</span>

            <AiFillCaretDown />
          </div>
        </Menu.Button>
      </div>
      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            {dayChoices.map((day, i) => (
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={(e) => setSelected(day)}
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {day.title}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

function Index() {
  const cards = [
    {
      title: "Sustainable Growth",
      text: "Invest in a crypto that prioritizes long-term sustainability and growth, rather than quick gains and instability.",
    },
    {
      title: "Sustainable Growth",
      text: "Invest in a crypto that prioritizes long-term sustainability and growth, rather than quick gains and instability.",
    },
    {
      title: "Auto Reinvesting",
      text: "Keep your investments growing with our automatic reinvestment feature, which reinvests your earnings for you.",
    },
    {
      title: "Anti-Dump",
      text: "Our anti-dump policy ensures that large sell-offs do not disrupt the market and harm our investors' portfolios.",
    },
  ];

  const stats = [
    {
      title: "Ton amount",
      value: "549,326,121",
    },
    {
      title: "~BTC",
      value: "44,455.57",
    },
    {
      title: "Received to DAO",
      value: "39,120,432",
    },
    {
      title: "Received via NFT",
      value: "410,415,125",
    },
  ];

  const donators = [
    {
      name: "Hope Horizon",
      place: "Tokyo, Japan",
      amount: "$6,713,604",
    },
    {
      name: "Care Hub",
      place: "London, UK",
      amount: "$6,713,604",
    },
    {
      name: "Help Linkope Horizon",
      place: "New York, USA",
      amount: "$6,713,604",
    },
  ];

  return (
    <div className="home__wrapper">
      <section className="home__landing-section pt-24">
        <div className="container mx-auto">
          <div className="mt-12 flex flex-col gap-10 text-center lg:text-5xl text-3xl font-medium">
            <div className="flex flex-col items-center gap-10 md:w-8/12 w-full mx-auto ">
              <h2>
                The Best Auto-Staking & Auto-Compounding Protocol in Crypto
              </h2>
              <h1>DAO DREAM</h1>
            </div>

            <img src={Bird} alt="" className="mx-auto home__image" />

            <p className="text-xl font-normal md:w-5/12 w-full mx-auto mt-4">
              Essentially purchase and hold the HighPoint Token acquire
              hazardous, yet manageable, easy revenue
            </p>
          </div>
        </div>
      </section>

      <div className="py-10">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 md:grid-cols-1 lg:gap-8 md:gap-4 mt-20">
            {cards.map((card, index) => (
              <div className="home__card mb-8" key={index}>
                <img
                  src={`/card-icons/${index + 1}.svg`}
                  alt=""
                  className="mb-10"
                />

                <div className="home__card__title text-xl mb-2">
                  {card.title}
                </div>

                <div className="home__card__text text-md">{card.text}</div>
              </div>
            ))}
          </div>

          <section className="mt-20 home__blocks">
            <div className="home__blocks__item gap-4">
              <div className="flex flex-col items-start gap-4 p-10">
                <h1 className="text-3xl">Earn a fixed APY</h1>

                <p className="text-2xl">-100,000%</p>

                <p className="text-secondary-text">
                  Here at HighPoint, we want to build a safe, long-term
                  investment opportunity for those realistic and careful
                  investors out there.{" "}
                </p>

                <LearnMoreButton />
              </div>
              <LineChart
                borderColor={"#F95ACC"}
                backgroundColorTop="rgba(249, 90, 204, 1)"
                backgroundColorBottom="rgba(113, 61, 255, 0)"
              />
              {/*<img src="/charts/1.png" alt="" className="w-full" />*/}
            </div>

            <div className="home__blocks__item flex flex-col items-start gap-4 p-10">
              <h1 className="text-3xl">Staking & Compounding</h1>

              <p className="text-2xl">Automatic Staking in Your Wallet</p>

              <p className="text-secondary-text">
                Here at HighPoint, we want to build a, long-term investment
                opportunity for those realistic and careful
              </p>

              <LearnMoreButton />

              <div className="mt-auto flex flex-col gap-4 w-full">
                <div className="home__blocks__item__card">
                  <p className="mb-4">
                    <span className="mr-2">Results</span>
                    <span className="text-secondary-text">1,726 votes</span>
                  </p>

                  <div className="flex items-center justify-between mb-2">
                    <p>
                      Yes <span className="text-secondary-text">91.75%</span>
                    </p>

                    <div className="flex text-secondary-text">
                      1.29K votes 1.67M TON
                    </div>
                  </div>
                  <div className="home__blocks__item__card__loading ">
                    <div className="home__blocks__item__card__loading__inner"></div>
                  </div>
                </div>

                <div className="home__blocks__item__card">
                  <p className="mb-4">
                    <span className="mr-2">Winner</span>
                    <span className="text-secondary-text">1,543 votes</span>
                  </p>

                  <div className="flex gap-4 items-center">
                    <img src={Coin} alt="" />

                    <div className="flex flex-col gap">
                      <p>Stake CAKE</p>

                      <p className="text-secondary-text">
                        Stake, Earn — And more!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="home__rewards mt-8">
            <div className="home__rewards__image">
              <img src={Ton} alt="" />
            </div>

            <div className="py-14 h-full justify-between flex flex-col lg:items-start items-center gap-2 lg:text-left">
              <h2 className="lg:text-5xl text-3xl">Get Rewards</h2>

              <p className="lg:text-3xl text-xl">
                Every 30 Minutes / 48 Times Daily!
              </p>

              <p className="text-secondary-text">
                Here at HighPoint, we want to build a long-term investment
                opportunity for those realistic and careful
              </p>

              <LearnMoreButton />
            </div>
          </section>
        </div>

        <div className="px-4">
          <section className="home__stats__wrapper">
            <div className="container">
              <div className="home__stats py-20">
                <div className="flex flex-col gap-3 text-center lg:w-6/12 mx-auto mb-10">
                  <h1 className="uppercase text-5xl">STATISTICS</h1>

                  <p className="text-secondary-text ">
                    Ton Statistics offers insights into the Ton ecosystem's
                    performance, usage, and growth across various sectors.
                  </p>
                </div>

                <div className="flex flex-col gap-8">
                  <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
                    {stats.map((stat, index) => (
                      <div
                        className="home__stats__card flex flex-col gap-4 p-8"
                        key={index}
                      >
                        <p className="text-secondary-text">{stat.title}</p>

                        <h1 className="text-3xl">{stat.value}</h1>
                      </div>
                    ))}
                  </div>

                  <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8">
                    <div className="home__stats__card flex flex-col gap-4">
                      <div className="p-8">
                        <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                          <p className="font-medium">
                            Received from staking/farming profits
                          </p>
                          <ChartDropdown />
                        </div>

                        <div className="flex items-end flex-wrap gap-4 mb-4">
                          <h1 className="text-5xl font-medium">$2.14B</h1>

                          <p className="text-secondary-text">April 7, 2023</p>
                        </div>
                      </div>
                      <LineChart
                        borderColor={"#713DFF"}
                        backgroundColorBottom={"rgba(0, 143, 255, 0)"}
                        backgroundColorTop={"rgba(0, 143, 255, 1)"}
                      />

                      {/*<img src="/charts/2.png" alt="" className="w-full" />*/}
                    </div>

                    <div className="home__stats__card flex flex-col gap-4">
                      <div className="p-8">
                        <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                          <p className="font-medium">
                            Transferred to rewards for Holders
                          </p>

                          <ChartDropdown />
                        </div>

                        <div className="flex items-end flex-wrap gap-4 mb-4">
                          <h1 className="text-5xl font-medium">$315.49B</h1>

                          <p className="text-secondary-text">April 7, 2023</p>
                        </div>
                      </div>
                      <LineChart
                        borderColor={"#713DFF"}
                        backgroundColorBottom={"rgba(0, 143, 255, 0)"}
                        backgroundColorTop={"rgba(0, 143, 255, 1)"}
                      />

                      {/*<img src="/charts/3.png" alt="" className="w-full" />*/}
                    </div>
                  </div>

                  <div className="home__stats__card p-8">
                    <div className="home__stats__table__wrapper">
                      <div className="flex flex-col gap-12">
                        <div className="flex flex-col ">
                          <p className="text-secondary-text text-lg">
                            Jettons sold
                          </p>

                          <h3 className="text-4xl">10 000 000</h3>
                        </div>

                        <div className="flex flex-col gap-4">
                          <p className="text-secondary-text text-lg">
                            Steakin' jettons
                          </p>

                          <h3 className="text-4xl">100 000</h3>
                        </div>

                        <div className="hidden lg:flex flex items-center gap-4">
                          <button className="py-2 px-4 rounded-3xl bg-white text-black  hover:opacity-50 ease-linear duration-150 font-medium">
                            Enter App
                          </button>

                          <button className="hover:opacity-50 ease-linear duration-150">
                            Read newspaper
                          </button>
                        </div>
                      </div>

                      <div className="flex lg:hidden flex-wrap justify-center items-center gap-4">
                        <button className="py-2 px-4 rounded-3xl bg-white text-black  hover:opacity-50 ease-linear duration-150 font-medium">
                          Enter App
                        </button>

                        <button className="hover:opacity-50 ease-linear duration-150">
                          Read newspaper
                        </button>
                      </div>

                      <div className="rounded-xl overflow-hidden border-white home__stats__table">
                        <table className="text-center table-auto w-full h-full">
                          <thead>
                            <tr>
                              <td>Round</td>
                              <td>NFT sold</td>
                              <td>Price, Ton</td>
                            </tr>
                          </thead>

                          <tbody>
                            {Array.from([1, 2, 3, 4, 5, 6]).map((_, index) => (
                              <tr key={index}>
                                <td>1</td>
                                <td>100</td>
                                <td>1</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col mt-10">
                    <div className="flex flex-col gap-6 text-center mb-16">
                      <h1 className="uppercase text-4xl">DONATE</h1>

                      <p className="text-2xl">
                        You can transfer any amount of Ton to the Aid Pool
                        without limitations.
                      </p>

                      <p className="text-secondary-text">
                        The Aid Pool allocates funds to various Assistance Funds
                        globally.
                      </p>
                    </div>
                    <div className="home__stats__donate__grid">
                      <div className="flex flex-col gap-8">
                        <h3 className="text-xl mb-8">Statistics</h3>

                        <div className="flex flex-col gap-8">
                          <div className="flex flex-col gap-1">
                            <p className="text-secondary-text">Wallet 1</p>

                            <h4 className="text-5xl ">$8,302,569</h4>
                          </div>

                          <div className="flex flex-col gap-1">
                            <p className="text-secondary-text">Wallet 2</p>

                            <h4 className="text-5xl ">$12,861,492</h4>
                          </div>
                        </div>

                        <div className="flex md:flex-nowrap flex-wrap gap-8">
                          <div className="flex flex-col gap-1">
                            <p className="text-secondary-text">
                              Royalty wallet, 1%
                            </p>

                            <h4 className="text-2xl">$1,404</h4>
                          </div>

                          <div className="flex flex-col gap-1">
                            <p className="text-secondary-text">
                              Donations wallet
                            </p>

                            <h4 className="text-2xl">$20,140,581</h4>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-8">
                        {donators.map((donator, index) => (
                          <div className="home__stats__card p-4" key={index}>
                            <div className="flex items-center justify-between flex-wrap gap-4">
                              <div className="flex items-center gap-4">
                                <img src={Donator} alt="" />

                                <div className="flex flex-col">
                                  <h5>{donator.name}</h5>

                                  <p className="text-secondary-text">
                                    {donator.place}
                                  </p>
                                </div>
                              </div>

                              <p>{donator.amount}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col gap-8">
                        <div className="home__stats__card flex flex-col p-8 px-14 items-center gap-4">
                          <img src={QRCode} alt="" className="h-30" />

                          <div className="flex items-center gap-2 cursor-pointer hover:opacity-50 ease-linear duration-150">
                            <FiCopy />

                            <p>Copy address</p>
                          </div>
                        </div>

                        <div className="home__stats__card p-4">
                          <p className="hover:opacity-50 ease-linear duration-150">
                            info@dao-dream.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="home__roadmap">
          <div className="container">
            <div className="flex flex-col gap-4 text-center">
              <h1 className="text-5xl uppercase">Roadmap</h1>

              <p className="text-secondary-text">
                The roadmap is a to-do list of our upcoming events. No official
                launch dates are going to be publicly announced so we can
                change.
              </p>
            </div>

            <div className="home__roadmap__rows__wrapper flex flex-col lg:gap-8 mt-24">
              <div className="home__roadmap__rows">
                <div className="home__roadmap__row">
                  <div className="home__roadmap__col">
                    Security (kyc/audit/multisign)
                  </div>

                  <div className="home__roadmap__col">Official Launch</div>

                  <div className="home__roadmap__col">
                    Second phase of marketing
                  </div>
                </div>
              </div>

              <div className="home__roadmap__rows lg:ml-auto">
                <div className="home__roadmap__row">
                  <div className="home__roadmap__col">Website</div>

                  <div className="home__roadmap__col">
                    Launch discord and official accounts
                  </div>

                  <div className="home__roadmap__col">More to come</div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-5 grid-cols-2 gap-4 mt-24">
              {Array.from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).map((_, index) => (
                <div
                  className="flex justify-center items-center text-center"
                  key={index}
                >
                  <img src={`/logos/logo-${index}.png`} alt="" />
                </div>
              ))}
            </div>

            <p className="text-center mt-16">
              Optimize your deals on hundreds of DEX across multiple networks.
            </p>
          </div>
        </section>

        <div className="px-4">
          <section className="home__partners__wrapper">
            <div className="home__partners p-16">
              <h1
                className="lg:text-5xl text-3xl
             uppercase text-center"
              >
                OUR PARTNERS & STAKEHOLDERS
              </h1>

              <div className="grid lg:grid-cols-5 grid-cols-2 gap-4 mt-24">
                {Array.from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).map((_, index) => (
                  <div
                    className="flex justify-center items-center text-center"
                    key={index}
                  >
                    <img src={`/logos/logo-${index}.png`} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <section>
          <div className="container">
            <p>dao-dream.com</p>

            <div className="home__socials mt-10">
              {Array.from([0, 1, 2, 3, 4, 5, 6, 7, 8]).map((_, index) => (
                <div className="home__social" key={index}>
                  <AiOutlineSend />
                  <span>Channel</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Index;
