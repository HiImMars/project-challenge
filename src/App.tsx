import StarRating from "./Rating";
import { useGetOffersQuery } from "./redux/offersApi";
import { FaRegHeart } from "react-icons/fa";

function App() {
  const { data, isError, isLoading } = useGetOffersQuery();

  return (
    <>
      <div className="min-w-[350px] max-w-[540px] md:max-w-[1200px] xl:max-w-[1192px] mx-auto md:p-6 p-4">
        {isError && <p>Something went wrong, please try again later</p>}
        {isLoading && <p>Loading, please wait...</p>}
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-bold text-[22px]">All offers</h2>
          <button className="bg-blue-950 text-white text-[16px] px-4 py-2 rounded-md">
            Row/Column
          </button>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {data?.map(({ id, title, rating, category }) => {
            return (
              <li
                key={id}
                className="border border-borderColor rounded-md overflow-hidden flex flex-col gap-2"
              >
                <img src="/images/offer.jpg" alt="offer" className="" />
                <div className="px-3 py-2 flex flex-col gap-2">
                  <div className="flex justify-between">
                    <p className="text-[13px]">{category.title}</p>

                    {/* <p>{rating}</p> */}
                    <StarRating rate={rating} />
                  </div>

                  <h3 className="font-bold">{title}</h3>
                  <p className="block w-full">
                    Tax & Financial Associates offers affordable Tax Planning &
                    Tax Preparation services.
                  </p>

                  <div className="flex justify-between">
                    <div className="hidden md:flex justify-center items-center text-[11px] bg-gray-300 rounded-md px-2">
                      Investing
                    </div>
                    <FaRegHeart className="ml-auto hover:fill-red-600 focus:fill-red-600 transition">
                      icon
                    </FaRegHeart>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
