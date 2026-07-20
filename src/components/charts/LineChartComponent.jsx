import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import { monthlyStreams } from "../../data/chartData";

export default function LineChartComponent() {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
      <h2 className="text-xl font-semibold mb-6">
        Monthly Streams
      </h2>
      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={monthlyStreams}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month"/>
          <YAxis/>
          <Tooltip/>

          <Line
            type="monotone"
            dataKey="streams"
            stroke="#1DB954"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}