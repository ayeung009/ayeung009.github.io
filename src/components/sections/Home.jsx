// 1. Import Simple Icons (for GitHub)
import { Link } from "react-router-dom"; // 1. Don't forget the import!
import { SiGithub } from '@icons-pack/react-simple-icons';

// 2. Import Lucide Icons (for Map, School, Mail, and LinkedIn)
import { MapPin, GraduationCap, Mail, Linkedin } from 'lucide-react';


export const Home = () => {
  return (
    // Changed px-60 to responsive padding: px-6 on mobile, px-12 on tablet, px-40/60 on desktop
    <section id="home" className="min-h-screen flex items-start justify-center relative px-6 md:px-12 lg:px-40 xl:px-60 pt-20 md:pt-32 lg:pt-40 overflow-hidden pb-20">
      
      {/* --- MESH GRADIENT BLOBS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-55%] left-[-15%] w-[600px] h-[600px] bg-sky-500/15 rounded-full blur-[120px] moving-blob"></div>
        <div className="absolute top-[50%] right-[-5%] w-[400px] h-[400px] bg-purple-400/8 rounded-full blur-[80px] moving-blob delay-4"></div>
      </div>

      {/* Background Image - Absolute positioned, low opacity */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%),url('skyline.jpg')", 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.18, 
          filter: 'grayscale(30%)',
        }}
      />

      <div className="flex flex-col lg:flex-row items-center lg:items-start max-w-7xl w-full gap-12 z-10 relative">
        
        {/* Left: Text */}
        
        <div className="w-full lg:w-7/8 text-left space-y-4 order-2 lg:order-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-cantata text-gray-800">
            Hi, I'm Andrew Yeung</h1>
          
          <p className="text-gray-600 text-base md:text-base font-cantata">
              I am an undergraduate student in the{" "}
              <a
                  href="https://www.ece.utoronto.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-500 font-semibold hover:underline underline-offset-4"
              >
                  Electrical & Computer Engineering
              </a>{" "}
              program at the University of Toronto minoring in Artificial Intelligence and Engineering Business. 
              I am a highly motivated student 
              and was recently ranked among the <span className="text-gray-900">Top 30</span> students by GPA within the ECE department. 
          </p>

          <p className="text-gray-600 text-base md:text-base font-cantata">
              My interests include <span className="font-bold text-gray-900">FPGA development</span>, <span className="font-bold text-gray-900">digital hardware design</span>, 
              <span className="font-bold text-gray-900"> machine learning</span>, and <span className="font-bold text-gray-900">firmware development</span>. In particular, I am interested in 
              hardware and software co-design and building efficient, performance-critical systems. I'm always eager to learn new technologies and deepen 
              my understanding of how things work.
          </p>

          <p className="text-gray-600 text-base md:text-base font-cantata">
              In my free time, I enjoy solving{" "}
              <a
                  href="https://www.worldcubeassociation.org/persons/2020YEUN01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-800 font-semibold hover:underline underline-offset-4"
              >
                  Rubik's cubes
              </a>{" "}
              competitively, listening to my {""}
              <a
                  href="https://open.spotify.com/user/9c0lf02e5oo2zr71m0ro4w1gj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-800 font-semibold hover:underline underline-offset-4"
              >
                  favourite music
              </a>{""}
              , and playing basketball — I am currently working toward my first dunk on a 10-foot rim!
          </p>

           <div className="mt-9 flex flex-wrap gap-5 font-cantata"> 
              <Link
                  to="/projects"
                  className="px-6 py-2 bg-black text-white rounded hover:bg-gray-600 transition"
              >
                  See My Work
              </Link>
              <a
                href="Andrew_Yeung_Resume.pdf" // Ensure the file name matches exactly (case-sensitive)
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-black text-white rounded hover:bg-gray-600 transition"
              >
                View Resume
              </a>
          </div> 

          {/* Technical Skills Bar */}
