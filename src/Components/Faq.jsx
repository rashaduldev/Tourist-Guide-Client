import Faqright from "./Faqright";


const Faq = () => {
  return (
    <>
      {/* FAQ */}
      <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto container ">
        {/* Grid */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-48">
          <div className="md:col-span-2">
            <div className="space-y-5">
              <h2 className="text-2xl font-bold md:text-5xl md:leading-tight dark:text-white">
                Frequently asked <br /> questions
              </h2>
              <p className="mt-1 hidden md:block text-gray-600 dark:text-neutral-400">
                Answers to the most frequently asked questions.
              </p>
            </div>
          </div>
          {/* End Col */}
        <div>
        <Faqright/>
        </div>

        
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End FAQ */}
    </>
  );
};

export default Faq;
