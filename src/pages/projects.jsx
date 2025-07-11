import React, { useState } from 'react';
import CardProject from '../components/CardProject';
import { projectsData, projectCategories } from '../data/projectsData';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All');

  let filteredProjects;
  
  if (activeTab === 'All') {
    filteredProjects = projectsData;
  } else {
    filteredProjects = projectsData.filter(project => project.category === activeTab);
  }


  
  return (
    // <div className="min-h-screen py-16 px-8">
    //   <div className="max-w-7xl mx-auto text-white space-y-12">
    //     <h1 className="text-4xl lg:text-5xl font-light leading-tight text-center">
    //       My <span className="font-medium">Projects</span>
    //     </h1>

    //     {/* Tabs */}
    //     <div className="flex justify-center gap-4">
    //       {projectCategories.map(tab => (
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
    //         <CardProject key={project.id} project={project} />
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
