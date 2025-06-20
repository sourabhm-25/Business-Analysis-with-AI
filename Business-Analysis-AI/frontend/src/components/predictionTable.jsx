import { useEffect, useState } from "react";

const PredictionTable = () => {
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPredictions() {
      try {
        const res = await fetch("http://localhost:8000/predict-all");
        const data = await res.json();

        if (res.ok) {
          if (Array.isArray(data)) {
            setPredictions(data);
          } else {
            alert("Unexpected response format");
          }
        } else {
          alert("Prediction failed: " + data.detail);
        }
      } catch (err) {
        console.error(err);
        alert("Error fetching predictions");
      } finally {
        setLoading(false);
      }
    }

    fetchPredictions();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading predictions...</p>;

  if (predictions.length === 0) return <p className="text-center mt-10">No predictions available</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow mt-10 overflow-auto">
      <h3 className="text-xl font-bold mb-4">Predicted Sales Amounts</h3>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2">Location</th>
            <th className="border px-4 py-2">Season</th>
            <th className="border px-4 py-2">Previous Purchases</th>
            <th className="border px-4 py-2">Frequency of Purchases</th>
            <th className="border px-4 py-2">Predicted Amount (USD)</th>
          </tr>
        </thead>
        <tbody>
          {predictions.map((row, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{row.Category}</td>
              <td className="border px-4 py-2">{row.Location}</td>
              <td className="border px-4 py-2">{row.Season}</td>
              <td className="border px-4 py-2">{row["Previous Purchases"]}</td>
              <td className="border px-4 py-2">{row["Frequency of Purchases"]}</td>
              <td className="border px-4 py-2">{row["Predicted Amount"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PredictionTable;
