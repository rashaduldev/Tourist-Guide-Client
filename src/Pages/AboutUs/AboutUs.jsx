import Cover from "../../Components/Cover";
import coverImg from "../../assets/about.jpg";


const AboutUs = () => {
    return (
        <div>
             <Cover
        img={coverImg}
        title="About Us"
        subtitle="We'd love to hear from you!"
      ></Cover>
      <div>
      {/* <!-- Team --> */}
<div className="max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  {/* <!-- Title --> */}
  <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Our team</h2>
    <p className="mt-1 text-gray-600 dark:text-gray-400">Creative people</p>
  </div>
  {/* <!-- End Title --> */}

  {/* <!-- Grid --> */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
    <div className="text-center">
      <img className="rounded-full w-24 h-24 mx-auto" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description"/>
      <div className="mt-2 sm:mt-4">
        <h3 className="font-medium text-gray-800 dark:text-gray-200">
          David Forren
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Founder / CEO
        </p>
      </div>
    </div>
    {/* <!-- End Col --> */}

    <div className="text-center">
      <img className="rounded-full w-24 h-24 mx-auto" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description"/>
      <div className="mt-2 sm:mt-4">
        <h3 className="font-medium text-gray-800 dark:text-gray-200">
          Amil Evara
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          UI/UX Designer
        </p>
      </div>
    </div>
    {/* <!-- End Col --> */}

    <div className="text-center">
      <img className="rounded-full w-24 h-24 mx-auto" src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description"/>
      <div className="mt-2 sm:mt-4">
        <h3 className="font-medium text-gray-800 dark:text-gray-200">
          Ebele Egbuna
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Support Consultant
        </p>
      </div>
    </div>
    {/* <!-- End Col --> */}

    <div className="text-center">
      <img className="rounded-full w-24 h-24 mx-auto" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description"/>
      <div className="mt-2 sm:mt-4">
        <h3 className="font-medium text-gray-800 dark:text-gray-200">
          Maria Powers
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Director of sales
        </p>
      </div>
    </div>
    {/* <!-- End Col --> */}

    <div className="text-center">
      <img className="rounded-full w-24 h-24 mx-auto" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description"/>
      <div className="mt-2 sm:mt-4">
        <h3 className="font-medium text-gray-800 dark:text-gray-200">
          Delia Pawelke
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Front-end Developer
        </p>
      </div>
    </div>
    {/* <!-- End Col --> */}

    <div className="text-center">
      <img className="rounded-full w-24 h-24 mx-auto" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description"/>
      <div className="mt-2 sm:mt-4">
        <h3 className="font-medium text-gray-800 dark:text-gray-200">
          Tom Lowry
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          UI/UX Designer
        </p>
      </div>
    </div>
    {/* <!-- End Col --> */}

    <div className="text-center">
      <img className="rounded-full w-24 h-24 mx-auto" src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description"/>
      <div className="mt-2 sm:mt-4">
        <h3 className="font-medium text-gray-800 dark:text-gray-200">
          Louise Donadieu
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Support Consultant
        </p>
      </div>
    </div>
    {/* <!-- End Col --> */}

    <div className="text-center">
      <img className="rounded-full w-24 h-24 mx-auto" src="https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description"/>
      <div className="mt-2 sm:mt-4">
        <h3 className="font-medium text-gray-800 dark:text-gray-200">
          Jeff Fisher
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Project Manager
        </p>
      </div>
    </div>
    {/* <!-- End Col --> */}

    <div className="text-center">
      <img className="rounded-full w-24 h-24 mx-auto" src="https://images.unsplash.com/photo-1602452920335-6a132309c7c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description"/>
      <div className="mt-2 sm:mt-4">
        <h3 className="font-medium text-gray-800 dark:text-gray-200">
          Sophia Harrington
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Project Manager
        </p>
      </div>
    </div>
    {/* <!-- End Col --> */}

    <div className="text-center">
      <img className="rounded-full w-24 h-24 mx-auto" src="https://images.unsplash.com/photo-1515621061946-eff1c2a352bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description"/>
      <div className="mt-2 sm:mt-4">
        <h3 className="font-medium text-gray-800 dark:text-gray-200">
          Christina Kray
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Support Consultant
        </p>
      </div>
    </div>
    {/* <!-- End Col --> */}

    <div className="text-center">
      <img className="rounded-full w-24 h-24 mx-auto" src="https://images.unsplash.com/photo-1514846226882-28b324ef7f28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description"/>
      <div className="mt-2 sm:mt-4">
        <h3 className="font-medium text-gray-800 dark:text-gray-200">
          Amy Forren
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Product Designer
        </p>
      </div>
    </div>
    {/* <!-- End Col --> */}

    <div className="text-center">
      <img className="rounded-full w-24 h-24 mx-auto" src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description"/>
      <div className="mt-2 sm:mt-4">
        <h3 className="font-medium text-gray-800 dark:text-gray-200">
          Philip Williams
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Support Consultant
        </p>
      </div>
    </div>
    {/* <!-- End Col --> */}

    <div className="text-center">
      <img className="rounded-full w-24 h-24 mx-auto" src="https://images.unsplash.com/photo-1520409364224-63400afe26e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description"/>
      <div className="mt-2 sm:mt-4">
        <h3 className="font-medium text-gray-800 dark:text-gray-200">
          Brian Lofoten
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          UI/UX Designer
        </p>
      </div>
    </div>
    {/* <!-- End Col --> */}

    <div className="text-center">
      <img className="rounded-full w-24 h-24 mx-auto" src="https://images.unsplash.com/photo-1558507652-2d9626c4e67a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description"/>
      <div className="mt-2 sm:mt-4">
        <h3 className="font-medium text-gray-800 dark:text-gray-200">
          Jessica Dorsey
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Director of sales
        </p>
      </div>
    </div>
    {/* <!-- End Col --> */}

    <div className="text-center">
      <img className="rounded-full w-24 h-24 mx-auto" src="https://images.unsplash.com/photo-1521151716396-b2da27b1a19f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description"/>
      <div className="mt-2 sm:mt-4">
        <h3 className="font-medium text-gray-800 dark:text-gray-200">
          Nick Jackson
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          UI/UX Designer
        </p>
      </div>
    </div>
    {/* <!-- End Col --> */}
  </div>
  {/* <!-- End Grid --> */}

  {/* <!-- Card --> */}
  <div className="mt-12 flex justify-center">
    <div className="border border-gray-200 p-1.5 ps-5 rounded-full dark:border-gray-700">
      <div className="flex items-center gap-x-3">
        <span className="text-sm text-gray-500">Want to work with us?</span>
        <a className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-blue-600 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-blue-500 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
          We are hiring
          <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </a>
      </div>
    </div>
  </div>
  {/* <!-- End Card --> */}
</div>
{/* <!-- End Team --> */}
      </div>
        </div>
    );
};

export default AboutUs;