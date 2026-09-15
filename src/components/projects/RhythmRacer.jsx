// src/components/projects/RhythmRacer.jsx
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUp, ChevronLeft } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { useState } from "react";
const ImageGallery = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
      <img 
        src={images[current]} 
        alt={`Gallery image ${current + 1}`} 
        className="w-full h-auto object-cover"
      />

      {/* Prev Button */}
      <button
        onClick={prevImage}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Next Button */}
      <button
        onClick={nextImage}
        aria-label="Next image"
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
      >
        <ArrowRight size={20} />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to image ${index + 1}`}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === current ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
export const RhythmRacer = () => {
  const { isDark } = useTheme();
  const tags = ["C", "RISC-V"];

  const techStack = [
    { name: "C", icon: "https://devicon-website.vercel.app/api/c/original.svg" },
    { name: "RISC-V", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/riscv.svg" }
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
          Rhythm Racer
        </h1>

        <div className="h-1 w-16 bg-sky-500 rounded-full mb-8" />

        {/* TLDR + Byline */}
        <div className="mb-10">
          <p className="font-normal text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
            Rhythm Racer: A musical speed typing game where users type song lyrics as fast as possible. Developed by Eason Zhu & Andrew Yeung.
          </p>

          <div className="flex flex-wrap items-center gap-x-2 text-sm font-normal text-gray-500 dark:text-gray-400">
            <span>Andrew Yeung</span>
            <span>·</span>
            <span>Sep 2026</span>
            <span>·</span>
            <span>5 min read</span>
          </div>
        </div>

        {/* Description */}
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
          Overview
        </h2>
        <p className="text-gray-900 dark:text-gray-300 leading-relaxed text-base mb-10">
          This was our final project for ECE243: Computer Organization. It is inspired by the popular typing game monkeytype, where users have to type a paragraph as fast as possible. However, the premise of Rhythm Racer is completely different. Instead of typing a paragraph composed of random words, we give the user real song lyrics to actual existing songs. These lyrics appear line by line, and are synced to the actual song playing on the speaker. Rhythm Racer was implemented using C on a RISC-V processor, with the DE1-SoC FPGA handling the VGA display, PS/2 keyboard input, and audio playback.

        </p>

        <p className="text-gray-900 dark:text-gray-300 leading-relaxed text-base mb-10">
          Rhythm Racer has a ton of features, and it was extremely fun and exciting to implement them. For starters, we implemented live WPM tracking, which displays your words per minute as you type. This is accompanied by a heads up display containing the live score, accuracy, and multiplier, which are key metrics for the game. In addition, the current word that you are supposed to type is highlighted in purple, and any mistakes you type are highlighted in red. This allowed for better user-interface and an overall more seamless playing experience. 

        </p>

        

        {/* Video Embed */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
            Demo Video
          </h2>
          <video 
            controls 
            playsInline
            className="w-full rounded-lg border border-gray-200 dark:border-gray-700"
          >
            <source src="RRyoutube.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Image Embed */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
            System Block Diagram
          </h2>
          <img 
            src="RR.png" 
            alt="Diagram of Rhythm Racer" 
            className="w-full rounded-lg border border-gray-200 dark:border-gray-700"
          />
        </div>


       {/* Image Gallery */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
          Gallery
        </h2>
        <ImageGallery images={["R_1.png", "R_2.png"]} />
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
            to="/projects/sorting-algorithm-visualizer" 
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

          <Link 
            to="/projects/deep-learning-circuit-assistant" 
            className="inline-flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-sky-500 dark:hover:bg-sky-400 dark:hover:text-white transition-colors"
          >
            Next Project <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
};