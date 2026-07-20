import {
  Music,
  Users,
  DollarSign,
  PlayCircle,
} from "lucide-react";

const icons = {
  music: Music,
  users: Users,
  dollar: DollarSign,
  play: PlayCircle,
};

export default function DashboardCard({
  title,
  value,
  change,
  color,
  icon,
}) {
  const Icon = icons[icon];

  return (
    <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-green-500 transition duration-300 hover:-translate-y-1">

      <div className="flex
flex-col
md:flex-row
justify-between
md:items-center
gap-5 items-center">

        <div>

          <p className="text-gray-400 text-sm">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>

          <span className={`${color} text-sm font-semibold`}>
            {change}
          </span>

        </div>

        <div className="bg-slate-700 p-3 rounded-xl">

          <Icon size={28}/>

        </div>

      </div>

    </div>
  );
}