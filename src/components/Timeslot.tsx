import { format } from "date-fns";
import React from "react";

interface Props {
  slot: Date;
}

const Timeslot: React.FC<Props> = ({ slot }) => {
  return <div className="p-2 bg-gray-500">{format(slot, "HH:mm")}</div>;
};

export default Timeslot;
