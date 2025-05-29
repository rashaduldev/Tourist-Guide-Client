import { FaUserTie, FaStar, FaMapMarkedAlt, FaShieldAlt } from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaUserTie className="text-3xl text-white" />,
      title: "অভিজ্ঞতা",
      description: "১০+ বছরের অভিজ্ঞতা সম্পন্ন ট্যুর গাইড ও টিম, যারা সবকিছু সুসংগঠিতভাবে পরিচালনা করে।",
      bg: "bg-blue-500",
    },
    {
      icon: <FaStar className="text-3xl text-white" />,
      title: "মানসম্মত সার্ভিস",
      description: "হোটেল, খাবার ও ট্রান্সপোর্ট সব কিছুতেই আমরা নিশ্চিত করি প্রিমিয়াম মানের সেবা।",
      bg: "bg-green-500",
    },
    {
      icon: <FaMapMarkedAlt className="text-3xl text-white" />,
      title: "দক্ষ গাইড",
      description: "লোকাল ও অভিজ্ঞ ট্যুর গাইড যারা গন্তব্য সম্পর্কে ভালোভাবে জানে।",
      bg: "bg-purple-500",
    },
    {
      icon: <FaShieldAlt className="text-3xl text-white" />,
      title: "নিরাপত্তা",
      description: "সেফটি ফার্স্ট – আমরা যাত্রীদের নিরাপত্তাকে সর্বোচ্চ অগ্রাধিকার দিয়ে থাকি।",
      bg: "bg-red-500",
    },
  ];

  return (
    <div className="py-16 md:my-10 my-0 px-4 md:px-0 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        কেন আমাদের নির্বাচন করবেন?
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded border duration-300 text-center"
          >
            <div
              className={`w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-4 ${feature.bg}`}
            >
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
