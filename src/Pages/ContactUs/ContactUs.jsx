import { FaLocationArrow, FaMessage, FaPhone, FaSeedling, FaSkype } from "react-icons/fa6";
import coverImg from "../../assets/contact.jpg";
import Cover from "../../Components/Cover";

const ContactUs = () => {
  return (
    <div>
      <Cover
        img={coverImg}
        title="Contact Us"
        subtitle="We'd love to hear from you!"
      ></Cover>
      <div className="h-auto my-11 flex mx-10 text-black gap-10 lg:mx-36">
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
          <form className="shadow-2xl shadow-blue-500 p-10">
            <div className="">
              <div className="flex gap-5 mx-auto justify-between">
                <div className="w-full">
                  <p className="mb-2">Email</p>
                  <input className="flex h-[48px] w-full rounded-md border border-neutral-400 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-black/60 outline-none" placeholder="email" type="email" />
                </div>
                <div className="w-full">
                  <p className="mb-2">Your Name</p>
                  <input className="flex h-[48px] w-full rounded-md border border-neutral-400 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-black/60 outline-none" placeholder="full name/number" type="text" />
                </div>
              </div>
              <div className="my-5">
                <p className="mb-2">Subject</p>
                <input className="flex h-[48px] w-full rounded-md border border-neutral-400 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-black/60 outline-none" placeholder="subject line" type="text" />
              </div>
              <div>
                <p className="mb-2">Message</p>
                <textarea
                  className="flex h-[88px] w-full rounded-md border border-neutral-400 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-black/60 outline-none"
                  name=""
                  placeholder="type full message...."
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </div>
            <button
              type="button"
              className="py-3 mt-5 text-white justify-center flex mx-auto px-4  items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600  w-full"
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
