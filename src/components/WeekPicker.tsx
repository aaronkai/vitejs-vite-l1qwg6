import { useState } from "react";
export default function WeekPicker({ week, setWeek }) {
  const [selectedWeek, setSelectedWeek] = useState(1);
  function handleClick(value: number) {
    setWeek(value - 1);
    setSelectedWeek(value);
  }
  const weeks = [1, 2, 3];
  return (
    <div>
      <div className="grid grid-flow-col gap-x-1">
        {weeks.map((week) => {
          return (
            <button
              className={` rounded text-slate-900 font-display text-xl py-2 ${
                week == selectedWeek ? "bg-pink-300" : "bg-yellow-200"
              }`}
              onClick={() => handleClick(week)}
              key={week}
            >
              Week {week}
            </button>
          );
        })}
      </div>
    </div>
  );
}
