// src/components/projects/DeepLearningAssistant.jsx
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUp, ChevronLeft } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export const DeepLearningAssistant = () => {
  const { isDark } = useTheme();
  const tags = ["Python", "Deep Learning", "CNNs", "Transformers"];

  const techStack = [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "PyTorch", icon: "https://devicon-website.vercel.app/api/pytorch/original.svg" },
  ];
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="min-h-screen w-full bg-white dark:bg-gray-900 transition-colors font-cantata relative overflow-hidden">
      
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: isDark
            ? "linear-gradient(to top, rgba(17, 24, 39, 0) 0%, rgba(17, 24, 39, 1) 100%),url('skylineP.jpg')"
            : "linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%),url('skylineP.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: isDark ? 0.16 : 0.16,
          filter: isDark ? 'grayscale(20%) brightness(0.7)' : 'grayscale(20%)',
        }}
      />

      {/* --- MESH GRADIENT BLOBS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-30%] left-[-10%] w-[600px] h-[600px] bg-sky-500/15 dark:bg-sky-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-purple-400/10 dark:bg-purple-400/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="px-6 md:px-12 lg:px-24 py-24 max-w-5xl mx-auto relative z-10">

        {/* Back to Projects */}
        <Link 
          to="/projects" 
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors mb-10"
        >
          <ChevronLeft size={16} /> Back to Projects
        </Link>

        {/* Tag Pills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 text-[11px] font-bold uppercase tracking-widest rounded-full border border-sky-100 dark:border-sky-800"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          A Deep Learning Assistant for Digital Circuit Design
        </h1>

        <div className="h-1 w-16 bg-sky-500 rounded-full mb-8" />

        {/* TLDR + Byline */}
        <div className="mb-10">
          <p className="font-normal text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
            After taking ECE241 and ECE243, I have since developed a passion and interest for digital circuits. In the summer of 2026 after second year, I took APS360: Applied Fundamentals of Deep Learning. For the course project, I created a Deep Learning Assistant for Digital Circuit Design, a tool that generates an equivalent Boolean expression for a digital circuit schematic. 

          </p>

          <div className="flex flex-wrap items-center gap-x-2 text-sm font-normal text-gray-500 dark:text-gray-400">
            <span>Andrew Yeung</span>
            <span>·</span>
            <span>Aug 2026</span>
            <span>·</span>
            <span>7 min read</span>
          </div>
        </div>

        {/* Description */}
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
          Overview
        </h2>
        <p className="text-gray-900 dark:text-gray-300 leading-relaxed text-base mb-10">
          The goal of this project was to combine two of my passions: digital electronics and machine learning. At first, I wanted to create a simple CNN model to classify individual logic gates. I would send the model an image of a logic gate (OR, AND, etc.), and it would try to classify it correctly. The problem was that this was too simple for the project scope. To make it more complex, I proposed the following. 

        </p>

        <p className="text-gray-900 dark:text-gray-300 leading-relaxed text-base mb-10 italic">
Instead of classifying a single logic gate, the model would try to predict an entire equivalent Boolean expression for a digital logic circuit composed of many logic gates. The full problem statement is as follows: 

        </p>

        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
  Problem Statement
</h2>
<p className="text-gray-900 dark:text-gray-300 leading-relaxed text-base mb-10">
  Digital circuits are a fundamental building block of modern computing, enabling technologies such as CPUs, FPGAs, and ASICs that power everything from artificial intelligence to robotics. At their core, digital circuits are composed of logic gates that perform Boolean operations such as AND, OR, and NOT, and can be interconnected to form increasingly complex functions. The goal of this project is to derive the equivalent Boolean expression from an image of a digital circuit composed of logic gates. This can be useful for those in the digital design industry to efficiently derive Boolean expressions, as manual translation can be tedious and prone to human error. Machine learning is suitable for this task as digital circuits have a structured, graph-like nature. As such, neural networks can learn to classify logic gates and wire topology from structured circuit image data. The high-level functionality of this project is shown below in Figure 1. As illustrated, the model takes an image of a digital circuit as the input and produces the Boolean expression as the output.
</p>

        

        {/* Image Embed */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
            System Block Diagram (Figure 1)
          </h2>
          <img 
            src="DEEP_1.png" 
            alt="Diagram of the Deep Learning Assistant" 
            className="w-full rounded-lg border border-gray-200 dark:border-gray-700"
          />
        </div>


         {/* Image Embed */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
            Model Architecture
          </h2>
          <img 
            src="model_arch.png" 
            alt="Diagram of the Deep Learning Assistant" 
            className="w-full rounded-lg border border-gray-200 dark:border-gray-700"
          />
        </div>
        {/* Tech Stack Icons */}
        <div className="mb-10">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-800 dark:text-gray-200 mb-4">
            Built With
          </h2>
          <div className="flex flex-wrap gap-6 items-center bg-white/15 dark:bg-white/5 backdrop-blur-md border border-white/90 dark:border-white/10 p-4 rounded-3xl w-fit shadow-2xl">
            {techStack.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center gap-1">
                <img src={tech.icon} className="w-8 h-8" alt={tech.name} />
                <span className="text-[12px] text-gray-800 dark:text-gray-200 font-bold">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Prev / Next Navigation */}
        <div className="flex items-center justify-between mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
          <Link 
            to="/projects/rhythm-racer" 
            className="inline-flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-sky-500 dark:hover:bg-sky-400 dark:hover:text-white transition-colors"
          >
            <ArrowLeft size={16} /> Previous Project
          </Link>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-sky-500 hover:text-white dark:hover:bg-sky-400 dark:hover:text-white transition-colors"
          >
            <ArrowUp size={16} /> Back to Top
          </button>

          <span className="inline-flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-300 dark:text-gray-600 cursor-not-allowed">
            Next Project <ArrowRight size={16} />
          </span>
        </div>

      </div>
    </section>
  );
};