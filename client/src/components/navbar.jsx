
import React from 'react';


const Navbar = (props) => {
  return (
    <nav className="bg-[rgba(51,51,51,0.5)] text-sm text-neutral-300 backdrop-blur-md p-2.5 px-5 fixed top-3 left-1/2 transform -translate-x-1/2 rounded-[20px] z-[1000]">
      <div className="flex justify-between items-center text-white gap-10">
        {/* <div>
          <a href="#home" className="px-5 py-3 inline-block hover:bg-[#575757] rounded-md">&lt;Rhenz/&gt;</a>
        </div> */}
        <ul className="flex space-x-4">
          <li><a href="#home" className="px-5 py-3 inline-block hover:bg-[#575757] rounded-md">Home</a></li>
          <li><a href="#about" className="px-5 py-3 inline-block hover:bg-[#575757] rounded-md">About</a></li>
          <li><a href="#certificates" className="px-5 py-3 inline-block hover:bg-[#575757] rounded-md">Certificates</a></li>
          {/* <li><a href="#contact" className="px-5 py-3 inline-block hover:bg-[#575757] rounded-md">Skills</a></li> */}
          <li><a href="#projects" className="px-5 py-3 inline-block hover:bg-[#575757] rounded-md">Projects</a></li>
          <li><a href="#services" className="px-5 py-3 inline-block hover:bg-[#575757] rounded-md">Services</a></li>
          <li><a href="#contact" className="px-5 py-3 inline-block hover:bg-[#575757] rounded-md">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
