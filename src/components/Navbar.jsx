import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Navbar = ({menuOpen, setMenuOpen}) =>{

    useEffect(()=>{
        document.body.style.overflow=menuOpen? "hidden":"";
    }, [menuOpen]);

    return (
    <nav className="fixed top-4 w-full z-40 px-4">
        <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-md border border-gray-200 shadow-sm rounded-full px-8">
            <div className = "flex justify-between items-center h-16">
                <Link to="/" className="font-cantata text-xl font-semibold text-gray-800 hover:text-sky-400">

                Andrew Yeung
                
                </Link>

                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={()=>setMenuOpen((prev)=> !prev)}>
                    &#9776;
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    <Link to="/" className="font-cantata text-gray-600 hover:text-sky-500 transition-colors">Home</Link>


                    <Link to="/projects" className="font-cantata text-gray-600 hover:text-sky-500 transition-colors">Projects</Link>
 

                    <a 
                    href="Andrew_Yeung_Resume.pdf" // Ensure the file name matches exactly (case-sensitive)
                    target="_blank"
                    rel="noopener noreferrer"
                 className="font-cantata text-gray-600 hover:text-sky-500 transition-colors">Resume</a>

                    <Link to="/contact" className="font-cantata text-gray-600 hover:text-sky-500 transition-colors">Contact</Link>
                

                </div>

            </div>
        </div>
        {""}
    </nav>
    );
}