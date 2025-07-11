import React, { useState } from 'react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Web App', 'Mobile App', 'Desktop App'];

  // const projects = [
  //   {
  //     id: 1,
  //     title: 'Project Title 1',
  //     category: 'Web App',
  //     image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg',
  //     tech: ['⚛️ React', '🎨 CSS'],
  //   },
  //   {
  //     id: 2,
  //     title: 'Project Title 2',
  //     category: 'Web App',
  //     image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg',
  //     tech: ['💚 Vue.js', '🔥 Firebase'],
  //   },
  //   {
  //     id: 3,
  //     title: 'Project Title 3',
  //     category: 'Mobile App',
  //     image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg',
  //     tech: ['📱 React Native', '📘 TypeScript'],
  //   },
  //   {
  //     id: 4,
  //     title: 'Project Title 4',
  //     category: 'Desktop App',
  //     image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg',
  //     tech: ['💻 Electron', '🖥️ Node.js'],
  //   },
  //   {
  //     id: 5,
  //     title: 'Project Title 5',
  //     category: 'Web App',
  //     image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg',
  //     tech: ['🌐 Next.js', '📦 Redux'],
  //   },
    

  // ];

  // const filteredProjects = activeTab === 'All'
  //   ? projects
  //   : projects.filter(project => project.category === activeTab);

  return (
    // <div className="min-h-screen py-16 px-8">
    //   <div className="max-w-7xl mx-auto text-white space-y-12">
    //     <h1 className="text-4xl lg:text-5xl font-light leading-tight text-center">
    //       My <span className="font-medium">Projects</span>
    //     </h1>

    //     {/* Tabs */}
    //     <div className="flex justify-center gap-4">
    //       {tabs.map(tab => (
    //         <button
    //           key={tab}
    //           onClick={() => setActiveTab(tab)}
    //           className={`px-4 py-2 text-sm rounded-full border ${
    //             activeTab === tab
    //               ? 'bg-white text-black'
    //               : 'text-white border-white hover:bg-white hover:text-black'
    //           } transition`}
    //         >
    //           {tab}
    //         </button>
    //       ))}
    //     </div>

    //     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    //       {filteredProjects.map(project => (
    //         <div key={project.id} className="group relative bg-black/30 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-gray-500 transition-all duration-300 overflow-hidden">
    //           {/* Image */}
    //           <div className="relative h-48 overflow-hidden">
    //             <img 
    //               src={project.image} 
    //               alt={project.title}
    //               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    //             />
    //             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
    //           </div>

    //           <div className="p-6 space-y-4">
    //             <h3 className="text-xl font-medium text-white group-hover:text-gray-300 transition-colors duration-300">
    //               {project.title}
    //             </h3>

    //             <p className="text-sm text-gray-300 leading-relaxed">
    //               Brief description of {project.title}.
    //             </p>

    //             <div className="space-y-2">
    //               <p className="text-xs text-gray-400 font-light">Tech Stack:</p>
    //               <div className="flex flex-wrap gap-2">
    //                 {project.tech.map((stack, i) => (
    //                   <span key={i} className="inline-flex items-center gap-1 px-3 py-1 text-xs font-light rounded-full bg-white/10 text-white backdrop-blur-sm">
    //                     {stack}
    //                   </span>
    //                 ))}
    //               </div>
    //             </div>

    //             <div className="flex gap-3 pt-2">
    //               <a
    //                 href="#"
    //                 className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-white text-black text-sm font-light rounded-lg hover:bg-gray-200 transition-colors duration-300"
    //               >
    //                 Live Demo
    //               </a>
    //               <a
    //                 href="#"
    //                 className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-white text-white text-sm font-light rounded-lg hover:bg-white hover:text-black transition-colors duration-300"
    //               >
    //                 View Code
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div className="min-h-screen py-16 px-8 " style={{backgroundColor: 'rgba(0, 0, 0, 0.9)'}}>
        <div className='text-white min-h-screen py-16 px-8'>
            <h2 className="text-4xl lg:text-5xl font-light leading-tight text-center ">Projects Coming Soon...</h2>
        </div>
    </div>
  );
};

export default Projects;
