import { NavItem , DashboardPage, Panel } from "./Components";
import React , { useState } from "react";
import { ProjectsTab } from "./ProjectsTab/ProjectsTab";
import { ExploreTab } from "./ExploreTab/ExploreTab";
import { StoreTab } from "./StoreTab/StoreTab";
import { SettingsTab } from "./SettingsTab/SettingsTab";
import { MenuBar } from "./Components/MenuBar/Menubar";

import { NavigationMenu } from "./Components/NavigationMenu/NavigationMenu";


export function Dashboard(props) {
  const Tabs = { PROJECTS: 0, EXPLORE: 1, STORE: 2, SETTINGS: 3 };
  Object.freeze(Tabs);

  const [activeTab, setactiveTab] = useState(Tabs.PROJECTS);

  function renderTab() {
    switch (activeTab) {
      case Tabs.PROJECTS:
        return <ProjectsTab></ProjectsTab>;
      case Tabs.EXPLORE:
        return <ExploreTab></ExploreTab>;
      case Tabs.STORE:
        return <StoreTab></StoreTab>;
      case Tabs.SETTINGS:
        return <SettingsTab></SettingsTab>;
      default:
        return;
    }
  }

  function setTab(tab) {
    setactiveTab(tab);
  }

  return (
    <DashboardPage>
      <MenuBar/>
      <Panel>{renderTab()}</Panel>

      <NavigationMenu>
        <NavItem
          onClick={() => setTab(Tabs.PROJECTS)}
          state={activeTab === Tabs.PROJECTS ? "active" : ""}
        >
          Projects
        </NavItem>
        <NavItem
          onClick={() => setTab(Tabs.EXPLORE)}
          state={activeTab === Tabs.EXPLORE ? "active" : ""}
        >
          Explore
        </NavItem>
        <NavItem
          onClick={() => setTab(Tabs.STORE)}
          state={activeTab === Tabs.STORE ? "active" : ""}
        >
          Store
        </NavItem>
        <NavItem
          onClick={() => setTab(Tabs.SETTINGS)}
          state={activeTab === Tabs.SETTINGS ? "active" : ""}
        >
          Settings
        </NavItem>
      </NavigationMenu>
    </DashboardPage>
  );
}
