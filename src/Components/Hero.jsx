import { useTypewriter } from 'react-simple-typewriter';
import { LuMapPin } from "react-icons/lu";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["ourisom & Travels"],
    loop: 9,
    // onLoopDone: () => console.log(`loop completed after 9 runs.`),
  });
    return (
        <div className="my-10 py-10">
            {/* <!-- Hero --> */}
<div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
  {/* <!-- Grid --> */}
  <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
    <div>
      <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight dark:text-white">Start your journey with <br /> <span className="text-blue-600">T{text}</span></h1>
      <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">Tourism involves traveling for leisure, adventure, culture, and business, boosting economies and fostering cultural exchange. Travel, encompassing all movement, connects people globally, promoting personal growth and global understanding. Sustainable practices are vital to mitigate environmental and cultural impacts.</p>

      {/* <!-- Buttons --> */}
      <div className="mt-7 grid gap-3 w-full sm:inline-flex">
        <a className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="allpackage">
          Get started
          <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </a>
        <a className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="https://maps.app.goo.gl/s2bhhzKgE5Z7Mbbd9" target='blank'>
        <LuMapPin />
          Map is here
        </a>
      </div>
      {/* <!-- End Buttons --> */}

      
    </div>
    {/* <!-- End Col --> */}

    <div className="relative ms-4">
      <img className="w-full rounded-md" src="https://i.ibb.co/YWGNtBg/mixphoto.jpg" alt="Image Description"/>
      <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0"></div>

      {/* <!-- SVG--> */}
      <div className="absolute bottom-0 start-0">
        <svg className="w-2/3 ms-auto h-auto text-white dark:text-slate-900" width="630" height="451" viewBox="0 0 630 451" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="531" y="352" width="99" height="99" fill="currentColor"/>
          <rect x="140" y="352" width="106" height="99" fill="currentColor"/>
          <rect x="482" y="402" width="64" height="49" fill="currentColor"/>
          <rect x="433" y="402" width="63" height="49" fill="currentColor"/>
          <rect x="384" y="352" width="49" height="50" fill="currentColor"/>
          <rect x="531" y="328" width="50" height="50" fill="currentColor"/>
          <rect x="99" y="303" width="49" height="58" fill="currentColor"/>
          <rect x="99" y="352" width="49" height="50" fill="currentColor"/>
          <rect x="99" y="392" width="49" height="59" fill="currentColor"/>
          <rect x="44" y="402" width="66" height="49" fill="currentColor"/>
          <rect x="234" y="402" width="62" height="49" fill="currentColor"/>
          <rect x="334" y="303" width="50" height="49" fill="currentColor"/>
          <rect x="581" width="49" height="49" fill="currentColor"/>
          <rect x="581" width="49" height="64" fill="currentColor"/>
          <rect x="482" y="123" width="49" height="49" fill="currentColor"/>
          <rect x="507" y="124" width="49" height="24" fill="currentColor"/>
          <rect x="531" y="49" width="99" height="99" fill="currentColor"/>
        </svg>
      </div>
      {/* <!-- End SVG--> */}
    </div>
    {/* <!-- End Col --> */}
  </div>
  {/* <!-- End Grid --> */}
</div>
{/* <!-- End Hero --> */}
        </div>
    );
};

export default Hero;