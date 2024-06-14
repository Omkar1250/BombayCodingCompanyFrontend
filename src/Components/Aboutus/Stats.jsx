import React from "react";

const Stats = [
  { count: "10+", label: "Projects Completed" },
  { count: "4", label: "Team Members" },
  { count: "5+", label: "Satisfied Clients" },
  { count: "2+", label: "Years of Experience" },
];

const StatsComponent = () => {
  return (
    <div className="bg-gray-900">
      {/* Stats */}
      <div className="flex flex-col gap-10 justify-between w-11/12 max-w-maxContent text-white mx-auto py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 text-center">
          {Stats.map((data, index) => {
            return (
              <div className="flex flex-col py-6" key={index}>
                <h1 className="text-3xl md:text-4xl font-bold text-white">
                  {data.count}
                </h1>
                <h2 className="font-semibold text-base md:text-lg text-gray-300">
                  {data.label}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatsComponent;
