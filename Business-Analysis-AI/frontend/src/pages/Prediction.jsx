import React, { useEffect, useState } from "react";
import axios from "axios";
import GroupedBarChart from "../components/GroupedBarChart";

const Prediction = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [locationData, setLocationData] = useState([]);
  const [seasonData, setSeasonData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/predicted-sales-by-category").then(res => {
      const formatted = Object.entries(res.data.predicted_by_category).map(([name, value]) => ({ name, value }));
      setCategoryData(formatted);
    });

    axios.get("http://localhost:8000/predicted-sales-by-location").then(res => {
      const formatted = Object.entries(res.data.predicted_by_location).map(([name, value]) => ({ name, value }));
      setLocationData(formatted);
    });

    axios.get("http://localhost:8000/predicted-sales-by-season").then(res => {
      const formatted = Object.entries(res.data.predicted_by_season).map(([name, value]) => ({ name, value }));
      setSeasonData(formatted);
    });
  }, []);

  return (
    <div className="p-8">
      <GroupedBarChart data={categoryData} title="Predicted Sales by Product Category" />
      <GroupedBarChart data={locationData} title="Predicted Sales by Region" />
      <GroupedBarChart data={seasonData} title="Predicted Sales by Season" />
    </div>
  );
};

export default Prediction;
