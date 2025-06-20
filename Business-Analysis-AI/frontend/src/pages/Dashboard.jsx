// Dashboard.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, ResponsiveContainer
} from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#8dd1e1"];

const ChartBlock = ({ title, children }) => (
  <div className="bg-white p-4 rounded shadow-md mb-6">
    <h2 className="text-lg font-semibold mb-4">{title}</h2>
    {children}
  </div>
);

const Dashboard = () => {
  const [topItems, setTopItems] = useState([]);
  const [byCategory, setByCategory] = useState([]);
  const [byLocation, setByLocation] = useState([]);
  const [bySeason, setBySeason] = useState([]);
  const [byFrequency, setByFrequency] = useState([]);
  const [summary, setSummary] = useState({});

  useEffect(() => {
    axios.get("http://localhost:8000/predict-all").then(() => {
      axios.get("http://localhost:8000/top-selling-items").then(res => {
        const formatted = Object.entries(res.data.top_selling_items).map(([name, value]) => ({ name, value }));
        setTopItems(formatted);
      });
      axios.get("http://localhost:8000/predicted-sales-by-category").then(res => {
        const formatted = Object.entries(res.data.predicted_by_category).map(([name, value]) => ({ name, value }));
        setByCategory(formatted);
      });
      axios.get("http://localhost:8000/predicted-sales-by-location").then(res => {
        const formatted = Object.entries(res.data.predicted_by_location).map(([name, value]) => ({ name, value }));
        setByLocation(formatted);
      });
      axios.get("http://localhost:8000/predicted-sales-by-season").then(res => {
        const formatted = Object.entries(res.data.predicted_by_season).map(([name, value]) => ({ name, value }));
        setBySeason(formatted);
      });
      axios.get("http://localhost:8000/predicted-sales-by-frequency").then(res => {
        const formatted = Object.entries(res.data.predicted_by_frequency).map(([name, value]) => ({ name, value }));
        setByFrequency(formatted);
      });
      axios.get("http://localhost:8000/sales-summary").then(res => setSummary(res.data));
    });
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Business Analytics Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow-md">
          <h3 className="text-sm text-gray-500">Total Predicted Sales</h3>
          <p className="text-xl font-bold">${summary.total_predicted_sales?.toLocaleString()}</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <h3 className="text-sm text-gray-500">Top Item</h3>
          <p className="text-xl font-bold">{summary.top_item}</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <h3 className="text-sm text-gray-500">Top Region</h3>
          <p className="text-xl font-bold">{summary.top_region}</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <h3 className="text-sm text-gray-500">Best Season</h3>
          <p className="text-xl font-bold">{summary.best_season}</p>
        </div>
      </div>

      <ChartBlock title="Top Selling Items">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={topItems}>
            <XAxis dataKey="name" interval={0} angle={-45} textAnchor="end" height={80} />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </ChartBlock>

      <ChartBlock title="Predicted Sales by Category">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={byCategory}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </ChartBlock>

      <ChartBlock title="Predicted Sales by Region">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={byLocation}>
            <XAxis dataKey="name" interval={0} angle={-45} textAnchor="end" height={80} />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </ChartBlock>

      <ChartBlock title="Predicted Sales by Season">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={bySeason} dataKey="value" nameKey="name" outerRadius={100} label>
              {bySeason.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </ChartBlock>

      <ChartBlock title="Predicted Sales by Purchase Frequency">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={byFrequency} dataKey="value" nameKey="name" outerRadius={100} label>
              {byFrequency.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </ChartBlock>
    </div>
  );
};

export default Dashboard;
