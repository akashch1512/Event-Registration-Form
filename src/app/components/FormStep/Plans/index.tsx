import { Fragment } from "react";

import { PlanCard } from "./PlanCard";
import { Footer } from "../../Footer";
import Form from "../../Form";

import { useFormStep } from "../../../hooks/use-form-step";
import { useLocalStorage } from "../../../hooks/use-local-storage";
import { useForm } from "../../../hooks/use-form";
import { PlanWithPrices } from "../../../types/plan";

export function Plans() {
  const {
    selectedPlan,
    setSelectedPlan,
  } = useForm();

  const { handleNextStep, handlePreviousStep } = useFormStep();
  const { saveValueToLocalStorage } = useLocalStorage();

  const plans: PlanWithPrices[] = [
    {
      name: "Basic Plan",
      price: { monthly: 640, yearly: 1000 }, // Assume yearly is also presented in rupees
      icon: "/path/to/basic-plan-icon.svg", // Update with the actual icon path
      freeTrialDescription: "Food Will be Provided", // Optional
    },
    {
      name: "Premium Plan",
      price: { monthly: 1000, yearly: 1000 }, // Keeping the yearly price same
      icon: "/path/to/premium-plan-icon.svg", // Update with the actual icon path
      freeTrialDescription: "haat se khila denge", // Optional
    },
  ];

  function handleGoForwardStep() {
    if (!selectedPlan) return;
    const planDetails = plans.find(plan => plan.name === selectedPlan.name);
    if (!planDetails) return; // Ensure the plan exists
    saveValueToLocalStorage('plan', JSON.stringify({
        name: planDetails.name,
        price: planDetails.price, // Save the whole price object
    }));
    handleNextStep();
}


  function handleSelectPlan(plan: PlanWithPrices) {
    setSelectedPlan({
      name: plan.name,
      price: plan.price.monthly, // Set the monthly price by default
    });
  }

  return (
    <Fragment>
      <Form.Card>
        <Form.Header
          title="Select your plan"
          description="Choose between our basic and premium plans."
        />

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        {plans.map(plan => (
    <PlanCard
        key={plan.name}
        plan={plan}
        icon={plan.icon || "/path/to/default/icon.png"} // Provide a default icon
        isSelected={plan.name === selectedPlan?.name}
        handleSelectPlan={handleSelectPlan}
        freeTrialDescription={plan.freeTrialDescription || "No free trial available."} // Provide a default message
    />
))}

        </div>
      </Form.Card>
      <Footer
        handleGoForwardStep={handleGoForwardStep}
        handleGoBack={handlePreviousStep}
      />
    </Fragment>
  );
}
