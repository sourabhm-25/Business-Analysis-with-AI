import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const GroupedBarChart = ({ data, title }) => (
  <div className="mb-8">
    <h2 className="text-lg font-semibold mb-2">{title}</h2>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="name"
      interval={0}
      angle={-45}
      textAnchor="end"
      height={80} // add space for long labels
       />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#4299E1" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);
export default GroupedBarChart;