import React from "react";
import useQuery from "../hooks/useQuery";
import { RootObject } from "../types/AvailabilityRootObject";
import TimeslotGroup from "./TimeslotGroup";

const filterDates = (dates: RootObject[]) => {
  let morning = [];
  let afternoon = [];
  let evening = [];

  for (const date of dates) {
    const formattedDate = new Date(date.time);
    if (formattedDate.getHours() < 12) {
      morning.push(formattedDate);
      continue;
    } else if (formattedDate.getHours() < 18) {
      afternoon.push(formattedDate);
      continue;
    }
    evening.push(formattedDate);
  }

  return { morning, afternoon, evening };
};

const TimeSlots: React.FC = () => {
  const { data, loading } = useQuery(
    "https://aqb93cd3y2.execute-api.eu-north-1.amazonaws.com/dev/api/v1/availability/groupavailabilityforday?shopId=114&day=20211122&product=SYN"
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  const { morning, afternoon, evening } = filterDates(data);

  return (
    <div className="bg-blue-300 px-6 py-12 space-y-4 rounded-md">
      <TimeslotGroup dates={morning} timeOfDay="Morning" />
      <TimeslotGroup dates={afternoon} timeOfDay="Afternoon" />
      <TimeslotGroup dates={evening} timeOfDay="Evening" />
    </div>
  );
};

export default TimeSlots;
