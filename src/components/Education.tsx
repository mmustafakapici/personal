import React from 'react';
import { motion } from 'framer-motion';

export default function Education() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-12"
    >
      <h2 className="text-3xl font-bold mb-8 font-geistMono dark:text-white">Education</h2>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
      >
        <h3 className="font-bold text-xl mb-2 dark:text-white">Computer and Software Engineering</h3>
        <p className="text-gray-600 dark:text-gray-400">Toros University, Mersin</p>
        <p className="text-sm text-gray-500 dark:text-gray-500">September 2019 – June 2024</p>
      </motion.div>
    </motion.section>
  );
}