function navbar(){
    return(
        <nav className="glass rounded-full px-6 py-3 flex items-center gap-2">
            <img src="/logo.png" alt="Logo" className="w-8 h-8" />
            <span className="text-lg font-semibold">My Website</span>
            <div className="ml-auto flex items-center gap-4">
                <a href="/" className="text-gray-700 hover:text-gray-900">Home</a>
                <a href="/about" className="text-gray-700 hover:text-gray-900">About</a>
                <a href="/contact" className="text-gray-700 hover:text-gray-900">Contact</a>
            </div>
        </nav>
    );
}

export default navbar;