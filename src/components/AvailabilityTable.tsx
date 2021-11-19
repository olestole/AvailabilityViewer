import { format } from "date-fns";
import React from "react";
import useQuery from "../hooks/useQuery";
import filterDates from "../utils/filterDates";
import TimeslotGroup from "./TimeslotGroup";
import { nb } from "date-fns/esm/locale";
import { motion } from "framer-motion";
import SelectedTimeslot from "./SelectedTimeslot";
import LoadingIndicator from "./LoadingIndicator";

const APIUrl =
  "https://aqb93cd3y2.execute-api.eu-north-1.amazonaws.com/dev/api/v1/availability/groupavailabilityforday?shopId=114&day=20211122&product=SYN";

const TimeSlots: React.FC = () => {
  const { data, loading } = useQuery(APIUrl);

  if (loading) {
    return <LoadingIndicator />;
  }

  const { morning, afternoon, evening } = filterDates(data);

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-primary px-6 py-12 space-y-4 rounded-md shadow-stripe"
    >
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dagens timer</h1>
        <p className="font-light capitalize">
          {format(new Date(), "eeee, d. MMMM", { locale: nb })}
        </p>
      </div>
      <TimeslotGroup dates={morning} timeOfDay="Morgen" />
      <TimeslotGroup dates={afternoon} timeOfDay="Ettermiddag" />
      <TimeslotGroup dates={evening} timeOfDay="Kveld" />
      <SelectedTimeslot />
    </motion.div>
  );
};

export default TimeSlots;
