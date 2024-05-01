import { useEffect } from "react";
import { useTasks } from "../context/TasksContext";
import TaskCard from "../components/TaskCard";

function TasksPage() {
    const { getTasks, tasks } = useTasks();

    useEffect(() => {
        getTasks();
    }, [getTasks]);

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold text-center mb-6">Tasks</h1>
            {tasks.length === 0 ? (
                <div className="text-center">No tasks found</div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {tasks.map((task) => (
                        <TaskCard task={task} key={task._id} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default TasksPage;