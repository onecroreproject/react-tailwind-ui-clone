"use client";

export default function StatsBar() {
  const stats = [
    { value: "10", label: "Years Experience", suffix: "+" },
    { value: "143", label: "Completed Projects", suffix: "" },
    { value: "114", label: "Happy Customers", suffix: "" },
    { value: "20", label: "Honors and Awards", suffix: "+" }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {stats.map((stat, index) => (
        <div key={index} className="flex items-center gap-3">
          <div className="text-[#ffc107] text-4xl font-bold flex items-start">
            {stat.value}
            <span className="text-2xl">{stat.suffix}</span>
          </div>
          <div className="text-white text-sm leading-tight">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
