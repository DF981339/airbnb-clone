import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";
import { explore_data } from "../data/explore_data";

export default function Home({ exploreData }) {
  return (
    <div>
      <Head>
        <title>Airbnb-Clone</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>

      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
      {/* Body */}
      <main className="px-0 mobile-bp:px-10 logo-bp:large-padding mx-auto max-w-[1760px] w-full block">
        {/* Explore Nearby Section */}
        <section className="my-6">
          <h2 className="text-[26px] search-bar-bp:text-[32px] font-semibold pb-5">
            Explore nearby
          </h2>
          <div
            style={{ "--column-count": 4 }}
            className="grid overflow-x-auto scroll-bar-none mobile-column gap-[12px] mobile-bp:gap-4 grid-rows-2 scroll grid-flow-col mobile-bp:grid-cols-3 logo-bp:four-column logo-bp:grid-flow-row"
          >
            {exploreData?.map(({ id, img, location, distance }) => (
              <div className="mobile-bp:hide-card logo-bp:show-card scroll-snap">
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
      </main>
      {/* Footer */}
    </div>
  );
}

export async function getStaticProps() {
  // Fetch data from API endpoint
  // const exploreData = await fetch("URL").then((res) => res.json());

  return {
    props: {
      exploreData: explore_data,
    },
  };
}
