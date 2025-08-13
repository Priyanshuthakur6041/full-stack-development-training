function CreateAccountPage() {
    return (
        <div className="bg-gradient-to-r from-pink-200 to-pink-300 h-[200px] min-h-screen flex justify-center items-center">
            
            <form className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
                <label className="block text-gray-700 font-semibold mb-1">Name</label>
                <input
                    type="text"
                    placeholder="Enter Your Name"
                    name="Name"
                    className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
                <br />

                <label className="block text-gray-700 font-semibold mb-1">Mobile Number</label>
                <input
                    type="tel"
                    placeholder="Enter mobile number"
                    name="Number"
                    className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
                <br />

                <label className="block text-gray-700 font-semibold mb-1">Select Branch</label>
                <input
                    type="text"
                    placeholder="Select Your branch"
                    name="Branch"
                    className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
                <br />

                <label className="block text-gray-700 font-semibold mb-1">Password</label>
                <input
                    type="password"
                    placeholder="Enter Your Password"
                    name="Password"
                    className="w-full mb-6 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
                <br />

                <button
                    type="submit"
                    className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 rounded transition duration-300"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default CreateAccountPage;
