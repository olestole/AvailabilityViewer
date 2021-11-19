import React, { useContext } from "react";
import Timeslot from "./Timeslot";
import { TimeslotContext } from "./TimeslotContext";

const SelectedTimeslot = () => {
  const { selectedTimeslot, setSelectedTimeslot } = useContext(TimeslotContext);
  return (
    selectedTimeslot && (
      <div className="flex flex-col pt-4">
        <hr className="text-white pb-4" />
        <p className="font-light">Valgt tidspunkt</p>
        <div className="flex items-center">
          <button
            className="flex w-8 h-8 p-2 rounded-full bg-red-300 mr-4 text-center justify-center items-center"
            onClick={() => setSelectedTimeslot(null)}
          >
            <span className="text-white">🙅‍♂️</span>
          </button>

          <div className="block">
            <Timeslot slot={selectedTimeslot} />
          </div>
        </div>
      </div>
    )
  );
};

export default SelectedTimeslot;
