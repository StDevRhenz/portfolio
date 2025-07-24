function Card({ project }) {
    // Function to get status color and text
    const getStatusInfo = (status) => {
        switch (status) {
            case 'Done':
                return { color: 'bg-green-500', text: 'Done' };
            case 'Pending':
                return { color: 'bg-orange-500', text: 'Pending' };
            case 'In Progress':
                return { color: 'bg-blue-500', text: 'In Progress' };
            default:
                return { color: 'bg-gray-500', text: 'Unknown' };
        }
    };

    const statusInfo = getStatusInfo(project.status);

    return (
        <div className="group relative bg-black/30 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-gray-500 transition-all duration-300 overflow-hidden">
            <div className="relative h-48 overflow-hidden">
                <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                    <div className="flex items-center gap-2 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full">
                        <div className={`w-2 h-2 rounded-full ${statusInfo.color}`}></div>
                        <span className="text-xs text-white font-medium">{statusInfo.text}</span>
                    </div>
                </div>
            </div>

            <div className="p-6 space-y-4">
                <h3 className="text-xl font-medium text-white group-hover:text-gray-300 transition-colors duration-300">
                    {project.title}
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed">
                    {project.description}
                </p>

                <div className="space-y-2">
                    <p className="text-xs text-gray-400 font-light">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((stack, i) => (
                            <span key={i} className="inline-flex items-center gap-1 px-3 py-1 text-xs font-light rounded-full bg-white/10 text-white backdrop-blur-sm">
                                {stack}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex gap-3 pt-2">
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-white text-black text-sm font-light rounded-lg hover:bg-gray-200 transition-colors duration-300"
                    >
                        Live Demo
                    </a>
                    <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-white text-white text-sm font-light rounded-lg hover:bg-white hover:text-black transition-colors duration-300"
                    >
                        View Code
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Card;