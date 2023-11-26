import bgimg from '../assets/bgimg.jpg';
import { useTypewriter ,Cursor} from 'react-simple-typewriter'
// import hero from '../assets/hero-app-mockup-silver.png';
import { motion } from "framer-motion"
// import { fadeIn } from "../variants"


const Slider = () => {

  const [text] = useTypewriter({
    words: ['Affordably'],
    loop: 0
  })
  const [text2] = useTypewriter({
    words: ['eaque ipsa quae ab illo inventore'],
    loop: 0
  })
  const sliderContainerStyle = {
    backgroundImage: `url(${bgimg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    height: '100vh',
    position: 'relative',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  };

  const textStyle = {
    color: 'white',
    position: 'relative', // Add this to bring the text to the front
    zIndex: 1, // Add this to make the text appear above the overlay
  };

  return (
    <div className="relative mx-10 rounded-xl my-5" style={sliderContainerStyle}>
      <div className='rounded-xl' style={overlayStyle}></div>
      <div className="flex flex-auto justify-center items-center p-4 md:p-5 h-full" style={textStyle}>
        <div className="text-center">
          <motion.h3 
            // variants={fadeIn("down",0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once:false,amount:0.7 }}
          
          className="text-5xl font-bold text-white">
          Get Where You Need to Go, <br />Safely and  {text} <Cursor cursorColor='red' />
          </motion.h3>
          <motion.p 
            // variants={fadeIn("up",0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once:false,amount:0.7 }}
          className="mt-8 text-white">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, <br /> totam rem aperiam, {text2}
          </motion.p>
         <div className='flex gap-5 justify-center mt-10'>
         <motion.button 
        //    variants={fadeIn("right",0.4)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once:false,amount:0.7 }}
         
         type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
         Book Our Ride
            </motion.button>
            {/* <button className='btn'>Book Our Ride </button> */}
            <motion.button 
            //   variants={fadeIn("left",0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once:false,amount:0.7 }}
            type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-gray-500 hover:text-white hover:bg-gray-500 hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 transition-all text-sm  dark:hover:bg-gray-600 dark:border-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-800">
            Learn More
            </motion.button>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
