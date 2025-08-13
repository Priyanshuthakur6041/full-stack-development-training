
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <nav className="flex bg-gradient-to-r from-blue-400 to-blue-600 p-5 justify-between items-center shadow-lg">
                
                <div>
                    {/* left section */}
                    <Link to="/HomePage">
                        <button className="text-white font-bold text-lg hover:text-yellow-200 transition duration-300">
                            Home
                        </button>
                    </Link>
                </div>

                <div className="space-x-6">
                    {/* right section */}
                    <Link to="/CreateAccountPage">
                        <button className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-full shadow-md hover:bg-blue-100 transition duration-300">
                            Create Account
                        </button>
                    </Link>

                    <Link to="/LoginPage">
                        <button className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-full shadow-md hover:bg-blue-100 transition duration-300">
                            Login
                        </button>
                    </Link>
                </div>
            </nav>
        </div>
    );
}

export default Header;
