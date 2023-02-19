import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import HeaderTabs from "../components/HeaderTabs";
import ActiveTask from "../components/tasks/ActiveTask.js";
import BuyTokens from "../components/tasks/BuyTokens";
import SetupTasks from "../components/tasks/SetupTasks";

const Tasks = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.query.tab === "1") {
      setActiveTabs(1);
    } else if (router.query.tab === "2") {
      setActiveTabs(2);
    } else {
      setActiveTabs(0);
    }
  }, []);

  const [activeTabs, setActiveTabs] = useState(0);
  return (
    <div className="w-screen overflow-hidden min-h-screen bg-gradient-to-r from-pink-100 to-violet-100">
      <HeaderTabs activeTabs={activeTabs} setActiveTabs={setActiveTabs} />

      {activeTabs === 0 && <SetupTasks setActiveTabs={setActiveTabs} />}
      {activeTabs === 1 && <ActiveTask />}
      {activeTabs === 2 && <BuyTokens />}
    </div>
  );
};

export default Tasks;
