import { useQuery } from "react-query";
import fetcher from "../../API/api";
import Spinner from "../../Components/Spinner";

const Reviews = () => {
  const { data, isLoading } = useQuery("review", async () => {
    const res = await fetcher.get("/review");
    return res.data;
  });
   

  if (isLoading) return <Spinner/>;

  return (
    <div className="pt-32 container mx-auto mb-14">
      <h1 className="text-5xl text-center text-secondary font-bold mb-8">
        Our Clients
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.map((review, i) => (
          <div
            key={i}
            className="flex items-center min-h-44 bg-base-200 rounded-md"
          >
            <img
              className="w-36 mr-5 h-full rounded-md object-cover"
              src={review.img}
              alt=""
            />
            <div className=" p-3">
              <h3 className="text-xl font-semibold">{review.name}</h3>
              <p className="flex items-center my-3">
                <span className="text-lg mr-1">{review.ratting}</span>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-3"
                    class="mask mask-heart bg-red-400"
                  />
                </div>
              </p>
              <p className="text-lg">{review.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
