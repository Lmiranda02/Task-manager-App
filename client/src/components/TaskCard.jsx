/* eslint-disable react/prop-types */

import { useTasks } from "../context/TasksContext";
import { Link } from 'react-router-dom';
import dayjs from "dayjs";
import utc from "dayjs";
dayjs.extend(utc);

function TaskCard({ task }) {
    const { deleteTask } = useTasks();

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-96">
            <div className="px-6 py-4">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">{task.title}</h1>
                <p className="text-sm text-gray-600 mb-2">{dayjs(task.date).utc().format('DD/MM/YYYY')}</p>
                <p className="text-gray-700">{task.description}</p>
            </div>
            <div className="px-6 py-4 flex justify-between items-center">
                <Link to={`/tasks/${task._id}`} className="text-indigo-600 hover:text-indigo-900 font-semibold">Edit</Link>
                <button className="text-red-600 hover:text-red-900 font-semibold" onClick={() => deleteTask(task._id)}>Delete</button>
            </div>
        </div>
    );
}

export default TaskCard;
