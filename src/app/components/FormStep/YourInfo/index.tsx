'use client';

import { Fragment, useEffect, useState } from "react";
import { useFormStep } from "../../../hooks/use-form-step";
import { useForm } from "../../../hooks/use-form";
import { ACTIONS } from "../../../contexts/form";
import { TextInput } from "../../Form/TextInput";
import Form from "../../Form";
// import { Footer } from "../../Footer";

// Define a type for the form data
interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
  collegeName: string;
  whatYouDo: string;
  department: string;
  branchName: string;
}

export function YourInfo() {
  const {
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
    dispatchBranchNameField
  } = useForm();

  const { handleNextStep, handlePreviousStep } = useFormStep();

  // Store values immediately for real-time feedback
  const [name, setName] = useState(nameField.value);
  const [email, setEmail] = useState(emailField.value);
  const [phoneNumber, setPhoneNumber] = useState(phoneNumberField.value);
  const [collegeName, setCollegeName] = useState(collegeNameField.value);
  const [whatYouDo, setWhatYouDo] = useState(whatYouDoField.value);
  const [department, setDepartment] = useState(departmentField.value);
  const [branchName, setBranchName] = useState(branchNameField.value);

  // Debounced values for validation
  const [debouncedValues, setDebouncedValues] = useState({
    name,
    email,
    phoneNumber,
    collegeName,
    whatYouDo,
    department,
    branchName,
  });

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValues({
        name,
        email,
        phoneNumber,
        collegeName,
        whatYouDo,
        department,
        branchName,
      });
    }, 150); // Shorter debounce time

    return () => {
      clearTimeout(handler);
    };
  }, [name, email, phoneNumber, collegeName, whatYouDo, department, branchName]);

  function validateForm() {
    let formHasError = false;

    // Existing validations
    if (!debouncedValues.name) {
      dispatchNameField({ type: ACTIONS.SET_ERROR, errorMessage: 'Name is required' });
      formHasError = true;
    }

    if (!debouncedValues.email) {
      dispatchEmailField({ type: ACTIONS.SET_ERROR, errorMessage: 'Email is required' });
      formHasError = true;
    } else {
      const emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(debouncedValues.email)) {
        dispatchEmailField({ type: ACTIONS.SET_ERROR, errorMessage: 'Email is invalid' });
        formHasError = true;
      }
    }

    if (!debouncedValues.phoneNumber) {
      dispatchPhoneNumberField({ type: ACTIONS.SET_ERROR, errorMessage: 'Phone number is required' });
      formHasError = true;
    } else {
      if (debouncedValues.phoneNumber.length < 6) {
        dispatchPhoneNumberField({ type: ACTIONS.SET_ERROR, errorMessage: 'Phone number is invalid' });
        formHasError = true;
      }
    }

    // New field validations
    if (!debouncedValues.collegeName) {
      dispatchCollegeNameField({ type: ACTIONS.SET_ERROR, errorMessage: 'College name is required' });
      formHasError = true;
    }

    if (!debouncedValues.whatYouDo) {
      dispatchWhatYouDoField({ type: ACTIONS.SET_ERROR, errorMessage: 'What you do is required' });
      formHasError = true;
    }

    if (!debouncedValues.department) {
      dispatchDepartmentField({ type: ACTIONS.SET_ERROR, errorMessage: 'Department is required' });
      formHasError = true;
    }

    if (!debouncedValues.branchName) {
      dispatchBranchNameField({ type: ACTIONS.SET_ERROR, errorMessage: 'Branch name is required' });
      formHasError = true;
    }

    return !formHasError;
  }

  // Store data locally without sending to server
  function handleGoForwardStep() {
    const isValid = validateForm();
    if (isValid) {
      const formData: FormData = {
        name: debouncedValues.name,
        email: debouncedValues.email,
        phoneNumber: debouncedValues.phoneNumber,
        collegeName: debouncedValues.collegeName,
        whatYouDo: debouncedValues.whatYouDo,
        department: debouncedValues.department,
        branchName: debouncedValues.branchName,
      };

      // Store the formData for instance
      console.log('Form Data:', formData); // Use this to handle the data as needed

      handleNextStep(); // Move to the next step after successful validation
    }
  }

  return (
    <Fragment>
      <div className="mt-10 flex flex-col gap-4">
      <Form.Card>
        <Form.Header
          title="Personal Info"
          description="Please provide your name, email address, phone number, college name, occupation, department, and branch name. Kindly note that this information will be displayed on your certificates and goodies."
        />

        <div className="mt-5 flex flex-col gap-4">
          <TextInput
            label="Name"
            placeholder="e.g. Akash Bapurao Chaudhari"
            value={name} // Immediate update
            onChange={(name, value) => {
              setName(value);
              dispatchNameField({ type: ACTIONS.SET_VALUE, value });
            }}
            errorMessage={nameField.errorMessage}
            clearError={() => dispatchNameField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={nameField.hasError}
            name="name"
          />
          <TextInput
            label="Email Address"
            placeholder="e.g. akash@domain.com"
            value={email} // Immediate update
            onChange={(name, value) => {
              setEmail(value);
              dispatchEmailField({ type: ACTIONS.SET_VALUE, value });
            }}
            errorMessage={emailField.errorMessage}
            clearError={() => dispatchEmailField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={emailField.hasError}
            name="email"
          />
          <TextInput
            label="Phone Number"
            placeholder="e.g. +91 1234 567 890"
            value={phoneNumber} // Immediate update
            onChange={(name, value) => {
              setPhoneNumber(value);
              dispatchPhoneNumberField({ type: ACTIONS.SET_VALUE, value });
            }}
            errorMessage={phoneNumberField.errorMessage}
            clearError={() => dispatchPhoneNumberField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={phoneNumberField.hasError}
            name="phoneNumber"
          />
          <TextInput
            label="College Name"
            placeholder="e.g. Jawaharlal Nehru Engineering College"
            value={collegeName} // Immediate update
            onChange={(name, value) => {
              setCollegeName(value);
              dispatchCollegeNameField({ type: ACTIONS.SET_VALUE, value });
            }}
            errorMessage={collegeNameField.errorMessage}
            clearError={() => dispatchCollegeNameField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={collegeNameField.hasError}
            name="collegeName"
          />
          <TextInput
            label="What You Do"
            placeholder="e.g. Student, Faculty, Business, Entrepreneur"
            value={whatYouDo} // Immediate update
            onChange={(name, value) => {
              setWhatYouDo(value);
              dispatchWhatYouDoField({ type: ACTIONS.SET_VALUE, value });
            }}
            errorMessage={whatYouDoField.errorMessage}
            clearError={() => dispatchWhatYouDoField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={whatYouDoField.hasError}
            name="whatYouDo"
          />
          <TextInput
            label="Department"
            placeholder="e.g. Computer Science"
            value={department} // Immediate update
            onChange={(name, value) => {
              setDepartment(value);
              dispatchDepartmentField({ type: ACTIONS.SET_VALUE, value });
            }}
            errorMessage={departmentField.errorMessage}
            clearError={() => dispatchDepartmentField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={departmentField.hasError}
            name="department"
          />
          <TextInput
            label="Branch Name"
            placeholder="e.g. Information Technology"
            value={branchName} // Immediate update
            onChange={(name, value) => {
              setBranchName(value);
              dispatchBranchNameField({ type: ACTIONS.SET_VALUE, value });
            }}
            errorMessage={branchNameField.errorMessage}
            clearError={() => dispatchBranchNameField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={branchNameField.hasError}
            name="branchName"
          />
        </div>
      

        {/* Manual Button Implementation */}
        <div className="flex justify-between mt-5">
          <button
            type="button"
            onClick={handlePreviousStep}
            className="px-4 py-2 bg-gray-300 text-black rounded"
          >
            Back
          </button>
          <button
            type="button"
            onClick={handleGoForwardStep}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Next
          </button>
        </div>
      </Form.Card>
      </div>
    </Fragment>
  );
}
