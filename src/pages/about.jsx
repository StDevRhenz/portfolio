import React from 'react';
import AboutPicture from '../assets/aboutPicture.png';


function about() {
    return (
        <div className="min-h-screen flex items-center justify-center px-8" style={{backgroundColor: 'rgba(0, 0, 0, 0.9)'}}>
            <div className="max-w-4xl mx-auto text-center">
                <div className="text-white space-y-8">
                    <h1 className="text-4xl lg:text-5xl font-light leading-tight">
                        About <span className="font-medium">Me</span>
                    </h1>
                    
                    <div className="bg-black bg-opacity-50 p-8 lg:p-12 rounded-lg border border-gray-700 justify-text-center ">
                        <div className="space-y-6 text-justify">
                            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed font-light">
                                I'm currently a <span className="font-medium text-white">Computer Science student</span> at the{' '}
                                <a 
                                    href="https://www.umak.edu.ph/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-gray-300 underline transition-colors duration-300"
                                >
                                    University of Makati,
                                </a>{' '}
                                Philippines with a passion for software development, applications, engineering, and AI. <b className='font-medium text-white underline'>I'm still exploring which path in tech fits me best.</b>
                            </p>
                            
                            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed font-light">
                                I started my journey in programming in <span className="font-medium text-white">2021</span>. 
                                These experiences have equipped me with a solid foundation in different programming 
                                languages and frameworks. 
                            </p>
                            
                            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed font-light">
                                I'm eager to learn and adapt to new technologies, as I believe that continuous 
                                learning is essential in the field of software development.
                            </p>
                        </div>
                    </div>
                    
                    <div className="pt-4">
                        <p>
                            Build Today, Innovate Tomorrow 
                        </p>
                        <p className='text-base text-gray-400 font-light'>
                            -Rhenz Ganotice 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default about;