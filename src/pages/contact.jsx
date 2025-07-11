function Contact() {
    return (
        <div className="min-h-screen py-16 px-8 flex flex-col items-center justify-center" style={{backgroundColor: 'rgba(0, 0, 0, 0.9)'}}>
            <div className="max-w-4xl mx-auto text-center">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Let's Work Together
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                        If you are interested to work together 
                        or hire me on your upcoming project, discussion or any other proposal then feel free to 
                        contact me anytime.
                    </p>
                </div>

                <div className="mb-12">
                    <p className="text-lg text-gray-300 mb-6">
                        Inquiries via email at:
                    </p>
                    <a 
                        href="mailto:rhenzganoticegmail@gmail.com" 
                        className="text-2xl font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    >
                        rhenzganoticegmail@gmail.com
                    </a>
                </div>

                {/* Social Media Section */}
                <div>
                    <p className="text-lg text-gray-300 mb-8">
                        Or connect with me on social media:
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <a 
                            href="https://github.com/StDevRhenz" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                            <span className="font-medium">GitHub</span>
                        </a>
                        <a 
                            href="https://www.instagram.com/hwywdiwyw/" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                            <span className="font-medium">Instagram</span>
                        </a>
                        <a 
                            href="https://www.facebook.com/rhenzprince.ganotice/" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                            <span className="font-medium">Facebook</span>
                        </a>
                        <a 
                            href="https://www.tiktok.com/@qyarhenzzz" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                            <span className="font-medium">TikTok</span>
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/rhenz-ganotice-2b547b276/" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                            <span className="font-medium">LinkedIn</span>
                        </a>
                    </div>
                </div>
                
                {/* Footer Section */}
                <footer className="mt-20 pt-8 border-t border-gray-700">
                    <p className="text-gray-400 text-lg font-medium">
                        © Rhenz Ganotice 2025
                    </p>
                </footer>
            </div>
        </div>
    );
}
export default Contact;