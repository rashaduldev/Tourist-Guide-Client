/* eslint-disable react/no-unescaped-entities */
const Tastemonials = () => {
    return (
      <div className="px-4 py-10 sm:px-6 md:px-0 lg:py-14">
        <div className="md:mx-36">
        <h1 className="text-3xl md:text-5xl font-bold text-center my-10">Tastemonials</h1>
        <hr className="font-bold border-neutral-700" />
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 container mx-auto">
          {/* Card 1 */}
          <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700">
            <div className="flex-auto p-4 md:p-6">
              <svg className="w-20 h-auto sm:w-24 text-gray-700 dark:text-neutral-300" width="140" height="47" viewBox="0 0 140 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* SVG path omitted for brevity */}
              </svg>
              <p className="mt-3 sm:mt-6 text-base text-gray-800 md:text-xl dark:text-white">
                <em>
                  " I'm absolutely floored by the level of care and attention to detail the team at HS have put into this theme and for one can guarantee that I will be a return customer. "
                </em>
              </p>
            </div>
          <div className="flex items-center ml-5">
            <div className="border rounded-full">
                <img className="w-10 h-10" src="" alt="img" />
            </div>
            <div className="p-4 rounded-b-xl md:px-6">
                <h3 className="text-sm font-semibold text-gray-800 sm:text-base dark:text-neutral-200">
                  Nicole Grazioso
                </h3>
                <p className="text-sm text-gray-500 dark:text-neutral-500">
                  Director Payments & Risk | HubSpot
                </p>
              </div>
          </div>
          </div>
          {/* End Card 1 */}
          
          {/* Card 2 */}
          <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700">
            <div className="flex-auto p-4 md:p-6">
              <svg className="w-20 h-auto sm:w-24 text-gray-700 dark:text-neutral-300" width="200" height="67" viewBox="0 0 200 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* SVG path omitted for brevity */}
              </svg>
              <p className="mt-3 sm:mt-6 text-base text-gray-800 md:text-xl dark:text-white">
                <em>
                  " The user experience is fantastic, and the support team has been extremely responsive and helpful throughout the process. "
                </em>
              </p>
            </div>
          <div className="flex items-center ml-5">
          <div className="border rounded-full">
                <img className="w-10 h-10" src="" alt="img" />
            </div>
            <div className="p-4 rounded-b-xl md:px-6">
              <h3 className="text-sm font-semibold text-gray-800 sm:text-base dark:text-neutral-200">
                Alex Johnson
              </h3>
              <p className="text-sm text-gray-500 dark:text-neutral-500">
                CEO | Tech Innovators
              </p>
            </div>
          </div>
          </div>
          {/* End Card 2 */}
          
          {/* Card 3 */}
          <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700">
            <div className="flex-auto p-4 md:p-6">
              <svg className="w-20 h-auto sm:w-24 text-gray-700 dark:text-neutral-300" width="200" height="67" viewBox="0 0 200 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* SVG path omitted for brevity */}
              </svg>
              <p className="mt-3 sm:mt-6 text-base text-gray-800 md:text-xl dark:text-white">
                <em>
                  " The customization options are endless and the design is sleek and modern. "
                </em>
              </p>
            </div>
           <div className="flex items-center ml-5">
           <div className="border rounded-full">
                <img className="w-10 h-10" src="" alt="img" />
            </div>
            <div className="p-4 rounded-b-xl md:px-6">
              <h3 className="text-sm font-semibold text-gray-800 sm:text-base dark:text-neutral-200">
                Jamie Lee
              </h3>
              <p className="text-sm text-gray-500 dark:text-neutral-500">
                Marketing Specialist | Creative Agency
              </p>
            </div>
           </div>
          </div>
          {/* End Card 3 */}
        </div>
      </div>
    );
  };
  
  export default Tastemonials;
  