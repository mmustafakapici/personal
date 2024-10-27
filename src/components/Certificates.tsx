import React from 'react';
import { motion } from 'framer-motion';

const certificates = [
  "Foundations of Project Management, Google",
  "Machine Learning with Python, IBM",
  "Yüksek Trafikli Yazılım Mimarisi, Teedo",
  "LLMOps & ML Deployment: Bring LLMs and GenAI to Production, Udemy",
  "LLMs Mastery: Complete Guide to Transformers & Generative AI, Udemy",
  "(100+ Saat) Aranan Programcı Olma Kamp Kursu| Python,Java,C#, Udemy",
  "A-Z | Projelerle Yapay Zeka ve Bilgisayarlı Görü | +20 Saat, Udemy",
  "Deep Learning A-Z | Python ile Derin Öğrenme, Udemy",
  "Yazılım Test Uzmanlığı Eğitimi: Sıfırdan İleri Seviye, Udemy",
  "Working with Microservices in Go (Golang), Udemy",
  "Azure DevOps: Sıfırdan İleri Seviye, Udemy",
  "Quantum Programlama: Sıfırdan İleri Seviyeye, Udemy",
  "Hızlandırılmış React Kursu (Türkçe-2024-Güncel), Udemy",
  "React Native - IOS & Android Mobil Uygulama Geliştir 2023, Udemy",
  "Keras İle Derin Öğrenmeye Giriş, BTK Akademi",
  "Python ile Makine Öğrenmesi, BTK Akademi",
  "R ile Veri Bilimine Giriş, BTK Akademi",
  "Veri Bilimi ve Makine Öğrenmesi Atölyesi - Bootcamp 2022, BTK Akademi",
  "Veri Bilimi İçin Python ve Tensorflow, BTK Akademi",
  "Intro to programming, Kaggle",
  "Python, Kaggle",
  "Pandas, Kaggle",
  "Intro to SQL, Kaggle",
  "Intro to Machine Learning, Kaggle",
  "Intermediate Machine Learning, Kaggle",
  "Feature Engineering, Kaggle",
  "Data Visualization, Kaggle",
  "Advanced SQL, Kaggle",
  "Intro to Deep Learning, Kaggle",
  "Computer Vision, Kaggle",
  "Time Series, Kaggle",
  "Intro To AI Ethics, Kaggle"
];

export default function Certificates() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-12"
    >
      <h2 className="text-3xl font-bold mb-8 font-geistMono dark:text-white">Certificates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
          >
            <p className="text-gray-700 dark:text-gray-300">{cert}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}