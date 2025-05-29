/* eslint-disable react/no-unescaped-entities */
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1f2937] text-white py-12 mt-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

          {/* আমাদের সম্পর্কে */}
          <div>
            <h3 className="text-xl font-bold mb-4">আমাদের সম্পর্কে</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              আমরা বিশ্বজুড়ে স্মরণীয় ভ্রমণের অভিজ্ঞতা প্রদান করি। আমাদের সাথে আপনার
              পরবর্তী অ্যাডভেঞ্চারে যোগ দিন এবং স্মৃতি তৈরি করুন যা সারাজীবন মনে থাকবে।
            </p>
          </div>

          {/* গুরুত্বপূর্ণ লিংক */}
          <div>
            <h3 className="text-xl font-bold mb-4">গুরুত্বপূর্ণ লিংক</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  হোম
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  গন্তব্য সমূহ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  ট্যুর প্যাকেজ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  যোগাযোগ করুন
                </a>
              </li>
            </ul>
          </div>

          {/* যোগাযোগ */}
          <div>
            <h3 className="text-xl font-bold mb-4">যোগাযোগ</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>১২৩ ট্রাভেল রোড, অ্যাডভেঞ্চার সিটি</li>
              <li>
                <a href="tel:+8801603010103" className="hover:text-white transition">
                  +৮৮০১৬০৩০১০১০৩
                </a>
              </li>
              <li>
                <a href="mailto:info@travel.com" className="hover:text-white transition">
                  info@travel.com
                </a>
              </li>
            </ul>
          </div>

          {/* ফলো করুন */}
          <div>
            <h3 className="text-xl font-bold mb-4">ফলো করুন</h3>
            <div className="flex space-x-4 text-lg">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaYoutube />
              </a>
            </div>
          </div>

        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; ২০২৫ ট্রাভেল কো. সর্বস্বত্ব সংরক্ষিত।
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
