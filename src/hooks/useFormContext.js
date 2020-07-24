import { useContext } from "react";
import { FormContext } from 'context/FormProvider';

export const useFormContext = () => useContext(FormContext);