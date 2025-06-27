import React from "react";
import "./MonthSelect.css";

interface MonthSelectProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const MonthSelect: React.FC<MonthSelectProps> = ({ value, onChange }) => {
  return (
    <div className="month-select-wrapper">
      <select
        className="month-select-dropdown"
        value={value}
        onChange={onChange}
      >
        {months.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>
      <span className="month-arrow">▼</span>
    </div>
  );
};

export default MonthSelect;
