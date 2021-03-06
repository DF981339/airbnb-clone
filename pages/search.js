import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useRouter } from "next/dist/client/router";
import dayjs from "dayjs";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";
import { stays_data } from "../data/stays_data";

function Search({ searchResults }) {
  useEffect(() => {
    document.title = "Results";
  }, []);

  const router = useRouter();

  const capitalizedLocation = (string) => {
    return string
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const isSameMonth = (startDate, endDate) => {
    const startMonth = dayjs(startDate).format("MMM");
    const endMonth = dayjs(endDate).format("MMM");

    if (startMonth === endMonth) {
      return true;
    } else {
      return false;
    }
  };

  const getRange = () => {
    if (isSameMonth(startDate, endDate)) {
      return `${dayjs(startDate).format("MMM D")} - ${dayjs(endDate).format(
        "D"
      )}`;
    } else {
      return `${dayjs(startDate).format("MMM D")} - ${dayjs(endDate).format(
        "MMM D"
      )}`;
    }
  };

  const { location, startDate, endDate, numOfGuests } = router.query;
  const place = capitalizedLocation(location);
  const range = getRange();

  const numOfNights = dayjs(endDate).diff(dayjs(startDate), "day");

  return (
    <div>
      <Header
        placeholder={`${place}  |  ${range}  |  ${numOfGuests} ${
          numOfGuests > 1 ? " guests" : " guest"
        }`}
      />

      <div className="flex">
        {/* Info */}
        <section className="flex-grow pt-14 px-6 logo-bp:max-w-[840px]">
          <div className="text-xs font-light">
            300+ stays · {range} · {numOfGuests}
            {numOfGuests > 1 ? " guests" : " guest"}
          </div>
          <div className="text-3xl font-semibold mt-2 mb-6">
            Stays in {place}
          </div>

          <div className="hidden mobile-bp:inline-flex -ml-2 mb-6 text-gray-600 whitespace-nowrap">
            <p className="tab-button">Type of place</p>
            <p className="tab-button">Price</p>
            <p className="tab-button">Instant Book</p>
            <p className="tab-button">Rooms and beds</p>
            <p className="tab-button">More filters</p>
          </div>
          <div className="inline-flex mobile-bp:hidden -ml-2 mb-2 text-gray-600 whitespace-nowrap">
            <p className="tab-button">Filters</p>
          </div>

          <div className="flex justify-end font-light italic text-gray-400">
            Mocking data are for demo purpose only
          </div>

          <div className="flex flex-col">
            {searchResults?.map(
              ({
                id,
                img,
                location,
                title,
                description,
                description_line_two,
                star,
                review,
                price,
              }) => (
                <div className="border-b first:border-t">
                  <InfoCard
                    key={id}
                    imgURL={img}
                    location={location}
                    title={title}
                    desc={description}
                    desc2={description_line_two}
                    star={star}
                    review={review}
                    price={price}
                    numOfNights={numOfNights}
                  />
                </div>
              )
            )}
          </div>
        </section>

        {/* Map */}
        <section className="hidden logo-bp:inline-flex logo-bp:min-w-[600px] flex-grow relative">
          <div className="sticky top-0 w-full h-screen -mt-20 pt-20 map-container">
            <Map searchResults={searchResults} />
          </div>
        </section>
      </div>

      <div className="mt-15 bg-[#f7f7f7] border-t border-[#dddddd]">
        <Footer />
      </div>
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  // Fetch data from API endpoint
  // const searchResults = await fetch(
  //   `${process.env.hostname}/api/getStaysData`
  // ).then((res) => res.json());

  return {
    props: {
      searchResults: stays_data,
    },
  };
}
