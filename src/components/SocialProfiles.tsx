import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Globe, Database } from 'lucide-react';

export default function SocialProfiles() {
  const profiles = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/mmustafa-kapici",
      username: "mmustafa-kapici"
    },
    {
      icon: <Database className="w-5 h-5" />,
      name: "Kaggle",
      url: "https://kaggle.com/mustafakapici",
      username: "mustafakapici"
    },
    {
      icon: <Github className="w-5 h-5" />,
      name: "GitHub",
      url: "https://github.com/mmustafakapici",
      username: "mmustafakapici"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      name: "Website",
      url: "https://mustafakapici.software",
      username: "mustafakapici.software"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-12"
    >
      <h2 className="text-3xl font-bold mb-8 font-geistMono dark:text-white">Social Profiles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {profiles.map((profile, index) => (
          <motion.a
            key={index}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center space-x-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="text-gray-600 dark:text-gray-300">{profile.icon}</div>
            <div>
              <p className="font-medium dark:text-white">{profile.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{profile.username}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}