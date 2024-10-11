import React, { createContext, useContext, useState, ReactNode } from "react";

import { useFormStep } from "../../hooks/use-form-step";

import { YourInfo } from "./YourInfo";
import { Plans } from "./Plans";
import { AddOns } from "./AddOns";
import { Summary } from "./Summary";

// Define your step components at the top of your file or import them
// import YourInfo from "./YourInfo"; // Ensure these are correctly imported
// import Plans from "./Plans";
// import AddOns from "./AddOns";
// import Summary from "./Summary";

// Define the steps
const steps = [
  { step: 1, component: YourInfo },
  { step: 2, component: Plans },
  { step: 3, component: AddOns },
  { step: 4, component: Summary },
];



// Define the context type
interface FormContextType {
  formData: any; // Define a more specific type if possible
  setFormData: React.Dispatch<React.SetStateAction<any>>; // Adjust to your actual type
}

// Create a Context for the form data
const FormContext = createContext<FormContextType | undefined>(undefined);

interface FormProviderProps {
  children: ReactNode;
}

// Exporting FormProvider
export function FormProvider({ children }: FormProviderProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    collegeName: "",
    whatYouDo: "",
    department: "",
    branch: "",
    plan: "",
    isYearly: false,
    addOns: [],
    totalPrice: 0,
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
}

// Custom hook to use the FormContext
export function useFormData() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormData must be used within a FormProvider");
  }
  return context;
}

export function FormStep() {
  const { currentStep } = useFormStep();

  const step = steps.find(({ step }) => step === currentStep);

  return (
    <div className="flex flex-col flex-1 justify-between">
      {step && <step.component />} {/* Corrected here */}
    </div>
  );
}
