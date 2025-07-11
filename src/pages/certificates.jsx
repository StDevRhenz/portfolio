
import React, { useState } from 'react';
import CardCertificate from '../components/CardCertificate';
import { certificatesData } from '../data/certificatesData';

const Certificates = () => {
    // This controls whether to show all certificates or just the first 4
    const [showMore, setShowMore] = useState(false);
    
    // Decide which certificates to show
    let certificatesToShow;
    if (showMore) {
        // Show all certificates when "View More" is clicked
        certificatesToShow = certificatesData;
    } else {
        // Show only first 4 certificates initially
        certificatesToShow = certificatesData.slice(0, 4);
    }
    
    return (
        // MAIN CONTAINER: Full screen, dark background
        <div className="min-h-screen py-16 px-8" style={{backgroundColor: 'rgba(0, 0, 0, 0.9)'}}>
            {/* CONTENT WRAPPER: Centered, max width */}
            <div className="max-w-7xl mx-auto">
                <div className="text-white space-y-12">
                    
                    {/* PAGE TITLE */}
                    <h1 className="text-4xl lg:text-5xl font-light leading-tight text-center">
                        My <span className="font-medium">Certificates</span>
                    </h1>
                    
                    {/* CERTIFICATES GRID: Show certificates in 2 columns */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Loop through certificates and show each one */}
                        {certificatesToShow.map(certificate => (
                            <CardCertificate key={certificate.id} certificate={certificate} />
                        ))}
                    </div>

                    {/* VIEW MORE/LESS BUTTON */}
                    <div className="text-center mt-12">
                        <button
                            // Toggle between show more and show less
                            onClick={() => setShowMore(!showMore)}
                            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition-all duration-300"
                        >
                            {/* Button text changes based on showMore state */}
                            <span>{showMore ? 'View Less' : 'View More'}</span>
                            {/* Arrow icon that rotates */}
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
    );
};

export default Certificates;