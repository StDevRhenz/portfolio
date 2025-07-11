
import React, { useState } from 'react';
import Bestinprogramming from '../assets/certificates/bestinprogramming.png';
import Csharp from '../assets/certificates/csharp.png';
import Dl from '../assets/certificates/dl.png';
import Python from '../assets/certificates/python.png';
import Hackaton1 from '../assets/certificates/hackaton1.png';
import Hackaton2 from '../assets/certificates/hackaton2.png';


const Certificates = (props) => {
    const [showMore, setShowMore] = useState(false);
    return (

        //TEMPLATE FOR MY CERTIFICATES PAGE
        <div className="min-h-screen py-16 px-8" style={{backgroundColor: 'rgba(0, 0, 0, 0.9)'}}>
            <div className="max-w-7xl mx-auto">
                <div className="text-white space-y-12">
                    <h1 className="text-4xl lg:text-5xl font-light leading-tight text-center">
                        My <span className="font-medium">Certificates</span>
                    </h1>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Certificate 1 */}
                        <div className="relative rounded-xl overflow-hidden group h-[280px] bg-gray-800/30 backdrop-blur-sm">
                            <div className="absolute inset-0">
                                <img 
                                    src={Bestinprogramming} 
                                    alt="certificate" 
                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent transition-opacity duration-500 group-hover:opacity-0"></div>
                            </div>
                            <div className="relative z-10 flex flex-col justify-end h-full p-6 transition-opacity duration-500 group-hover:opacity-0">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="p-3 rounded-lg bg-white/10 backdrop-blur-sm">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                                </svg>
                                    </div>
                                    <span className="px-3 py-1 text-sm text-gray-300 rounded-full bg-black/50 backdrop-blur-sm">2022-2023</span>
                                </div>
                                <h3 className="mb-2 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-gray-300 line-clamp-2">
                                    Best in Computer Programming
                                </h3>
                                <p className="mb-4 text-sm text-gray-300 transition-all duration-300 line-clamp-2 group-hover:line-clamp-none">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                <div className="flex items-center gap-2">
                                    <span className="px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm text-white bg-white/10">Visual Basic</span>
                                    <span className="px-3 py-1 text-xs font-medium rounded-full text-gray-300 bg-gray-600/30 backdrop-blur-sm">Ms Access</span>
                                </div>
                            </div>
                        </div>

                        {/* Certificate 2 */}
                        <div className="relative rounded-xl overflow-hidden group h-[280px] bg-gray-800/30 backdrop-blur-sm">
                            <div className="absolute inset-0">
                                <img 
                                    src={Csharp} 
                                    alt="certificate" 
                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent transition-opacity duration-500 group-hover:opacity-0"></div>
                            </div>
                            <div className="relative z-10 flex flex-col justify-end h-full p-6 transition-opacity duration-500 group-hover:opacity-0">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="p-3 rounded-lg bg-white/10 backdrop-blur-sm">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                                </svg>
                                    </div>
                                    <span className="px-3 py-1 text-sm text-gray-300 rounded-full bg-black/50 backdrop-blur-sm">October 2024</span>
                                </div>
                                <h3 className="mb-2 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-gray-300 line-clamp-2">
                                    Infotechnolympics C# Category
                                </h3>
                                <p className="mb-4 text-sm text-gray-300 transition-all duration-300 line-clamp-2 group-hover:line-clamp-none">
                                    lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                <div className="flex items-center gap-2">
                                    <span className="px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm text-white bg-white/10">C#</span>
                                </div>
                            </div>
                        </div>

                        {/* Certificate 3 */}
                        <div className="relative rounded-xl overflow-hidden group h-[280px] bg-gray-800/30 backdrop-blur-sm">
                            <div className="absolute inset-0">
                                <img 
                                    src={Dl} 
                                    alt="certificate" 
                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent transition-opacity duration-500 group-hover:opacity-0"></div>
                            </div>
                            <div className="relative z-10 flex flex-col justify-end h-full p-6 transition-opacity duration-500 group-hover:opacity-0">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="p-3 rounded-lg bg-white/10 backdrop-blur-sm">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                                </svg>
                                    </div>
                                    <span className="px-3 py-1 text-sm text-gray-300 rounded-full bg-black/50 backdrop-blur-sm">2023-2024</span>
                                </div>
                                <h3 className="mb-2 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-gray-300 line-clamp-2">
                                    Dean's List in Computer Science Major in Application Development
                                </h3>
                                <p className="mb-4 text-sm text-gray-300 transition-all duration-300 line-clamp-2 group-hover:line-clamp-none">
                                    lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                <div className="flex items-center gap-2">
                                    <span className="px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm text-white bg-white/10">2nd Year College</span>
                                </div>
                            </div>
                        </div>

                        {/* Certificate 4 - Show only when showMore is true */}
                        <div className="relative rounded-xl overflow-hidden group h-[280px] bg-gray-800/30 backdrop-blur-sm">
                            <div className="absolute inset-0">
                                <img 
                                    src={Python}
                                    alt="certificate" 
                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent transition-opacity duration-500 group-hover:opacity-0"></div>
                            </div>
                            <div className="relative z-10 flex flex-col justify-end h-full p-6 transition-opacity duration-500 group-hover:opacity-0">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="p-3 rounded-lg bg-white/10 backdrop-blur-sm">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                                </svg>
                                    </div>
                                    <span className="px-3 py-1 text-sm text-gray-300 rounded-full bg-black/50 backdrop-blur-sm">August 2024</span>
                                </div>
                                <h3 className="mb-2 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-gray-300 line-clamp-2">
                                    Google Collab Python Programming
                                </h3>
                                <p className="mb-4 text-sm text-gray-300 transition-all duration-300 line-clamp-2 group-hover:line-clamp-none">
                                    lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                <div className="flex items-center gap-2">
                                    <span className="px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm text-white bg-white/10">Python</span>
                                </div>
                            </div>
                        </div>

                                {/* Certificate 5 */}
                        {showMore && (
                            <>
                                <div className="relative rounded-xl overflow-hidden group h-[280px] bg-gray-800/30 backdrop-blur-sm">
                                    <div className="absolute inset-0">
                                        <img 
                                            src={Hackaton1}
                                            alt="certificate" 
                                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent transition-opacity duration-500 group-hover:opacity-0"></div>
                                    </div>
                                    <div className="relative z-10 flex flex-col justify-end h-full p-6 transition-opacity duration-500 group-hover:opacity-0">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="p-3 rounded-lg bg-white/10 backdrop-blur-sm">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                                </svg>
                                            </div>
                                            <span className="px-3 py-1 text-sm text-gray-300 rounded-full bg-black/50 backdrop-blur-sm">September 28 2024</span>
                                        </div>
                                        <h3 className="mb-2 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-gray-300 line-clamp-2">
                                            6th CCIS Hackaton 2024
                                        </h3>
                                        <p className="mb-4 text-sm text-gray-300 transition-all duration-300 line-clamp-2 group-hover:line-clamp-none">
                                            lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </p>
                                        <div className="flex items-center gap-2">
                                            <span className="px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm text-white bg-white/10">HTML</span>
                                            <span className="px-3 py-1 text-xs font-medium rounded-full text-gray-300 bg-gray-600/30 backdrop-blur-sm">CSS</span>
                                            <span className="px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm text-white bg-white/10">Javascript</span>
                                            <span className="px-3 py-1 text-xs font-medium rounded-full text-gray-300 bg-gray-600/30 backdrop-blur-sm">PHP</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Certificate 6 */}
                                <div className="relative rounded-xl overflow-hidden group h-[280px] bg-gray-800/30 backdrop-blur-sm">
                                    <div className="absolute inset-0">
                                        <img 
                                            src={Hackaton2}
                                            alt="certificate" 
                                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent transition-opacity duration-500 group-hover:opacity-0"></div>
                                    </div>
                                    <div className="relative z-10 flex flex-col justify-end h-full p-6 transition-opacity duration-500 group-hover:opacity-0">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="p-3 rounded-lg bg-white/10 backdrop-blur-sm">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                                </svg>
                                            </div>
                                            <span className="px-3 py-1 text-sm text-gray-300 rounded-full bg-black/50 backdrop-blur-sm">September 28 2024</span>
                                        </div>
                                        <h3 className="mb-2 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-gray-300 line-clamp-2">
                                            My Group Name in CCIS Hackaton 2024
                                        </h3>
                                        <p className="mb-4 text-sm text-gray-300 transition-all duration-300 line-clamp-2 group-hover:line-clamp-none">
                                            lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </p>
                                        <div className="flex items-center gap-2">
                                            <span className="px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm text-white bg-white/10">HTML</span>
                                            <span className="px-3 py-1 text-xs font-medium rounded-full text-gray-300 bg-gray-600/30 backdrop-blur-sm">CSS</span>
                                            <span className="px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm text-white bg-white/10">Javascript</span>
                                            <span className="px-3 py-1 text-xs font-medium rounded-full text-gray-300 bg-gray-600/30 backdrop-blur-sm">PHP</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                    {/* View More Button */}
                    <div className="text-center mt-12">
                        <button
                            onClick={() => {
                                setShowMore(!showMore);
                                if (showMore) {
                                    // Scroll to certificates section after showing more
                                    setTimeout(() => {
                                        document.getElementById('certificates')?.scrollIntoView({
                                            behavior: 'smooth',
                                            block: 'start'
                                        });
                                    }, 100);
                                }
                            }}
                            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition-all duration-300"
                        >
                            <span>{showMore ? 'View Less' : 'View More'}</span>
                            <svg 
                                className={`w-5 h-5 transition-transform duration-300 ${showMore ? 'rotate-180' : ''}`} 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        // <div className="min-h-screen py-16 px-8" style={{backgroundColor: 'rgba(0, 0, 0, 0.9)'}}>
        //     <div className='text-white min-h-screen py-16 px-8'>
        //         <h2 className="text-4xl lg:text-5xl font-light leading-tight text-center ">Certificates Coming Soon...</h2>
        //     </div>
        // </div>
    );
}
export default Certificates;