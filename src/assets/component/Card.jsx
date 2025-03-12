import React from "react";
import { FaWallet, FaMoneyBillWave, FaHandHoldingUsd } from "react-icons/fa";

const Card = ({ title, amount, date, icon }) => {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-300 text-white p-6 rounded-xl shadow-lg flex flex-col justify-between space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-3xl font-bold mt-2">Rs: {amount}/=</p>
        </div>
        <div className="bg-white/20 p-3 rounded-full shadow-md">
          {React.createElement(icon, { size: 28 })}
        </div>
      </div>

      <div className="text-sm text-white/80 border-t border-white/20 pt-2">
        <p>{date}</p>
      </div>
    </div>
  );
};

export default Card;
