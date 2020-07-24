import React, { createContext, useReducer } from "react";
import { formReducer, initialState } from "reducers/formReducer";

export const FormContext = createContext();

export const FormProvider = ({ children, ...otherProps }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider value={{ state, dispatch, ...otherProps }}>
      {children}
    </FormContext.Provider>
  );
};