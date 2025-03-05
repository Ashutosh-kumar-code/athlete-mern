import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
const faqData = [
    {
      question: "What substances are banned?",
      answer: "The World Anti-Doping Agency (WADA) maintains a list of prohibited substances, including steroids, stimulants, and blood boosters.",
    },
    {
      question: "How are athletes tested?",
      answer: "Athletes undergo urine and blood tests, both in and out of competition, to detect prohibited substances.",
    },
    {
      question: "What happens if an athlete fails a test?",
      answer: "Failing a drug test can lead to suspensions, fines, disqualification from competitions, and damage to an athlete's reputation.",
    },
    {
      question: "Are there any exceptions for medications?",
      answer: "Athletes may apply for a Therapeutic Use Exemption (TUE) if they require a prohibited substance for medical reasons.",
    },
    {
      question: "How can athletes avoid accidental doping?",
      answer: "Athletes should consult professionals before taking supplements, regularly check the prohibited list, and use only approved medications.",
    },
  ];
  
const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Anti-Doping FAQs</h2>
      <p className="text-lg text-gray-600">
        Find answers to the most frequently asked questions about anti-doping policies and procedures.
      </p>
    </div>

    {/* Accordion Section */}
    <div className="mt-10 max-w-3xl mx-auto space-y-4">
      {faqData.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white text-gray-900 rounded-lg shadow-md overflow-hidden"
        >
          <button
            className="w-full flex justify-between items-center p-5 text-lg font-semibold hover:bg-blue-500 hover:text-white transition"
            onClick={() => toggleAccordion(index)}
          >
            {item.question}
            {openIndex === index ? <FaMinus /> : <FaPlus />}
          </button>

          {openIndex === index && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="p-5 text-gray-700 border-t border-gray-200"
            >
              {item.answer}
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  </section>
  )
}

export default FAQ
