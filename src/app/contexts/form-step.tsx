import React, { createContext, useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks/use-local-storage';

type FormStepContextData = {
  currentStep: number;
  steps: { title: string; number: number }[];
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  moveToStep: (step: number) => void;
}

export const FormStepContext = createContext<FormStepContextData>({
  currentStep: 1, // Initialize to 1
  steps: [],
  handleNextStep: () => {},
  handlePreviousStep: () => {},
  moveToStep: () => {},
});

interface FormStepProviderProps {
  children: React.ReactNode;
}

export const FormStepProvider: React.FC<FormStepProviderProps> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [steps] = useState<{ title: string; number: number }[]>([
    { title: 'Your info', number: 1 },
    { title: 'Select plan', number: 2 },
    { title: 'Terms & Conditions', number: 3 },
    { title: 'Summary', number: 4 },
  ]);

  const { getValueFromLocalStorage, saveValueToLocalStorage } = useLocalStorage();
  
  useEffect(() => {
    const step = getValueFromLocalStorage('currentStep');
    if (step) {
      setCurrentStep(Number(step)); // Ensure it's a number
    }
  }, [getValueFromLocalStorage]);

  const handleNextStep = () => {
    const newStepValue = currentStep + 1;
    if (newStepValue <= steps.length) {
      setCurrentStep(newStepValue);
      saveValueToLocalStorage('currentStep', newStepValue.toString());
    }
  };

  const handlePreviousStep = () => {
    const newStepValue = currentStep - 1;
    if (newStepValue >= 1) {
      setCurrentStep(newStepValue);
      saveValueToLocalStorage('currentStep', newStepValue.toString());
    }
  };

  const moveToStep = (step: number) => {
    if (step >= 1 && step <= steps.length) {
      setCurrentStep(step);
      saveValueToLocalStorage('currentStep', step.toString());
    }
  };

  return (
    <FormStepContext.Provider value={{ steps, currentStep, handleNextStep, handlePreviousStep, moveToStep }}>
      {children}
    </FormStepContext.Provider>
  );
};
