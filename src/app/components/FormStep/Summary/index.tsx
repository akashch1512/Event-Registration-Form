import { Fragment, useEffect, useState } from "react";
import { useForm } from "../../../hooks/use-form";
import { useFormStep } from "../../../hooks/use-form-step";
import { priceFormatter } from "../../../util/price-formatter";
import { Footer } from "../../Footer";
import Form from "../../Form";
import { PostConfirmation } from "./PostConfirmation";
import { TotalPrice } from "./TotalPrice";
import { AddOnItem } from "./AddOnItem";

export function Summary() {
  const [submitted, setSubmitted] = useState(false);

  const { handlePreviousStep, moveToStep } = useFormStep();
  const { addOns, selectedPlan, isYearly, clearForm, ...userInfo } = useForm(); // Destructure user info from the form context

  function handleChangePlan() {
    moveToStep(2);
  }

  // Define a simple function for handleGoForwardStep
  function handleGoForwardStep() {
    // This could include any logic you'd like to perform before submitting
    setSubmitted(true);
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
        <form
          name="contact" // Name of the form
          method="POST" // Use POST method
          data-netlify="true" // This attribute allows Netlify to recognize the form
          onSubmit={(e) => {
            handleGoForwardStep(); // Call the new function for forward step logic
            // Do not prevent the default form submission here
          }}
        >
          <input type="hidden" name="form-name" value="contact" /> {/* Hidden field for Netlify */}
          
          <div className="mt-5 flex flex-col gap-3 bg-very-light-grey rounded-lg p-4 sm:px-6">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1 items-start">
                <strong className="text-sm font-medium text-denim sm:text-base">
                  {`${selectedPlan?.name || 'No Plan Selected'} (${isYearly ? 'Yearly' : 'Monthly'})`}
                </strong>
                <button
                  type="button" // Change button type to prevent form submission
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
          <button
            type="submit" // Submit button for the form
            className="mt-4 btn-primary"
          >
            Submit
          </button>
        </form>
      </Form.Card>
      <Footer
        handleGoForwardStep={handleGoForwardStep} // Pass the new forward step function
        handleGoBack={handlePreviousStep}
      />
    </Fragment>
  );
}
