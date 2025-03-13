import React from "react";
import Card from "../assets/component/Card";
import { Link } from "react-router-dom";
import { Line, Bar } from "react-chartjs-2";
import { dataline, dataline2, dataline3 } from "../assets/Data/ChartData";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement
);

import {
  FaWallet,
  FaMoneyBillWave,
  FaHandHoldingUsd,
  FaPlus,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="bg-blue-50 h-full px-10">
      <div className="p-5 flex ">
        <Link to={"/ex"}>
          <button
            type="button"
            class="flex items-center focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            <FaPlus className="mr-2" />
            Add Expenses
          </button>
        </Link>
        <Link to={"/in"}>
          <button
            type="button"
            class="flex items-center focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            <FaPlus className="mr-2" />
            Add Income
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-4 p-5">
        <Card
          title="Total Income"
          amount="300,000.00"
          date="2025 - March "
          icon={FaWallet}
        />
        <Card
          title="Total Expenses"
          amount="128,325.00"
          date="2025 - March"
          icon={FaMoneyBillWave}
        />
        <Card
          title="Rest"
          amount="230,300.00"
          date="2025 - March"
          icon={FaHandHoldingUsd}
        />
      </div>
      <div className="bg-white flex flex-wrap justify-between p-6 rounded-lg ">
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <h3 className="text-lg font-semibold mb-4">Income Chart</h3>
          <div className="bg-gray-100 p-4 rounded-xl shadow-sm">
            <Line data={dataline} options={{ responsive: true }} />
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <h3 className="text-lg font-semibold mb-4">Expenses Chart</h3>
          <div className="bg-gray-100 p-4 rounded-xl shadow-sm">
            <Line data={dataline2} options={{ responsive: true }} />
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <h3 className="text-lg font-semibold mb-4">Saving Chart</h3>
          <div className="bg-gray-100 p-4 rounded-xl shadow-sm">
            <Line data={dataline3} options={{ responsive: true }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
