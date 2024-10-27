import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    title: "Astronomical Object Detection for PSF Analysis",
    description: "Advanced object detection system for identifying Point Spread Function (PSF) in astronomical images using custom Faster R-CNN architecture. Developed at TUBITAK SPACE Technologies Research Institute.",
    technologies: ["PyTorch", "Computer Vision", "Deep Learning", "CUDA", "Photutils", "SEP", "OpenCV", "WandB"]
  },
  {
    title: "MKYZ: Machine Learning PIP Library",
    description: "Published pip library for simplifying machine learning tasks with comprehensive suite for data preprocessing, training, and visualization. Supports both supervised and unsupervised learning with extensive visualization capabilities.",
    technologies: ["Python", "scikit-learn", "pandas", "seaborn", "matplotlib", "Plotly", "Optuna"]
  },
  {
    title: "AILAYZER: AI-Powered Time Series Analysis",
    description: "Real-time multivariate time series forecasting model for stocks, cryptocurrencies, and currencies using LSTM encoder-decoder, attention mechanism, and transformer architecture.",
    technologies: ["Python", "TensorFlow", "Flask", "Go", "MongoDB", "PostgreSQL", "React Native", "Docker", "Kubernetes"]
  },
  {
    title: "Auto Jump Cut Editor",
    description: "Video editing software that automatically detects and removes silent sections using RNN with PyTorch and torchaudio for audio processing. Features AI-enhanced detection and hardware acceleration.",
    technologies: ["PyTorch", "ffmpeg", "PyQt5", "CUDA", "DirectML", "torchaudio"]
  },
  {
    title: "Image Processing and Classification",
    description: "Developed a comprehensive pipeline for processing GIF datasets and extracting advanced image features, with extensive classifier model evaluation.",
    technologies: ["Python", "OpenCV", "matplotlib", "pandas", "scikit-learn", "PCA"]
  },
  {
    title: "CartPole-V1 Deep Reinforcement Learning",
    description: "Implemented various deep reinforcement learning algorithms for complex decision-making problems, demonstrating practical applications in simulated environments.",
    technologies: ["Python", "TensorFlow", "OpenAI Gym", "Deep Learning"]
  },
  {
    title: "Hand Gesture Capturing",
    description: "Real-time hand gesture recognition system using computer vision techniques, enabling hands-free control interfaces with high accuracy.",
    technologies: ["Python", "OpenCV", "Machine Learning", "Computer Vision"]
  },
  {
    title: "Multi-Threaded Web Crawler",
    description: "Developed a high-performance web crawler with a WPF interface for configuring and monitoring the crawling process, featuring efficient data extraction and storage.",
    technologies: ["C#", ".NET", "WPF", "Entity Framework", "SQLite", "HTML Agility Pack", "Newtonsoft JSON"]
  }
];

export default function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-12"
    >
      <h2 className="text-3xl font-bold mb-8 font-geistMono dark:text-white">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h3 className="font-bold text-xl mb-3 dark:text-white">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}