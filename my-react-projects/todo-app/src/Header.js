import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <nav className="flex bg-blue-300 p-5 justify-between">
                <div>
                    {/* left section */}
                    <Link to="/Add">
                       <button class="text-white font-bold">Add</button> 
                    </Link>
                             
                   
                </div>
                <div className="space-x-110">
                    {/* right section */}

                     <Link to="/Show">
                        <button class="text-white font-bold">Show</button>
                   </Link>

                   <Link to="/Done">
                        <button class="text-white font-bold">Done</button>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Header;