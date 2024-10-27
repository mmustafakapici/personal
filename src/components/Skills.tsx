import React from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ skill, level }: { skill: string; level: number }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="font-geistMono text-sm dark:text-white">{skill}</span>
      <span className="font-geistMono text-sm dark:text-white">{level}/5</span>
    </div>
    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${(level / 5) * 100}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-full bg-black dark:bg-white rounded-full"
      />
    </div>
  </div>
);

export default function Skills() {
  const skills = [
    { name: "TensorFlow", level: 4 },
    { name: "PyTorch", level: 4 },
    { name: "Machine Learning", level: 4 },
    { name: "Deep Learning", level: 4 },
    { name: "Computer Vision", level: 4 },
    { name: "Image Processing", level: 4 },
    { name: "Python", level: 4 },
    { name: "Natural Language Processing", level: 3 },
    { name: "Data Analysis", level: 3 },
    { name: "C# .NET", level: 3 },
    { name: "Go", level: 3 },
    { name: "QA Software Testing", level: 3 },
    { name: "Backend Development", level: 3 },
    { name: "Software Architecture Design", level: 3 },
    { name: "DevOps", level: 2 },
    { name: "Frontend Development", level: 2 }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-12"
    >
      <h2 className="text-3xl font-bold mb-8 font-geistMono dark:text-white">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill) => (
          <SkillBar key={skill.name} skill={skill.name} level={skill.level} />
        ))}
      </div>
    </motion.section>
  );
}