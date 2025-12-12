"use client";

import { useState } from "react";
import { FaPlus, FaSearch, FaFilter } from "react-icons/fa";

// ❗ أول حاجة: نعرف نوع الـ Props
interface DashboardNavbarProps {
  onAdd?: () => void;
  onSearch?: (value: string) => void;
  onFilter?: () => void;
  onLogout?: () => void;
}

export default function DashboardNavbar({
  onAdd,
  onSearch,
  onFilter,
 
}: DashboardNavbarProps) {
  
  const [searchText, setSearchText] = useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    onSearch && onSearch(e.target.value);
  };

  return (
    <div className="w-full bg-white shadow-md p-4 rounded-2xl mb-6 flex flex-col md:flex-row gap-4 md:items-center justify-between">

      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-700">Dashboard</h1>

      {/* Actions */}
      <div className="flex flex-col md:flex-row gap-4 items-center">

        {/* Search */}
        <div className="flex items-center bg-gray-100 px-4 py-2 rounded-xl w-full md:w-72">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            value={searchText}
            onChange={handleSearch}
            placeholder="Search..."
            className="bg-transparent outline-none w-full text-gray-700"
          />
        </div>

        {/* Filter */}
        <button
          onClick={() => onFilter && onFilter()}
          className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-xl shadow-md"
        >
          <FaFilter /> Filter
        </button>

        {/* Add */}
        <button
          onClick={() => onAdd && onAdd()}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl shadow-md"
        >
          <FaPlus /> Add
        </button>

       

      </div>
    </div>
  );
}
