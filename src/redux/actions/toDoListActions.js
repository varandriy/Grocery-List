import { serverMock } from '../../LocalStorageServer/ServerMock'

export const SET_ITEMS = "SET_ITEMS"


export const setTasks = (data) => ({ type: SET_ITEMS, payload: data });



export const fetchTasks = () => {
    return (dispatch) => {
        const tasks = serverMock.getTasks();
        dispatch({ type: SET_ITEMS, payload: tasks })
    }
}

export const addTask = (data) => {
    return (dispatch) => {
        const tasks = serverMock.addTask(data)
        dispatch({ type: SET_ITEMS, payload: tasks })
    }
};


export const deleteTask = (id) => {
    return (dispatch) => {
        const tasks = serverMock.deleteTask(id)
        dispatch({ type: SET_ITEMS, payload: tasks })

    }
};

export const doneTask = (data) => {
    return (dispatch) => {
        const tasks = serverMock.doneTask(data)
        dispatch({ type: SET_ITEMS, payload: tasks })
    }
};
export const sortByStatus  = () => {
    return (dispatch) => {
        const tasks = serverMock.sortByStatus()
        dispatch({ type: SET_ITEMS, payload: tasks })
    }
};

export const sortByTaskPriority  = () => {
    return (dispatch) => {
        const tasks = serverMock.sortByTaskPriority()
        dispatch({ type: SET_ITEMS, payload: tasks })
    }
};

export const setTaskPriority = (data) => {
    return (dispatch) => {
        const tasks = serverMock.setTaskPriority(data)
        dispatch({ type: SET_ITEMS, payload: tasks })
    }
};


