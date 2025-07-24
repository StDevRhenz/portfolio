//temporary Use while waiting for future updates
import React from 'react';
import RinzPicture from '../assets/rinzpicture.png';
import Resume from '../assets/updated-resume.pdf';
function LoadPage() {
    return(
        <div className="min-h-screen flex items-center justify-center p-6">
            <div className='text-center max-w-md mx-auto'>
                <div className="mb-8">
                    <img className="w-60 h-60 rounded-full mx-auto object-cover" src={RinzPicture} alt="Rinz Profile" />
                </div>

                <h1 className="text-5xl text-white font-bold mb-4">Rhenz Ganotice</h1>
                <h2 className="text-xl text-white mb-4">Full Stack and Computer Science Major</h2>
                <p className="text-lg text-gray-600 mb-5">Aspiring Software Engineer with a passion to serve.</p>

                <div className="flex gap-2 flex-wrap justify-center mb-8">
                    <span>
                        <a href="https://github.com/StDevRhenz" 
                           className="inline-block px-3 py-1 text-sm bg-neutral-800/30 backdrop-blur-sm rounded-full text-neutral-200 hover:bg-neutral-700/40 transition-colors border border-neutral-700/20 shadow-lg"
                           style={{opacity: 1, transform: 'none'}}>
                            GitHub
                        </a>
                    </span>
                    <span>
                        <a href="https://www.facebook.com/rhenzprince.ganotice/" 
                           className="inline-block px-3 py-1 text-sm bg-neutral-800/30 backdrop-blur-sm rounded-full text-neutral-200 hover:bg-neutral-700/40 transition-colors border border-neutral-700/20 shadow-lg"
                           style={{opacity: 1, transform: 'none'}}>
                            Facebook
                        </a>
                    </span>
                    <span>
                        <a href={Resume} 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="inline-block px-3 py-1 text-sm bg-neutral-800/30 backdrop-blur-sm rounded-full text-neutral-200 hover:bg-neutral-700/40 transition-colors border border-neutral-700/20 shadow-lg"
                           style={{opacity: 1, transform: 'none'}}>
                            Resume
                        </a>
                    </span>
                    <span>
                        <a href="mailto:rhenzganotice28@gmail.com" 
                           className="inline-block px-3 py-1 text-sm bg-neutral-800/30 backdrop-blur-sm rounded-full text-neutral-200 hover:bg-neutral-700/40 transition-colors border border-neutral-700/20 shadow-lg"
                           style={{opacity: 1, transform: 'none'}}>
                            Email
                        </a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default LoadPage;
