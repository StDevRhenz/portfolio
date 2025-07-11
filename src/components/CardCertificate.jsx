// This component shows one certificate card
function CardCertificate({ certificate }) {
    return (
        <div className="relative rounded-xl overflow-hidden group h-[280px] bg-gray-800/30 backdrop-blur-sm">
            <div className="absolute inset-0">
                <img 
                    src={certificate.image} 
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
                    <span className="px-3 py-1 text-sm text-gray-300 rounded-full bg-black/50 backdrop-blur-sm">
                        {certificate.date}
                    </span>
                </div>
                
                <h3 className="mb-2 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-gray-300 line-clamp-2">
                    {certificate.title}
                </h3>
                
                <p className="mb-4 text-sm text-gray-300 transition-all duration-300 line-clamp-2 group-hover:line-clamp-none">
                    {certificate.description}
                </p>
                
                <div className="flex items-center gap-2">
                    {certificate.technologies.map((tech, index) => (
                        <span 
                            key={index} 
                            className={`px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm ${
                                index % 2 === 0 
                                    ? 'text-white bg-white/10' 
                                    : 'text-gray-300 bg-gray-600/30'
                            }`}
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CardCertificate;