<div className="mt-8 flex flex-col gap-4 font-cantata">
  <div className="flex items-center gap-3">
    <h1 className="text-4xl md:text-xl font-bold mb-0 font-cantata text-gray-800">
            Technical Skills</h1>
  </div>
  
  <div className="flex flex-wrap gap-6 items-center bg-white/15 backdrop-blur-md border border-white/90 p-4 rounded-3xl w-fit shadow-2xl">
    
    {/* Java */}
    <div className="flex flex-col items-center gap-1">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" className="w-8 h-8" alt="Java" />
      <span className="text-[12px] text-gray-800 font-bold">Java</span>
    </div>

    {/* C*/}
    <div className="flex flex-col items-center gap-1">
      <img src="https://devicon-website.vercel.app/api/c/original.svg" className="w-8 h-8" alt="C" />
      <span className="text-[12px] text-gray-800 font-bold">C</span>
    </div>

    {/* Python */}
    <div className="flex flex-col items-center gap-1">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-8 h-8" alt="Python" />
      <span className="text-[12px] text-gray-800 font-bold">Python</span>
    </div>

    {/* C++ */}
    <div className="flex flex-col items-center gap-1">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" className="w-8 h-8" alt="C++" />
      <span className="text-[12px] text-gray-800 font-bold">C++</span>
    </div>

    

  

    {/* React */}
    <div className="flex flex-col items-center gap-1">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-8 h-8" alt="React" />
      <span className="text-[12px] text-gray-800 font-bold">React</span>
    </div>

    {/* React */}
    <div className="flex flex-col items-center gap-1">
      <img src="https://devicon-website.vercel.app/api/pytorch/original.svg" className="w-8 h-8" alt="PyTorch" />
      <span className="text-[12px] text-gray-800 font-bold">PyTorch</span>
    </div>

    {/* React */}
    <div className="flex flex-col items-center gap-1">
      <img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_verilog.svg" className="w-8 h-8" alt="Verilog" />
      <span className="text-[12px] text-gray-800 font-bold">Verilog</span>
    </div>

    {/* React */}
    <div className="flex flex-col items-center gap-1">
      <img src="https://devicon-website.vercel.app/api/javascript/original.svg" className="w-8 h-8" alt="JavaScript" />
      <span className="text-[12px] text-gray-800 font-bold">JavaScript</span>
    </div>

        {/* React */}
    <div className="flex flex-col items-center gap-1">
      <img src="https://devicon-website.vercel.app/api/git/original.svg" className="w-8 h-8" alt="Git" />
      <span className="text-[12px] text-gray-800 font-bold">Git</span>
    </div>



    

  </div>
</div>


         
        </div>

{/* Right: Photo & Contact Info - ADDED lg:-mt-16 HERE */}
<div className="w-full lg:w-1/3 flex flex-col items-center order-1 lg:order-2 lg:-mt-6">
  <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-5 border-white shadow-[0_20px_50px_rgba(0,0,0,0.65)]">
    <img
      src="test.png"
      alt="Andrew Yeung"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="mt-6 text-center">
    <h2 className="text-4xl md:text-3xl font-bold text-slate-800 tracking-tight font-cantata">
      Andrew Yeung
    </h2>
  </div>



  {/* Contact List */}
  <div className="mt-3 space-y-2 text-gray-700 text-base flex flex-col items-start w-fit text-base font-cantata">
    <div className="flex items-center gap-3 lg:justify-end">
      <MapPin size={20} className="text-black" />
      <span>Toronto, ON</span>
    </div>

    <div className="flex items-center gap-3 lg:justify-end">
      <GraduationCap size={20} className="text-black" />
      <span>University of Toronto</span>
    </div>

    <a 
      href="mailto:aandrew.yeung@mail.utoronto.ca" 
      className="flex items-center gap-3 lg:justify-end hover:text-sky-400 hover:underline underline-offset-2 transition-colors"
    >
      <Mail size={20} className="text-black" />
      <span>Email</span>
    </a>

    <a href="https://github.com/ayeung009" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 lg:justify-end hover:text-sky-400 hover:underline underline-offset-2 transition-colors">
    <SiGithub size={20} className="text-black" />
    <span>GitHub</span>
  </a>

    <a 
      href="https://www.linkedin.com/in/ayeung009/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center gap-3 lg:justify-end hover:text-sky-400 hover:underline underline-offset-2 transition-colors"
    >
      <Linkedin size={20} className="text-sky-500" />
      <span>LinkedIn</span>
    </a>
  </div>
</div>

      </div>
    </section>
  );
};