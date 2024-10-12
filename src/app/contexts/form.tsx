import { createContext, useEffect, useReducer, useState } from 'react';
// import { useLocalStorage } from '../hooks/use-local-storage';

type Field = {
  value: string;
  hasError: boolean;
  errorMessage: string;
}

const initialState: Field = {
  value: '',
  hasError: false,
  errorMessage: ''
}

type FormContextData = {
  nameField: Field;
  dispatchNameField: React.Dispatch<any>;
  emailField: Field;
  dispatchEmailField: React.Dispatch<any>;
  phoneNumberField: Field;
  dispatchPhoneNumberField: React.Dispatch<any>;
  collegeNameField: Field; 
  dispatchCollegeNameField: React.Dispatch<any>; 
  whatYouDoField: Field; 
  dispatchWhatYouDoField: React.Dispatch<any>; 
  departmentField: Field; 
  dispatchDepartmentField: React.Dispatch<any>; 
  branchNameField: Field; 
  dispatchBranchNameField: React.Dispatch<any>; 
  isYearly: boolean;
  setIsYearly: React.Dispatch<React.SetStateAction<boolean>>;
  selectedPlan: Plan;
  setSelectedPlan: React.Dispatch<React.SetStateAction<Plan>>;
  addOns: { title: string, description: string, price: number }[];
  setAddOns: React.Dispatch<React.SetStateAction<{ title: string; description: string; price: number; }[]>>;
  clearForm: () => void;
  submitForm: () => Promise<void>; // Add submit function
}

export const FormContext = createContext({
  nameField: initialState,
  dispatchNameField: () => {},
  emailField: initialState,
  dispatchEmailField: () => {},
  phoneNumberField: initialState,
  dispatchPhoneNumberField: () => {},
  collegeNameField: initialState,
  dispatchCollegeNameField: () => {},
  whatYouDoField: initialState,
  dispatchWhatYouDoField: () => {},
  departmentField: initialState,
  dispatchDepartmentField: () => {},
  branchNameField: initialState,
  dispatchBranchNameField: () => {},
  isYearly: false,
  setIsYearly: () => {},
  selectedPlan: null as any,
  setSelectedPlan: () => {},
  addOns: [],
  setAddOns: () => {},
  clearForm: () => {},
  submitForm: async () => {} // Initialize empty submit function
} as FormContextData);

export const ACTIONS = {
  SET_VALUE: 'SET_VALUE',
  SET_ERROR: 'SET_ERROR',
  CLEAR_ERROR: 'CLEAR_ERROR'
}

function handleFormState(state: Field, action: any) {
  switch (action.type) {
    case ACTIONS.SET_VALUE:
      return {
        ...state,
        value: action.value,
        hasError: false,
        errorMessage: ''
      }
    case ACTIONS.SET_ERROR:
      return {
        ...state,
        hasError: true,
        errorMessage: action.errorMessage
      }
    case ACTIONS.CLEAR_ERROR:
      return {
        ...state,
        errorMessage: '',
        hasError: false
      }
    default:
      return state
  }
}

export type Plan = {
  name: string;
  price: number
}

interface FormProviderProps {
  children: React.ReactNode;
}

export const FormProvider = ({ children }: FormProviderProps) => {
  // Your Info
  const [nameField, dispatchNameField] = useReducer(handleFormState, initialState)
  const [emailField, dispatchEmailField] = useReducer(handleFormState, initialState)
  const [phoneNumberField, dispatchPhoneNumberField] = useReducer(handleFormState, initialState)

  // New Fields
  const [collegeNameField, dispatchCollegeNameField] = useReducer(handleFormState, initialState);
  const [whatYouDoField, dispatchWhatYouDoField] = useReducer(handleFormState, initialState);
  const [departmentField, dispatchDepartmentField] = useReducer(handleFormState, initialState);
  const [branchNameField, dispatchBranchNameField] = useReducer(handleFormState, initialState);

  // Plan
  const [isYearly, setIsYearly] = useState<boolean>(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan>(null as any);

  // Add Ons
  const [addOns, setAddOns] = useState<{ title: string, description: string, price: number }[]>([]);

  function clearForm() {
    dispatchNameField({ type: ACTIONS.SET_VALUE, value: '' })
    dispatchEmailField({ type: ACTIONS.SET_VALUE, value: '' })
    dispatchPhoneNumberField({ type: ACTIONS.SET_VALUE, value: '' })
    dispatchCollegeNameField({ type: ACTIONS.SET_VALUE, value: '' });
    dispatchWhatYouDoField({ type: ACTIONS.SET_VALUE, value: '' });
    dispatchDepartmentField({ type: ACTIONS.SET_VALUE, value: '' });
    dispatchBranchNameField({ type: ACTIONS.SET_VALUE, value: '' });
    setIsYearly(false);
    setSelectedPlan(null as any);
    setAddOns([]);
  }

  // Function to submit form data to the server
  async function submitForm() {
    const formData = {
      name: nameField.value,
      email: emailField.value,
      phoneNumber: phoneNumberField.value,
      collegeName: collegeNameField.value,
      whatYouDo: whatYouDoField.value,
      department: departmentField.value,
      branch: branchNameField.value,
      plan: selectedPlan,
      isYearly,
      addOns
    };

    try {
      const response = await fetch('YOUR_SERVER_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Success:', data);
      clearForm(); // Clear the form after submission
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }

  const value = {
    nameField,
    dispatchNameField,
    emailField,
    dispatchEmailField,
    phoneNumberField,
    dispatchPhoneNumberField,
    collegeNameField,
    dispatchCollegeNameField,
    whatYouDoField,
    dispatchWhatYouDoField,
    departmentField,
    dispatchDepartmentField,
    branchNameField,
    dispatchBranchNameField,
    isYearly,
    setIsYearly,
    selectedPlan,
    setSelectedPlan,
    addOns,
    setAddOns,
    clearForm,
    submitForm // Add submit function to context
  };

  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  );
};
