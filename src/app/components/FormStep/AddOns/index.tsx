import { Fragment, useState } from "react";

import { useForm } from "../../../hooks/use-form";
import { useFormStep } from "../../../hooks/use-form-step";
import { useLocalStorage } from "../../../hooks/use-local-storage";

import { Footer } from "../../Footer";
import Form from "../../Form";

export function AddOns() {
  const { addOns, setAddOns } = useForm();
  const { handleNextStep, handlePreviousStep } = useFormStep();
  const { saveValueToLocalStorage } = useLocalStorage();
  
  // State to manage checkbox
  const [isAgreed, setIsAgreed] = useState(false);

  function handleGoForwardStep() {
    if (!isAgreed) {
      alert("You must agree to the terms and conditions before proceeding.");
      return;
    }

    // Save add-ons to local storage
    saveValueToLocalStorage('add-ons', JSON.stringify(addOns));
    handleNextStep();
  }

  return (
    <Fragment>
      <Form.Card>
        <Form.Header
          title="Terms and Conditions"
          description="Please read and agree to our terms and conditions."
        />
        
        <div className="mt-5">
          <p>
            By agreeing to our terms and conditions, you acknowledge that 
            you have read and understood the rules and policies of our service. 
            If you have any questions, please contact our support team.
          </p>
          
          <div className="flex items-center mt-4">
            <input 
              type="checkbox" 
              id="terms" 
              checked={isAgreed} 
              onChange={() => setIsAgreed(prev => !prev)} 
            />
            <label htmlFor="terms" className="ml-2">
              I agree to the terms and conditions
            </label>
          </div>
        </div>
      </Form.Card>
      <Footer
        handleGoForwardStep={handleGoForwardStep}
        handleGoBack={handlePreviousStep}
      />
    </Fragment>
  );
}
