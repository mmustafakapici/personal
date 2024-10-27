import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Flag, Car, Heart } from 'lucide-react';

export default function PersonalInfo() {
  const info = [
    { icon: <MapPin className="w-5 h-5" />, label: "Address", value: "Konya" },
    { icon: <Flag className="w-5 h-5" />, label: "Nationality", value: "Turkish" },
    { icon: <Car className="w-5 h-5" />, label: "Driving License", value: "Available" },
    { icon: <Heart className="w-5 h-5" />, label: "Hobbies", value: "Programming, Machine Learning, Research" }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-12"
    >
      <h2 className="text-3xl font-bold mb-8 font-geistMono dark:text-white">Personal Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {info.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center space-x-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
          >
            <div className="text-gray-600 dark:text-gray-300">{item.icon}</div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
              <p className="font-medium dark:text-white">{item.value}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}