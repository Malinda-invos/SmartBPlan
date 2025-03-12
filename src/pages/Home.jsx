import React from "react";
import Card from "../assets/component/Card";

import { FaWallet, FaMoneyBillWave, FaHandHoldingUsd } from "react-icons/fa";

const Home = () => {
  return (
    <div className="bg-blue-50 h-full px-10">
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
    </div>
  );
};

export default Home;
