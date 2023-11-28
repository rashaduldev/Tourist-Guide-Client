import { FaLocationArrow, FaMessage, FaPhone, FaSeedling, FaSkype } from "react-icons/fa6";
import coverImg from "../../assets/bgimg.jpg";
import Cover from "../../Components/Cover";

const ContactUs = () => {
  return (
    <div>
      <Cover
        img={coverImg}
        title="Contact Us"
        subtitle="We'd love to hear from you!"
      ></Cover>
      <div className="h-auto my-11 flex mx-10 text-white gap-10">
        <div className="flex-1 items-center">
          <p className="italic">Would like to talk?</p>
          <h2 className="text-3xl my-6">CONTACT DETAILS</h2>
          <p className="my-8">
            If you have a story to share or a question that has not been
            answered on our website, please get in touch with us via contact
            details listed below or fill in the form on the right.
          </p>
          <div className="flex items-center gap-3 text-xl mb-4">
            <FaLocationArrow></FaLocationArrow>
            <p> 777 Franklin St, San Francisco</p>
          </div>
          <div className="flex items-center gap-3 text-xl mb-4">
            <FaPhone></FaPhone>
            <p> +1 420-240-6000</p>
          </div>
          <div className="flex items-center gap-3 text-xl mb-4">
            <FaMessage></FaMessage>
            <p>contact@adventuretours.com</p>
          </div>
          <div className="flex items-center gap-3 text-xl mb-4">
            <FaSkype></FaSkype>
            <p>adventure.tours</p>
          </div>
        </div>
        <div className="flex-1">
          <form className="shadow-2xl shadow-blue-500">
            <div className="">
              <div className="flex gap-5 mx-auto justify-between">
                <div className="w-full">
                  <p>Email</p>
                  <input className="w-full h-10 rounded" type="email" />
                </div>
                <div className="w-full">
                  <p>Your Name</p>
                  <input className="w-full h-10 rounded" type="text" />
                </div>
              </div>
              <div>
                <p>Subject</p>
                <input className="w-full h-10 rounded" type="text" />
              </div>
              <div>
                <p>Message</p>
                <textarea
                  className="w-full"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </div>
            <button
              type="button"
              className="py-3 px-4 flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600  w-full"
            >
              Send
              <FaSeedling></FaSeedling>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
