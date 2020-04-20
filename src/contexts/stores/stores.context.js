import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

const initialState = {
    stores: [
    ]
}

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function removeEmployee(id) {
        dispatch({
            type: 'REMOVE_STORE',
            payload: id
        });
    };

    function addEmployee(employees) {
        dispatch({
            type: 'ADD_STORE',
            payload: employees
        });
    };

    function editEmployee(employees) {
        dispatch({
            type: 'EDIT_STORE',
            payload: employees
        });
    };

    return (<GlobalContext.Provider value={{
        employees: state.employees,
        removeEmployee,
        addEmployee,
        editEmployee
    }}>
        {children}
    </GlobalContext.Provider>);
}