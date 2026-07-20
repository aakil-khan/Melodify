import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import { topArtists } from "../../data/chartData";

export default function BarChartComponent() {
  return (
    <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6">

      <h2 className="text-xl font-semibold mb-6">
        Top Artists
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={topArtists}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="artist" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="streams"
            fill="#22C55E"
            radius={[8,8,0,0]}
          />

        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}