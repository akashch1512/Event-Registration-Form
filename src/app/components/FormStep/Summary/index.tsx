import { Fragment, useEffect, useState } from "react";
import { useForm } from "../../../hooks/use-form";
import { useFormStep } from "../../../hooks/use-form-step";
import { priceFormatter } from "../../../util/price-formatter";
import { Footer } from "../../Footer";
import Form from "../../Form";
import { PostConfirmation } from "./PostConfirmation";
import { TotalPrice } from "./TotalPrice";
import { AddOnItem } from "./AddOnItem";
import axios from 'axios';  // Already imported

export function Summary() {
  const [submitted, setSubmitted] = useState(false);

  const { handlePreviousStep, moveToStep } = useFormStep();
  const { addOns, selectedPlan, isYearly, clearForm, ...userInfo } = useForm(); // Destructure user info from the form context

  // New function to handle submission and send data to server
  async function handleGoForwardStep() {
    try {
      // Combine the user info from the first step with the summary data
      const userData = {
        ...userInfo, // Spread operator to include all user data from the first step
        plan: selectedPlan?.name || "No Plan Selected", // Add fallback for plan name
        isYearly: isYearly,
        addOns: addOns.map(addOn => ({
          title: addOn.title,
          price: addOn.price,
        })),
        totalPrice: (selectedPlan?.price || 0) + addOns.reduce((acc, addOn) => acc + addOn.price, 0), // Add fallback for price
      };

      // Send POST request to server
      const response = await axios.post('https://server-nlohb1uk6-aakash-choudharis-projects.vercel.app/api/save-data', userData);
      console.log('Server response:', response.data); // Log the response from the server

      // If successful, mark the form as submitted
      setSubmitted(true);
    } catch (error) {
      console.error('Error saving data to server:', error);
    }
  }

  function handleChangePlan() {
    moveToStep(2);
  }

  useEffect(() => {
    if (submitted) {
      clearForm();
      setTimeout(() => {
        moveToStep(1);
      }, 4000);
    }
  }, [submitted, moveToStep, clearForm]);  

  if (submitted) {
    return <PostConfirmation />;
  }

  // Add null checks for selectedPlan before calculating prices
  const addOnsTotalPrice = addOns.reduce((acc, addOn) => acc + addOn.price, 0);
  const finalPrice = (selectedPlan?.price || 0) + addOnsTotalPrice; // Ensure selectedPlan is not null

  return (
    <Fragment>
      <Form.Card>
        <Form.Header
          title="Finishing up"
          description="Double-check everything looks OK before confirming."
        />
        <div className="mt-5 flex flex-col gap-3 bg-very-light-grey rounded-lg p-4 sm:px-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1 items-start">
              <strong className="text-sm font-medium text-denim sm:text-base">
                {`${selectedPlan?.name || 'No Plan Selected'} (${isYearly ? 'Yearly' : 'Monthly'})`}
              </strong>
              <button
                className="text-sm leading-5 font-normal text-grey underline cursor-pointer hover:text-purple duration-200"
                onClick={handleChangePlan}
              >
                Change
              </button>
            </div>
            <span className="text-sm leading-5 font-bold text-denim sm:text-base">
              {priceFormatter(selectedPlan?.price || 0)} {/* Add fallback */}
            </span>
          </div>

          {addOns.length > 0 && (
            <div className="h-px w-full bg-border-grey" />
          )}

          {addOns.map((addOn, index) => (
            <AddOnItem
              key={index}
              title={addOn.title}
              price={addOn.price}
              isYearly={isYearly}
            />
          ))}
        </div>

        <TotalPrice
          finalPrice={finalPrice}
          isYearly={isYearly}
        />
      </Form.Card>
      <Footer
        handleGoForwardStep={handleGoForwardStep} // Submitting data when clicking next
        handleGoBack={handlePreviousStep}
      />
    </Fragment>
  );
}


// 1bPdYcC0WbA2B7zaJe096bxSJJoIWOJhJOxc7Ol0dNoQ