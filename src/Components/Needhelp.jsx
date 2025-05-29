import { FaPhoneAlt, FaEnvelope, FaHeadset } from "react-icons/fa";

const Needhelp = () => {
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        সাহায্য দরকার?
      </h2>

      <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://i.ibb.co/7SqD1Gb/help-desk-right.png"
            alt="Help Desk"
            className="w-full max-w-md mx-auto"
          />
        </div>

        {/* Contact Info */}
        <div className="w-full lg:w-1/2 bg-white border rounded p-8 space-y-6">
          <div className="flex items-center gap-4">
            <div className="bg-blue-500 text-white p-3 rounded-full">
              <FaPhoneAlt className="text-xl" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">কল করুন</h3>
              <p className="text-gray-600 text-sm">+8801603010103</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-green-500 text-white p-3 rounded-full">
              <FaEnvelope className="text-xl" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">ইমেইল করুন</h3>
              <p className="text-gray-600 text-sm">tour@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-purple-500 text-white p-3 rounded-full">
              <FaHeadset className="text-xl" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">হেল্পলাইন</h3>
              <p className="text-gray-600 text-sm">+990564847621</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Needhelp;
