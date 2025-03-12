// eslint-disable-next-line react/prop-types
const ReviewCard = ({ name, image, location, review, rating }) => {
  return (
    <div className="flex justify-evenly text-center gap-16 border p-4 m-3 rounded-md">
      <div>
        <img className="h-10 w-10 rounded-full" src={image} alt={name} />
        <h2 className="my-7">{name}</h2>
      </div>
      <div className="text-left">
        <h2 className="text-lg md:text-2xl">{location}</h2>
        <p className="text-[14px] md:text-lg">{review}</p>
        <div className="mt-5 flex items-center">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`flex-shrink-0 w-5 h-5 ${
                i < rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
};

// Review Data
const reviews = [
  {
    name: "Jessica",
    image: "https://i.ibb.co/VN9y5n7/t2.jpg",
    location: "Canadian Rockies",
    review:
      "The sightseeing and activities were better than we even thought! I still can’t believe we did so much in such a short time, but we did not feel stressed. We really loved the tour and would do it all over again in a minute! Thanks.",
    rating: 4,
  },
  {
    name: "Michael",
    image: "https://i.ibb.co/VN9y5n7/t2.jpg",
    location: "Grand Canyon",
    review:
      "This tour exceeded all expectations! The guide was knowledgeable, and the experience was unforgettable. Highly recommended!",
    rating: 5,
  },
  {
    name: "Sophia",
    image: "https://i.ibb.co/VN9y5n7/t2.jpg",
    location: "Santorini, Greece",
    review:
      "A dream trip come true! The views were breathtaking, and the service was outstanding. I can't wait to book another tour.",
    rating: 5,
  },
  {
    name: "David",
    image: "https://i.ibb.co/VN9y5n7/t2.jpg",
    location: "Great Wall of China",
    review:
      "An incredible experience! The history and culture were fascinating, and the tour was very well organized.",
    rating: 4,
  },
];

const TourStories = () => {
  return (
    <div className="max-w-[85rem] mx-auto my-20">
      <h2 className="text-3xl md:text-5xl text-center md:my-5 font-bold md:pb-8">
        Tour Reviews
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-auto">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </div>
  );
};

export default TourStories;
