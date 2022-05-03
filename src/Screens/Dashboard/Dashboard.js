import {
  NavItem,
  DashboardPage,
  Panel,
  MenuBar,
  NavigationMenu,
  SearchBar,
} from "./Components";
import React, { useState } from "react";
import { ProjectsTab } from "./Tabs/ProjectsTab/ProjectsTab";
import { ExploreTab } from "./Tabs/ExploreTab/ExploreTab";
import { StoreTab } from "./Tabs/StoreTab/StoreTab";
import { SettingsTab } from "./Tabs/SettingsTab/SettingsTab";
import { AppLogo } from "../../Components/AppLogo/AppLogo";



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

  function activateTabState(tab) {
    return activeTab === Tabs.PROJECTS ? "active" : "";
  }

  return (
    <DashboardPage>
      <MenuBar>
        <AppLogo width="30px" height="30px"></AppLogo>
        <h4>VisualBox</h4>
        <SearchBar></SearchBar>
      </MenuBar>
      <Panel>{renderTab()}</Panel>

      <NavigationMenu>
        <NavItem
          onClick={() => setTab(Tabs.PROJECTS)}
          state={() => activateTabState(Tabs.PROJECTS)}
          icon="https://img.icons8.com/plumpy/24/000000/project-management.png"
          label="Projects"
        ></NavItem>
        <NavItem
          onClick={() => setTab(Tabs.EXPLORE)}
          state={() => activateTabState(Tabs.EXPLORE)}
          icon="https://img.icons8.com/plumpy/24/000000/compass.png"
          label="Explore"
        ></NavItem>
        <NavItem
          onClick={() => setTab(Tabs.STORE)}
          state={() => activateTabState(Tabs.STORE)}
          icon="https://img.icons8.com/plumpy/24/000000/shopping-basket.png"
          label="Store"
        ></NavItem>
        <NavItem
          onClick={() => setTab(Tabs.SETTINGS)}
          state={() => activateTabState(Tabs.SETTINGS)}
          icon="https://img.icons8.com/plumpy/24/000000/user-male-circle.png"
          label="Settings"
        ></NavItem>
      </NavigationMenu>
    </DashboardPage>
  );
}
