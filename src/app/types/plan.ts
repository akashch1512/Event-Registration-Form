export type TypeOfPlan = 'monthly' | 'yearly';

export type PlanWithPrices = {
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
  icon?: string; // Add icon property (optional)
  freeTrialDescription?: string; // Add freeTrialDescription property (optional)
};
