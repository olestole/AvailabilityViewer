import React from "react";
import AvailabilityTable from "./components/AvailabilityTable";
import Layout from "./components/Layout";
import TimeslotContextProvider from "./components/TimeslotContext";

const App: React.FC = () => {
  return (
    <Layout>
      <TimeslotContextProvider>
        <AvailabilityTable />
      </TimeslotContextProvider>
    </Layout>
  );
};

export default App;
