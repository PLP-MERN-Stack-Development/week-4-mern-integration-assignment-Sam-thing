import { useEffect, useState } from "react";
import { categoryService } from "../services/api";

export default function CategoryFilter({ onSelect }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    categoryService.getAllCategories().then((data) => setCategories(data || []));
  }, []);

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="category" className="font-medium text-gray-700">Filter:</label>
      <select
        id="category"
        onChange={(e) => onSelect(e.target.value)}
        className="p-2 rounded border border-blue-300 bg-white shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat._id} value={cat._id}>
            {cat.name}
          </option>
        ))}
      </select>
    </div>
  );
}
// This component fetches categories from the API and renders them in a dropdown.