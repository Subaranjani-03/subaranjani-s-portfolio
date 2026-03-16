import React from "react";

const Stats = ({ stats }) => {
  return (
    <div className="stats-section">
      <h3 className="stats-title">Stats</h3>

      <div className="stats">
        {stats.map((item, index) => (
          <div className="card" key={index}>
            <i className={`${item.icon} stat-icon`}></i>
            {item.value}
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
