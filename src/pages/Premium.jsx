import PlanCard from "../components/premium/PlanCard";
import { plans } from "../data/plans";

export default function Premium() {
  return (
    <div className="space-y-8">

      <div className="text-center">

        <h1 className="text-4xl font-bold">
          Upgrade to Melodify Premium
        </h1>
        <p className="text-slate-400 mt-3">
          Enjoy uninterrupted music with premium features.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-8">

        {plans.map((plan) => (
          <PlanCard
            key={plan.id}
            plan={plan}
          />
        ))}

      </div>
    </div>
  );
}