import React, { useState } from "react";

function FileUpload({ onUploadSuccess }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a CSV file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const res = await fetch("http://localhost:8000/upload-dataset/", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (res.ok) {
        alert("File uploaded successfully!");
        onUploadSuccess();
        setSelectedFile(null);
      } else {
        alert("Upload failed: " + data.detail);
      }
    } catch (err) {
      console.error(err);
      alert("Upload failed due to network or server error");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow mt-10">
      <h2 className="mb-4 font-semibold text-gray-700">Upload Sales Data (CSV)</h2>
      <input type="file" accept=".csv" onChange={handleFileChange} className="mb-4 p-2 border rounded w-full" />
      <button onClick={handleUpload} className="bg-blue-600 text-white py-2 rounded w-full hover:bg-blue-700 transition">
        Upload
      </button>
      {selectedFile && <p className="mt-2">Selected file: {selectedFile.name}</p>}
    </div>
  );
}

export default FileUpload;
