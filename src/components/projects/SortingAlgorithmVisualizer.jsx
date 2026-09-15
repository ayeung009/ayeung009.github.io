// src/components/projects/SortingAlgorithmVisualizer.jsx
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUp, ChevronLeft } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export const SortingAlgorithmVisualizer = () => {
  const { isDark } = useTheme();
  const tags = ["FPGA", "Verilog", "DE1-SoC"];
  
  const techStack = [
    { name: "Verilog", icon: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_verilog.svg" },
    // Add more icons here as needed, matching the sources used in Home.jsx
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
          Sorting Algorithm Visualizer
        </h1>

        <div className="h-1 w-16 bg-sky-500 rounded-full mb-8" />
          

          {/* TLDR + Byline */}
<div className="mb-10">
  <p className="font-normal text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
    A fully functional bubble and selection sort visualizer built on the DE1-SoC FPGA using Verilog. Simulates real-time sorting algorithms with VGA-based bar-graph animations and live user input. Created by Andrew Yeung & Karma Namgyal.

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
            This was our final project for ECE241: Digital Systems. During brainstorming, my partner and I thought of many different ideas. Everything ranging from simple block games to complex maze games. Nothing seemed to “click” for us. That is when we realized we both had a huge passion for not only hardware, but software as well. That is when we posed the question: “What if we could simulate a software algorithm using only hardware?” Having taken fundamental programming courses in both first and second year, the idea of sorting algorithms instantly popped into our minds. That is when the Sorting Algorithm Visualizer came to life. 
        </p>

        <p className="text-gray-900 dark:text-gray-300 leading-relaxed text-base mb-10">
          The Sorting Algorithm Visualizer opens with a main menu with two options for the user: bubble or selection sort, chosen through the KEY buttons. Then, the user will be prompted to input an array of non-negative integers represented in binary through the manual switches on the DE1-SoC FPGA. This array of numbers will be loaded 1-by-1 onto the VGA monitor, as well as onto the 7-segment LEDs in their decimal representation. This way, users can verify that the numbers they entered in binary are actually correct.

        </p>

        <p className="text-gray-900 dark:text-gray-300 leading-relaxed text-base mb-10">
          Once fully loaded, the numbers will be displayed in correct order on the VGA monitor, representing the array just entered. Heights of each bar are sized relative to other numbers, with higher numbers representing a higher number. Users will then click the forward step button on the FPGA to simulate 1 iteration of the algorithm. The VGA monitor will correctly visualize and sync each swap for each iteration, and the FSM will ensure that when the array is correctly sorted, the next click will bring the user to the end screen. The entire simulation is shown in the video below. 
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
            <source src="demom.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        </div>


        {/* Image Embed */}
        <div className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
            System Block Diagram
        </h2>
        <img 
            src="SAV.png" 
            alt="Circuit diagram of the sorting visualizer" 
            className="w-full rounded-lg border border-gray-200 dark:border-gray-700"
        />
        </div>
        {/* Example video embed placeholder */}
        {/* <video controls className="w-full rounded-lg mb-10">
          <source src="/your-video.mp4" type="video/mp4" />
        </video> */}

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
          <span className="inline-flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-300 dark:text-gray-600 cursor-not-allowed">
            <ArrowLeft size={16} /> Previous Project
          </span>

            <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-sky-500 hover:text-white dark:hover:bg-sky-400 dark:hover:text-white transition-colors"
          >
            <ArrowUp size={16} /> Back to Top
          </button>

          <Link 
            to="/projects/rhythm-racer" 
            className="inline-flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-sky-500 dark:hover:bg-sky-400 dark:hover:text-white transition-colors"
          >
            Next Project <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
};