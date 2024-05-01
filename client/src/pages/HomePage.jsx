import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <div className="max-w-lg text-center">
                <h1 className="text-4xl font-bold mb-4">Welcome to Tasky Manager</h1>
                <p className="text-lg mb-8">
                    Efficient task management is crucial for productivity. 
                    Organize your tasks effectively, prioritize them, and stay focused on what matters most.
                </p>
                <div className="flex flex-col space-y-4 md:flex-row md:justify-center">
                    <Link to="/register" className="bg-white text-blue-500 py-3 px-6 rounded-md font-medium text-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                        Sign Up
                    </Link>
                    <Link to="/login" className="bg-white text-blue-500 py-3 px-6 rounded-md font-medium text-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                        Log In
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HomePage;