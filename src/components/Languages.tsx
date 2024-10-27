import React from 'react';
import { motion } from 'framer-motion';

const LanguageLevel = ({ level }: { level: number }) => (
  <div className="flex space-x-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        className={`text-lg ${
          star <= level ? 'text-black dark:text-white' : 'text-gray-300 dark:text-gray-600'
        }`}
      >
        ★
      </span>
    ))}
  </div>
);

export default function Languages() {
  const languages = [
    { name: "English", level: 3 },
    { name: "Turkish", level: 5 }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-12"
    >
      <h2 className="text-3xl font-bold mb-8 font-geistMono dark:text-white">Languages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {languages.map((lang, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex justify-between items-center"
          >
            <span className="font-medium dark:text-white">{lang.name}</span>
            <LanguageLevel level={lang.level} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}