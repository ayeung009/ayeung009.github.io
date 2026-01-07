import { Github, ExternalLink, Cpu, CircuitBoard } from 'lucide-react';

const HardwareProjectCard = ({ title, description, tags, hardware, githubLink, demoLink, image }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col h-full group">
      {/* Project Image Container */}
      <div className="h-48 overflow-hidden bg-gray-100 border-b border-gray-100 relative">
        <img 
          src={image || "/api/placeholder/400/200"} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Overlay for a subtle "Engineering" feel */}
        <div className="absolute inset-0 bg-sky-900/5 group-hover:bg-transparent transition-colors duration-300" />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        {/* Icon & Title */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-sky-50 text-sky-600 rounded-lg group-hover:bg-sky-500 group-hover:text-white transition-colors shrink-0">
            <Cpu size={20} />
          </div>
          <h3 className="text-lg font-bold font-cantata text-gray-800 leading-tight">{title}</h3>
        </div>

        {/* Hardware Platform Tag */}
        <div className="flex items-center gap-2 mb-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
          <CircuitBoard size={14} className="text-sky-500" />
          <span>Platform: {hardware}</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm font-cantata mb-6 flex-grow leading-relaxed">
          {description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-2.5 py-0.5 bg-gray-50 text-gray-600 text-[11px] font-semibold rounded-md border border-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-5 pt-4 border-t border-gray-100 mt-auto">
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-bold text-gray-700 hover:text-sky-500 transition-colors"
          >
            <Github size={16} /> SOURCE
          </a>
          {demoLink && (
            <a 
              href={demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-bold text-gray-700 hover:text-sky-500 transition-colors"
            >
              <ExternalLink size={16} /> DOCS
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  const myProjects = [
    {
      title: "Sorting Algorithm Visualizer",
      description: "Implemented a fully functional bubble and insertion sort simulator on the DE1-SoC FPGA using Verilog, featuring VGA-based graphical animations, real-time user input, and FSM-driven control logic with registers and combinational circuits to manage algorithm flow and bar-graph visualizations.",
      tags: ["Verilog", "Quartus Prime", "ModelSim"],
      hardware: "DE1-SoC (Cyclone V)",
      githubLink: "#",
      demoLink: "#",
      image: "sorting.png" // Add image path later
    },
    {
      title: "Live Speech Translation Device",
      description: "Developed a real-time wearable speech translation device within a 24-hour makeathon, integrating microcontrollers, machine learning, and assistive technology design to translate spoken input into multilingual audio output in real time.",
      tags: ["Arduino", "Python", "Google Translate API"],
      hardware: "Arduino UNO",
      githubLink: "#",
      demoLink: "#",
      image: "VerbaLink.jpg"
    },
    {
      title: "Battleship AI Engine",
      description: "Developed a graphical Battleship game in Java with Swing UI, custom audio, and keyboard controls, applying OOP principles and implementing a memoized path-finding AI to optimize moves and improve real-time decision-making.",
      tags: ["JavaSwing", "GUI", "OOP", "AI"],
      hardware: "Java Swing",
      githubLink: "#",
      demoLink: "#",
      image: "battleship (1).png"
    },
    {
      title: "DMOJ UACC Contest",
      description: "I collaborated with fellow members of my high school’s Computer Science Club to create a beginner-friendly programming contest hosted on Canada’s largest competitive programming platform, DMOJ, designed to introduce younger students to competitive programming while giving more experienced students the opportunity to practice problem design.",
      tags: ["Competitive Programming", "Problem Setting", "I/O Validation"],
      hardware: "dmoj.ca",
      githubLink: "https://dmoj.ca/contest/uacc1",
      demoLink: "https://dmoj.ca/contest/uacc1",
      image: "dmoj.png"
    },
    {
      title: "IWitness",
      description: "IWitness is a web application that leverages AI and TensorFlow to detect crimes and medical emergencies in real-time using city-wide camera feeds. The application instantly notifies first responders, significantly reducing response times and improving public safety. The front-end was built using HTML and CSS, while the back-end was developed in JavaScript to handle AI processing and real-time alerts.",
      tags: ["TensorFlow", "HTML", "CSS"],
      hardware: "TensorFlow",
      githubLink: "https://devpost.com/software/temp-rft3ge",
      demoLink: "https://devpost.com/software/temp-rft3ge",
      image: "witness.jpg"
    },
    {
      title: "Personal Website",
      description: "This is my personal website, created in January 2026. It was built using React, Tailwind CSS, and JavaScript, with a focus on clean design, responsiveness, and performance. The site highlights my projects, technical experience, and ongoing learning as an engineering student.",
      tags: ["React", "Tailwind CSS", "JavaScript"],
      hardware: "ReactJS",
      githubLink: "https://ayeung009.github.io/",
      demoLink: "https://ayeung009.github.io/",
      image: "pp.png"
    },
  ];

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-24 xl:px-40 relative">
      {/* Background with UofT Skyline */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('mm.jpg')", 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.12, 
          filter: 'grayscale(0%)',
        }}
      />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="mb-12">
          <h1 className="text-4xl md:text-4xl font-bold font-cantata text-gray-800">Featured Projects</h1>
          <div className="h-1.5 w-24 bg-sky-500 mt-4 rounded-full"></div>
          <p className="mt-6 text-gray-800 max-w-full font-cantata text-base">
           Throughout high school and university, 
           I have developed a wide range of projects, 
           including software and web applications, 
           FPGA-based hardware designs, Arduino systems, machine learning models, 
           and competitive programming contest organization. 
           Feel free to check them out below!
          </p>

        </div>

        {/* Responsive Grid: 1 on mobile, 2 on tablet/laptop, 3 on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myProjects.map((project, index) => (
            <HardwareProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};