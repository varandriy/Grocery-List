import { serverMock } from '../../LocalStorageServer/Storage';

export const SET_ITEMS = 'SET_ITEMS';

export const fetchEntries = () => {
  return (dispatch) => {
    const entries = serverMock.getEntries();
    dispatch({ type: SET_ITEMS, payload: entries });
  };
};

export const addEntry = (data) => {
  return (dispatch) => {
    const entries = serverMock.addEntry(data);
    dispatch({ type: SET_ITEMS, payload: entries });
  };
};

export const deleteEntry = (id) => {
  return (dispatch) => {
    const entries = serverMock.deleteEntry(id);
    dispatch({ type: SET_ITEMS, payload: entries });
  };
};

export const doneEntry = (data) => {
  return (dispatch) => {
    const entries = serverMock.doneEntry(data);
    dispatch({ type: SET_ITEMS, payload: entries });
  };
};

export const sortByEntryPriority = () => {
  return (dispatch) => {
    const entries = serverMock.sortByEntryPriority();
    dispatch({ type: SET_ITEMS, payload: entries });
  };
};

export const setEntryPriority = (data) => {
  return (dispatch) => {
    const entries = serverMock.setEntryPriority(data);
    dispatch({ type: SET_ITEMS, payload: entries });
  };
};


