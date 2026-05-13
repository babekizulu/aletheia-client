//libs
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import type { DonutChartProps } from "../../../../types/data-visualization";

const COLORS = [
  "#4B0082", // Rhodes Purple
  "#FFD700", // Golden Yellow
  "#22C55E", // Green
  "#06B6D4", // Cyan
];

function DonutChart({ data }: DonutChartProps) {
  return (
    <div className="donut-chart">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={70}
            outerRadius={110}
            paddingAngle={4}
            stroke="none"
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index]}/>
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DonutChart;