import React from "react";
import DataTable from "react-data-table-component";
import { FaPlus } from "react-icons/fa";

const Expenses = () => {
  const columns = [
    {
      name: "Date",
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "Amount (Rs.)",
      selector: (row) => row.amount,
      sortable: true,
      right: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex space-x-2">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-lg transition-all duration-300">
            Edit
          </button>

          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg transition-all duration-300">
            Delete
          </button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      width: "200px",
    },
  ];

  const data = [
    { date: "2024-08-05", description: "Transport", amount: "32,000.00" },
    { date: "2025-04-09", description: "Food", amount: "8500.00" },
    { date: "2025-01-07", description: "Shopping", amount: "76,000.00" },
    { date: "2025-03-04", description: "Utilities", amount: "78,500.00" },
    { date: "2025-03-05", description: "Transport", amount: "54,000.00" },
  ];
  return (
    <div className="bg-blue-50 h-full px-10">
      <div className="py-4   mb-6">
        <h1 className="text-3xl font-bold text-gray-800 relative ">
          Expenses Sheet
        </h1>
      </div>
      <div className="flex items-center justify-between mb-3 grid grid-cols-5 gap-4 ">
        <select class=" block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
          <option>Select Category</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
        <input
          placeholder="amount"
          class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        />

        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
          <span className="flex items-center ">
            <FaPlus className="mr-2" />
            Add expense
          </span>
        </button>
      </div>

      <div className=" w-[1200px] bg-white mt-20  rounded-lg p-6">
        <DataTable
          columns={columns}
          data={data}
          customStyles={{
            headCells: {
              style: {
                fontSize: "18px",
                fontWeight: "bold",
                backgroundColor: "#f3f4f6",
                padding: "12px",
                borderBottom: "2px solid #e5e7eb",
              },
            },
            cells: {
              style: {
                fontSize: "16px",
                padding: "10px",
              },
            },
            rows: {
              style: {
                borderBottom: "1px solid #e5e7eb",
                "&:hover": {
                  backgroundColor: "#f9fafb",
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Expenses;
