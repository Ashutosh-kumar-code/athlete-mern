import React from "react";
import { motion } from "framer-motion";
import bannerimage from "../assets/images/bannerimage.webp"

const Banner: React.FC = () => {
  return (
    <div className="relative w-full bg-blue-500 text-white mt-12  flex  items-center justify-center flex-col sm:flex-row   gap-20  p-6 md:p-10 lg:p-16 ">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl "
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold ">
        Welcome to Anti-Doping Awareness
        </h1>
        <p className="my-4 text-sm sm:text-base md:text-lg lg:text-xl">
        We are committed to promoting fair play, integrity, and clean sports through education and strict anti-doping regulations. Stay informed and play fair!
        </p>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition-all"
        >
          Get Involved
        </motion.button>
      </motion.div>
      <div className="flex justify-end">
      <motion.img 
        src={bannerimage}
        alt="Banner Image" 
        className=" w-full py-5  sm:w-[80%] xl:w-[50%] opacity-80"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      />
      </div>
     
    </div>
  );
};

export default Banner;
