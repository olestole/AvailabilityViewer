import React from "react";
import TimeSlots from "./components/AvailabilityTable";
import Layout from "./Layout";

const App: React.FC = () => {
  return (
    <Layout>
      <TimeSlots />
    </Layout>
  );
};

export default App;
