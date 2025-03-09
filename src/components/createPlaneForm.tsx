import React, { useState } from "react";

export default function PlaneForm() {
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState(false);
  const [planeImage, setPlaneImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log("Form submitted:", { type, price, status, planeImage });
    // You can add your form submission logic here
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
        Plane Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Type
          </label>
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-300 transition duration-300 ease-in-out"
            placeholder="Enter type"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Price
          </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-300 transition duration-300 ease-in-out"
            placeholder="Enter price"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            checked={status}
            onChange={(e) => setStatus(e.target.checked)}
            className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-200 transition duration-300 ease-in-out"
          />
          <label className="ml-2 text-sm font-medium text-gray-700">
            Status (Available)
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Plane Image URL
          </label>
          <input
            type="text"
            value={planeImage}
            onChange={(e) => setPlaneImage(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-300 transition duration-300 ease-in-out"
            placeholder="Enter image URL"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out font-semibold"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
