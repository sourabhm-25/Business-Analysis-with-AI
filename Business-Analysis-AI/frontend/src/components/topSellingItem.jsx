import { useEffect, useState } from "react";

const TopSellingItems = () => {
  const [topItems, setTopItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTopSellingItems = async () => {
    try {
      // Step 1: Check if dataset is uploaded
      const statusRes = await fetch("http://localhost:8000/dataset-status");
      const statusData = await statusRes.json();

      if (!statusData.dataset_loaded) {
        setLoading(false);
        return;
      }

      // Step 2: Fetch top selling items
      const response = await fetch("http://localhost:8000/top-selling-item");
      const data = await response.json();

      if (response.ok) {
        setTopItems(Object.entries(data.top_selling_items));
      } else {
        alert("Error fetching top selling items: " + data.detail);
      }
    } catch (error) {
      console.error("Error fetching top selling items:", error);
      alert("Failed to fetch top selling items");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTopSellingItems();
  }, []);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h3 className="text-md font-semibold text-gray-700 mb-2">Top Selling Items</h3>
      {loading ? (
        <p>Loading...</p>
      ) : topItems.length > 0 ? (
        <ul className="list-disc list-inside text-gray-600">
          {topItems.map(([item, count]) => (
            <li key={item}>
              {item}: {count} sales
            </li>
          ))}
        </ul>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default TopSellingItems;
