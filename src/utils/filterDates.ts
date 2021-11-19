import { RootObject } from "../types/AvailabilityRootObject";

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

export default filterDates;