import { useState } from 'react';
import { Mail, Linkedin, Github, Instagram, ExternalLink, Terminal, Trophy, Layers, ArrowUpRight, Copy, Check, Globe, Sparkles, Hash } from 'lucide-react';
import { useTheme } from "../../context/ThemeContext";

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const { isDark } = useTheme();
  const email = "aandrew.yeung@mail.utoronto.ca";

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section className="min-h-screen pt-24 pb-24 px-6 bg-[#fbfbfb] dark:bg-gray-900 font-cantata relative overflow-hidden transition-colors">
        {/* Background Image - Absolute positioned, low opacity */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: isDark
            ? "linear-gradient(to top, rgba(17, 24, 39, 0) 0%, rgba(17, 24, 39, 1) 100%),url('uoft.jpg')"
            : "linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%),url('uoft.jpg')", 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: isDark ? 0.18 : 0.29, 
          filter: isDark ? 'grayscale(50%) brightness(0.7)' : 'grayscale(30%)',
        }}
      />



      <div className="absolute inset-0 z-0 opacity-[0.02] dark:opacity-[0.04] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Scaled Down Header */}
        <div className="mt-15 mb-7 font-cantata">
            <span className="block mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
                Andrew Yeung
            </span>
            
            <h2 className="text-4xl font-black text-gray-900 dark:text-gray-100 md:text-5xl">
                Let's Connect
            </h2>
            
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w">
              Below are my various profiles and accounts where you can find my latest work, 
              ongoing projects, and updates on what I'm currently building and learning. 
              I'm always open to connecting and discussing ideas or collaborations.



            </p>
            </div>

        {/* Tight Bento Grid - Added negative margin-x to pull ONLY the grid wider than the text container */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:-mx-6 lg:-mx-5">
          
          {/* Email Block - Scaled padding and text */}
          <div className="md:col-span-3 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-6 rounded-[24px] flex flex-col justify-between hover:shadow-lg transition-all group relative">
            <div className="absolute top-0 right-0 p-4 flex gap-2">
                <button onClick={handleCopy} className="w-9 h-9 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-400 dark:text-gray-300 hover:text-sky-500 transition-all">
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                </button>
                <a href={`mailto:${email}`} className="w-9 h-9 bg-sky-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all shadow-md">
                    <Mail size={16} />
                </a>
            </div>
            <div>
                <span className="text-[10px] font-black text-gray-500 dark:text-gray-400 uppercase tracking-widest block mb-1">Email</span>
                <span className="text-xl md:text-2xl font-black text-gray-900 dark:text-gray-100 break-all">{email}</span>
            </div>
            <div className="mt-1 text-sky-500 dark:text-sky-400 font-bold text-[11px]">
                {copied ? "Copied to clipboard" : "Send an inquiry"}
            </div>
          </div>

          {/* LinkedIn - Compact */}
          
          <a href="https://linkedin.com/in/ayeung009" target="_blank" className="bg-[#0077b5] p-6 rounded-[24px] text-white flex flex-col justify-between hover:brightness-140 transition-all">
            <Linkedin size={24} />
            <span className="font-black text-base mt-2">LinkedIn</span>
          </a>

          {/* GitHub - Compact */}
          <a href="https://github.com/ayeung009" target="_blank" className="bg-black p-6 rounded-[24px] text-white flex flex-col justify-between hover:scale-[1.02] transition-transform">
            <Github size={24} />
            <span className="font-black text-base mt-2">GitHub</span>
          </a>

          {/* DMOJ Block */}
<a href="https://dmoj.ca/user/ayay9" target="_blank" className="md:col-span-2 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-6 rounded-[24px] flex items-center justify-between hover:border-sky-500 transition-colors group">
  <div className="flex items-center gap-4">
      <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center overflow-hidden">
          {/* Replace 'trophy-icon.png' with your actual filename */}
          <img 
            src="logo.png" 
            alt="DMOJ" 
            className="w-6 h-6 object-contain" 
          />
      </div>
      <div>
          <span className="text-[9px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest block leading-none mb-1">Competitive Programming</span>
          <span className="text-lg font-black text-gray-900 dark:text-gray-100  leading-none">DMOJ Profile</span>
      </div>
  </div>
  <ExternalLink size={16} className="text-gray-200 dark:text-gray-600 group-hover:text-sky-500" />
</a>
          {/* Instagram Square */}
         {/* Devpost Block */}
          <a 
            href="https://devpost.com/andrewyeung009" 
            target="_blank" 
            className="md:col-span-1 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-6 rounded-[24px] flex flex-col justify-between hover:border-[#003E54] transition-colors group"
          >
             <Layers className="text-gray-300 dark:text-gray-600 group-hover:text-[#003E54]" size={20} />
             <span className="font-black text-gray-900 dark:text-gray-100 text-sm">Devpost</span>
          </a>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t-2 border-gray-200 dark:border-gray-700">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                Last updated on Sep 13, 2026
            </p>
        </div>
      </div>
    </section>
  );
};