import React from "react";

function UploadData() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-gray-800">Upload Your Data</h1>
      <p className="text-gray-600 mt-2">Select a file and upload it.</p>
      <input type="file" className="mt-4 p-2 border rounded" />
    </div>
  );
}

export default UploadData;
