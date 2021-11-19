import React, { useContext } from "react";
import { motion } from "framer-motion";
import { TimeslotContext } from "./TimeslotContext";
import { format } from "date-fns";

interface Props {
  slot: Date;
}

const Timeslot: React.FC<Props> = ({ slot }) => {
  const { selectedTimeslot, setSelectedTimeslot } = useContext(TimeslotContext);

  return (
    <motion.div
      className="inline-block py-2 px-6 bg-white rounded-sm shadow-stripe select-none"
      whileHover={{ scale: 1.05, cursor: "pointer" }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setSelectedTimeslot(slot)}
    >
      {format(slot, "HH:mm")}
    </motion.div>
  );
};

export default Timeslot;
