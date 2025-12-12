"use client";

import DashboardNavbar from "@/components/DashboardNavbar";

export default function page() {
  const handleAdd = () => alert("Add New User");
  const handleSearch = (text:string) => console.log("Searching:", text);
  const handleFilter = () => alert("Open Filters");
  return (
    <div>
      <DashboardNavbar
        onAdd={handleAdd}
        onSearch={handleSearch}
        onFilter={handleFilter}
      />
    </div>
  )
}
