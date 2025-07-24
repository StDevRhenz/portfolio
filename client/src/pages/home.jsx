
import React from 'react';
import Result from '../assets/updated-resume.pdf';

function home() {
    const handleCvClick = () => {
        window.open(Result, '_blank');
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-8" style={{backgroundColor: 'rgba(0, 0, 0, 0.9)'}}>
            <div className="max-w-4xl mx-auto text-center">
                <div className="text-white space-y-8">
                    <h1 className="text-4xl lg:text-5xl font-light leading-tight">
                        Hello, I am <span className="font-medium">Rhenz Ganotice</span>
                    </h1>
                    
                    <h2 className="text-2xl lg:text-3xl font-light text-gray-200">
                        Building the Future with Dev and AI
                    </h2>
                    
                    <p className="text-base text-gray-400 font-light">
                        Student Developer
                    </p>
                    
                    <button 
                        onClick={handleCvClick}
                        className="inline-flex items-center px-6 py-3 border border-white text-white font-light hover:bg-white hover:text-black transition-colors duration-300"
                    >
                        View My CV
                    </button>
                </div>
            </div>
        </div>
    );
}

export default home;