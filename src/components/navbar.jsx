const Navbar = (props) => {
  return (
    <nav className="bg-[rgba(51,51,51,0.5)] backdrop-blur-md p-2.5 px-5 fixed top-5 left-1/2 transform -translate-x-1/2 rounded-[20px] z-[1000]">
      <ul className="flex space-x-4">
        <li><a href="#home" className="text-white no-underline px-5 py-3 inline-block hover:bg-[#575757] rounded-md">Home</a></li>
        <li><a href="#about" className="text-white no-underline px-5 py-3 inline-block hover:bg-[#575757] rounded-md">About</a></li>
        <li><a href="#certificates" className="text-white no-underline px-5 py-3 inline-block hover:bg-[#575757] rounded-md">Certificates</a></li>
        <li><a href="#projects" className="text-white no-underline px-5 py-3 inline-block hover:bg-[#575757] rounded-md">Projects</a></li>
        <li><a href="#contact" className="text-white no-underline px-5 py-3 inline-block hover:bg-[#575757] rounded-md">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
