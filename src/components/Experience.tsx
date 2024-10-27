import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Computer Vision Intern",
    company: "TUBITAK SPACE Technologies Research Institute",
    date: "July 2024 – September 2024",
    description: "Developed an astronomical object detection system specialized in Point Spread Function (PSF) analysis, enhancing the precision of source identification in celestial images. Utilized a custom Faster R-CNN model with tailored PSF layers and Hough line detection."
  },
  {
    title: "Intern",
    company: "Kardelen Yazılım, Mersin",
    date: "July 2023 – August 2023",
    description: "Contributed to the application module development of a software team that works on Entity Framework & MSSQL Server."
  }
];

export default function Experience() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-12"
    >
      <h2 className="text-3xl font-bold mb-8 font-geistMono dark:text-white">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="border-l-2 border-gray-200 dark:border-gray-700 pl-4"
          >
            <h3 className="font-bold text-xl mb-1 dark:text-white">{exp.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">{exp.company}</p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">{exp.date}</p>
            <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}