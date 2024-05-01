import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
    const { isAuthenticated, logout, user } = useAuth();

    return (
        <nav className="bg-gradient-to-r from-blue-500 to-purple-600 my-3 flex justify-between py-5 px-10 rounded-lg">
            <Link to={isAuthenticated ? "/tasks" : "/"}>
                <h1 className="text-2xl font-bold text-white">Tasky</h1>
            </Link>
            <ul className="flex gap-x-4">
                {isAuthenticated ? (
                    <>
                        <li className="text-white">
                            Welcome {user.username}
                        </li>
                        <li>
                            <Link to='/add-task' className="bg-white text-indigo-500 px-4 py-1 rounded-sm"> Add Task! </Link>
                        </li>
                        <li>
                            <button onClick={logout} className="bg-white text-indigo-500 px-4 py-1 rounded-sm focus:outline-none"> Logout </button>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to='/login' className="bg-white text-indigo-500 px-4 py-1 rounded-sm"> Login </Link>
                        </li>
                        <li>
                            <Link to='/register' className="bg-white text-indigo-500 px-4 py-1 rounded-sm"> Register </Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    )
}

export default Navbar;
