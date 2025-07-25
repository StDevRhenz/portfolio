import Services from '../assets/services.png';

function services() {
    return (
        <div className="bg-black min-h-screen flex flex-col items-center justify-center p-4">
            <h1  >Services</h1>
            <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-400 to-white rounded-lg opacity-60 group-hover:opacity-90 transition duration-300"></div>
                
                <img
                    src={Services}
                    alt="services"
                    className="relative w-full w-100 h-60 object-cover rounded-lg shadow-2xl border-2 border-transparent group-hover:border-white transition duration-300"
                />
                
                {/* Optional glowing effect on hover
                <div className="absolute inset-0 rounded-lg pointer-events-none opacity-0 group-hover:opacity-20 transition duration-300 bg-white"></div> */}
            </div>
        </div>
    );
}

export default services;