import { createContext, useState } from "react";

type ContextType = {
  setSelectedTimeslot: (date: Date | null) => void;
  selectedTimeslot: Date | null;
};

export const TimeslotContext = createContext<ContextType>({
  selectedTimeslot: null,
  setSelectedTimeslot: (date: Date | null) => {},
});

const TimeslotContextProvider: React.FC = ({ children }) => {
  const [selectedTimeslot, setSelectedTimeslot] = useState<Date | null>(null);

  return (
    <TimeslotContext.Provider value={{ selectedTimeslot, setSelectedTimeslot }}>
      {children}
    </TimeslotContext.Provider>
  );
};

export default TimeslotContextProvider;
