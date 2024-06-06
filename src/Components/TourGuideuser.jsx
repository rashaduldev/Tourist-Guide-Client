import { useLoaderData, useParams } from "react-router-dom";
const TourGuideuser = () => {
  const { id } = useParams();
  console.log(id);
  const loadedData = useLoaderData();
  console.log(loadedData);
  const findedData = loadedData.find((data) => data.id == id);
  console.log(findedData);
  return (
    <div className="lg:mx-36">
      {/* <!-- Card Blog --> */}
      <div className="flex flex-col lg:flex-row">
        <div className="w-full flex-1 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* <!-- Grid --> */}
          <div className="">
            {/* <!-- Card --> */}
            <div className="group flex flex-col h-full  border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
              <img className="h-60" src={findedData.image} alt="" />
              <div className="p-4 md:p-6">
                <h3 className="text-xl font-semibold text-black dark:text-gray-300 dark:hover:text-white">
                  {findedData.name}
                </h3>
                <p className="mt-3 text-black">{findedData.email}</p>
                <p className="mt-3 text-black">
                  <p>Education : MSC Graguate Complete</p>
                </p>
              </div>
            </div>
            {/* <!-- End Card --> */}
          </div>
          {/* <!-- End Grid --> */}
        </div>
        <div className="flex-1 my-10 mx-10">
          <p className="text-2xl lg:text-4xl text-center font-bold text-black">
            Please Send Your Feedback
          </p>
          <form className="text-center flex flex-col">
            <p className="mx-auto mt-5">
              {/* <!-- Rating --> */}
              <div className="flex items-center">
                <button
                  type="button"
                  className="w-5 h-5 inline-flex justify-center items-center text-2xl rounded-full text-yellow-400 disabled:opacity-50 disabled:pointer-events-none dark:text-yellow-500"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="w-5 h-5 inline-flex justify-center items-center text-2xl rounded-full text-yellow-400 disabled:opacity-50 disabled:pointer-events-none dark:text-yellow-500"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="w-5 h-5 inline-flex justify-center items-center text-2xl rounded-full text-yellow-400 disabled:opacity-50 disabled:pointer-events-none dark:text-yellow-500"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="w-5 h-5 inline-flex justify-center items-center text-2xl rounded-full text-yellow-400 disabled:opacity-50 disabled:pointer-events-none dark:text-yellow-500"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="w-5 h-5 inline-flex justify-center items-center text-2xl rounded-full text-gray-300 hover:text-yellow-400 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-600 dark:hover:text-yellow-500"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </button>
              </div>
              {/* <!-- End Rating --> */}
            </p>
            <textarea
              style={{ border: "2px solid black" }}
              className="my-5 rounded"
              placeholder="Enter your feedback"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button
              type="button"
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 my-5 justify-center"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
      {/* <!-- End Card Blog --> */}
    </div>
  );
};

export default TourGuideuser;
