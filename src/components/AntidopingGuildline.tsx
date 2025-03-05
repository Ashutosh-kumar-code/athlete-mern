import React from 'react'
import { motion } from "framer-motion";
import image from "../assets/images/about.jpg"
const AntidopingGuildline = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-purple-600 py-16 px-6 md:px-12">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      
      {/* Text Content */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-white"
      >
        <h2 className="text-4xl font-extrabold leading-tight">
          Stay Clean, Stay Ahead
        </h2>
        <p className="mt-4 text-lg opacity-90">
          We ensure fair play with strict antidoping policies. Know the rules, compete with integrity.
        </p>

        <ul className="mt-6 space-y-3">
          <li className="flex items-center gap-2">
            ✅ <span>Strict Testing Procedures</span>
          </li>
          <li className="flex items-center gap-2">
            ✅ <span>Banned Substances List</span>
          </li>
          <li className="flex items-center gap-2">
            ✅ <span>Fair Play & Ethical Guidelines</span>
          </li>
        </ul>

        <button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg shadow-md font-semibold hover:bg-blue-600 transition">
          Learn More
        </button>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
        className="flex justify-center"
      >
        <img
          src={image}
          alt="Antidoping"
          className="rounded-xl shadow-lg w-full max-w-sm md:max-w-md hover:scale-105 transition-transform"
        />
      </motion.div>

    </div>

    {/* Decorative Overlay */}
    <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
  </section>
  )
}

export default AntidopingGuildline
