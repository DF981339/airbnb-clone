import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HorizontalScroll from "../components/HorizontalScroll";
import LargeCard from "../components/LargeCard";
import SmallCard from "../components/SmallCard";
import { discover_data } from "../data/discover_data";
import { explore_data } from "../data/explore_data";
import { live_data } from "../data/live_data";
import Image from "next/image";

export default function Home({ exploreData, liveData, discoverData }) {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner />

      {/* Body */}
      <main className="px-6 mobile-bp:px-10 logo-bp:large-padding mx-auto max-w-[1760px] w-full block">
        {/* Explore Nearby Section - Small Cards */}
        <section className="my-6 -mx-3">
          <h2 className="px-3 text-[26px] search-bar-bp:text-[32px] font-semibold pb-5">
            Explore nearby
          </h2>
          <div
            style={{ "--column-count": 4 }}
            className="p-3 grid overflow-x-auto scroll-bar-none mobile-column gap-[12px] mobile-bp:gap-4 grid-rows-2 scroll grid-flow-col mobile-bp:grid-cols-3 logo-bp:four-column logo-bp:grid-flow-row"
          >
            {exploreData?.map(({ id, img, location, distance }) => (
              <div className="mobile-bp:hide-card logo-bp:show-card">
                <SmallCard
                  key={id}
                  img={img}
                  location={location}
                  distance={distance}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Live Anywhere Section - Medium Cards */}
        <section className="relative my-10 -mx-3">
          <h2 className="px-3 text-[26px] search-bar-bp:text-[32px] font-semibold pb-5">
            Live anywhere
          </h2>
          <HorizontalScroll data={liveData} />
        </section>

        {/* Large Cards */}
        <LargeCard />

        {/* Discover things to do Section - Medium Cards */}
        <section className="relative my-10 -mx-3">
          <h2 className="px-3 text-[26px] search-bar-bp:text-[32px] font-semibold pb-5">
            Discover things to do
          </h2>
          <ul className="ul -mx-2 px-3">
            {discoverData?.map(({ id, img, title, description }) => (
              <li
                style={{
                  borderWidth: "8px 8px",
                  maxWidth: "33.3333%",
                  flex: "0 0 33.3333%",
                }}
                className="li"
              >
                <div>
                  <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
                    <div className="object-cover">
                      <Image
                        src={img}
                        height={450}
                        width={450}
                        className="rounded-xl"
                      />
                    </div>
                    <h3 className="text-[18px] pt-1">{title}</h3>
                    <div className="flex flex-col">{description}</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>

      {/* Footer */}
      <div className="mt-15 bg-[#f7f7f7] border-t border-[#dddddd]">
        <Footer />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // Fetch data from API endpoint
  // const exploreData = await fetch("URL").then((res) => res.json());

  return {
    props: {
      exploreData: explore_data,
      liveData: live_data,
      discoverData: discover_data,
    },
  };
}
