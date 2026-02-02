import React from "react";

interface ScheduleItemProps {
  day: string;
  weekday: string;
  title: string;
  timeStart: string;
  timeEnd: string;
}

const ScheduleItem: React.FC<ScheduleItemProps> = ({ day, weekday, title, timeStart, timeEnd }) => {
  return (
    <div className="bg-[#FFF1C1] rounded-2xl p-5 flex items-center gap-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
      <div className="flex-shrink-0 text-center">
        <div className="text-3xl font-bold text-[#FF8A00]">{day}</div>
        <div className="text-xs font-semibold text-gray-600 mt-1">{weekday}</div>
      </div>
      <div className="border-l-2 border-[#FF8A00] pl-4 flex-1">
        <h4 className="font-bold text-gray-900 text-lg">{title}</h4>
        <p className="text-sm text-gray-600 mt-1">{timeStart} - {timeEnd}</p>
      </div>
    </div>
  );
};

export default ScheduleItem;
