let id = 0;

class ServerMock {
    getTasks() {
        const tasksString = localStorage.getItem('tasks') || '[]';
        return JSON.parse(tasksString);

    }
    addTask(taskText) {
        const task = { id: ++id, text: taskText, isDone: false, time: "", priority: null }
        const tasks = this.getTasks();
        const newTasks = [...tasks, task];
        const newTasksString = JSON.stringify(newTasks);
        localStorage.setItem('tasks', newTasksString);
        return newTasks;
    }

    deleteTask(id) {
        const tasks = this.getTasks();
        const newTasks = tasks.filter(oneTask => oneTask.id !== id);
        const newTasksString = JSON.stringify(newTasks);
        localStorage.setItem('tasks', newTasksString);
        return newTasks;
    }
    doneTask(task) {
        const dt = new Date()
        console.log("mok", task)
        const tasks = this.getTasks();
        const newTasks = tasks.map(oneTask => oneTask.id === task.id ? { ...oneTask, isDone: task.isDone, time: dt.toLocaleTimeString() } : oneTask);
        const newTasksString = JSON.stringify(newTasks);
        localStorage.setItem('tasks', newTasksString);
        return newTasks;
    }
    sortByStatus() {
        const tasks = this.getTasks();
        const activeTasks = tasks.filter(task => task.isDone === false);
        const notActiveTasks = tasks.filter(task => task.isDone === true);
        const newTasks = [...activeTasks, ...notActiveTasks];
        const newTasksString = JSON.stringify(newTasks);
        localStorage.setItem('tasks', newTasksString);
        return newTasks;
    }


    setTaskPriority(task) {
        const tasks = this.getTasks();
        console.log(task)
        const newTasks = tasks.map(oneTask => oneTask.id === task.id ? { ...oneTask, priority: task.priority } : oneTask);
        const newTasksString = JSON.stringify(newTasks);
        localStorage.setItem('tasks', newTasksString);
        return newTasks;
    }

    sortByTaskPriority() {
        const tasks = this.getTasks();
        const newTasks = tasks.sort((a, b) => {
            return a.priority - b.priority || (a.text > b.text ? 1 : a.text < b.text ? -1 : 0);
        });
        const newTasksString = JSON.stringify(newTasks);
        localStorage.setItem('tasks', newTasksString);
        return newTasks;
    }


}
export const serverMock = new ServerMock();