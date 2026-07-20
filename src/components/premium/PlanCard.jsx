import { Check } from "lucide-react";

export default function PlanCard({ plan }) {
  return (
    <div
      className={`relative rounded-3xl p-8 text-white shadow-xl transition hover:-translate-y-2 ${plan.color}`}
    >
      {plan.popular && (
        <span className="absolute top-5 right-5 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
          MOST POPULAR
        </span>
      )}

      <h2 className="text-3xl font-bold">{plan.name}</h2>

      <div className="mt-5">
        <span className="text-5xl font-bold">{plan.price}</span>
        <span className="text-lg">{plan.period}</span>
      </div>

      <div className="mt-8 space-y-4">
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <Check className="text-green-300" size={18} />
            {feature}
          </div>
        ))}
      </div>

      <button
        className={`mt-8 w-full py-3 rounded-xl font-semibold ${plan.button}`}
      >
        Choose Plan
      </button>
    </div>
  );
}