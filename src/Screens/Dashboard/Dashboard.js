import { NavigationMenu, NavItem, Panel , MenuBar } from "./Components";
import { useState } from "react";
import { ProjectsTab } from "./ProjectsTab/ProjectsTab";
import { ExploreTab } from "./ExploreTab/ExploreTab";
import { StoreTab } from "./StoreTab/StoreTab";
import { SettingsTab } from "./SettingsTab/SettingsTab";


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

  function showTab(tab) {
    setactiveTab(tab);
  }

  return (
    <main>
      <MenuBar></MenuBar>

     
        <NavigationMenu>
          <NavItem
            onClick={() => showTab(Tabs.PROJECTS)}
            state={activeTab === Tabs.PROJECTS ? "active" : ""}
          >
            Projects
          </NavItem>
          <NavItem
            onClick={() => showTab(Tabs.EXPLORE)}
            state={activeTab === Tabs.EXPLORE ? "active" : ""}
          >
            Explore
          </NavItem>
          <NavItem
            onClick={() => showTab(Tabs.STORE)}
            state={activeTab === Tabs.STORE ? "active" : ""}
          >
            Store
          </NavItem>
          <NavItem
            onClick={() => showTab(Tabs.SETTINGS)}
            state={activeTab === Tabs.SETTINGS ? "active" : ""}
          >
            Settings
          </NavItem>
        </NavigationMenu>
        <Panel>{renderTab()}</Panel>
    
    </main>
  );
}
