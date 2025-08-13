function HomePage() {
    return (
        <div className="bg-gradient-to-r from-pink-300 via-pink-200 to-pink-300 h-[100vh] flex justify-center items-center">

            <form className="bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-md">
                
                <label className="block mb-2 text-lg font-semibold text-pink-700 tracking-wide">
                    Mobile Number
                </label>
                <input
                    type="number"
                    placeholder="Enter mobile number"
                    name="Number"
                    className="w-full mb-6 px-5 py-3 border border-pink-300 rounded-xl text-pink-800 placeholder-pink-400 font-semibold focus:outline-none focus:ring-4 focus:ring-pink-400 transition"
                />
                <br />

                <label className="block mb-2 text-lg font-semibold text-pink-700 tracking-wide">
                    Password
                </label>
                <input
                    type="text"
                    placeholder="Enter Your Password"
                    name="Password"
                    className="w-full mb-8 px-5 py-3 border border-pink-300 rounded-xl text-pink-800 placeholder-pink-400 font-semibold focus:outline-none focus:ring-4 focus:ring-pink-400 transition"
                />
                <br />

                <button
                    type="submit"
                    className="w-full bg-pink-600 hover:bg-pink-700 active:bg-pink-800 text-white font-extrabold py-3 rounded-xl shadow-lg transform hover:scale-105 active:scale-95 transition duration-300"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default HomePage;
