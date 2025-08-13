


function Header() {
    return (
        <div>
            <nav className="flex bg-gradient-to-r from-blue-400 to-blue-600 p-5 justify-between items-center shadow-lg">
                
                <div>
                    {/* left section */}
                   
                        <button className="text-white font-bold text-lg hover:text-yellow-200 transition duration-300">
                            Home
                        </button>
                   
                </div>

                <div className="space-x-2">
                    {/* right section */}
                   
                        <button className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-full shadow-md hover:bg-blue-100 transition duration-300">
                            Bank Detail
                        </button>
                    

                    
                        <button className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-full shadow-md hover:bg-blue-100 transition duration-300">
                            Transfer
                        </button>

                        <button className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-full shadow-md hover:bg-blue-100 transition duration-300">
                            Transaction
                        </button>

                        <button className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-full shadow-md hover:bg-blue-100 transition duration-300">
                            logout
                        </button>
                  
                </div>
            </nav>
        </div>
    );
}

export default Header;
