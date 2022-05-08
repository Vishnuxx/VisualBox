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
import { ProfileTab } from "./Tabs/ProfileTab/ProfileTab";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { activeTabState } from "../../State/DashboardScreenState";




export function Dashboard(props) {
  const navigate = useNavigate()



  const Tabs = { PROJECTS: 0, EXPLORE: 1, STORE: 2, PROFILE: 3 };
  Object.freeze(Tabs);
  const [activeTab, setactiveTab] = useRecoilState(activeTabState);

  function activateTabState(tab) {
    return activeTab === tab ? "active" : "";
  }

  function setTab(tabid , navigateTo) {
    setactiveTab(tabid);
    navigate(navigateTo)
  }


  return (
    <DashboardPage>
      <MenuBar>
        <SearchBar></SearchBar>
      </MenuBar>
      <Panel>
        <Routes>
          <Route path="*" element={<ProjectsTab />} />
          <Route path="projects" element={<ProjectsTab />} />
          <Route path="explore" element={<ExploreTab />} />
          <Route path="store" element={<StoreTab />} />
          <Route path="profile/*" element={<ProfileTab />} />
        </Routes>
        {/* {renderTab()} */}
      </Panel>

      <NavigationMenu>
        <NavItem
          onClick={() => setTab(Tabs.PROJECTS , "projects")}
          state={activateTabState(Tabs.PROJECTS)}
          icon="https://img.icons8.com/plumpy/24/000000/project-management.png"
          label="Projects"
        ></NavItem>
        <NavItem
          onClick={() => setTab(Tabs.EXPLORE , "explore")}
          state={activateTabState(Tabs.EXPLORE)}
          icon="https://img.icons8.com/plumpy/24/000000/compass.png"
          label="Explore"
        ></NavItem>
        <NavItem
          onClick={() => setTab(Tabs.STORE , "store")}
          state={activateTabState(Tabs.STORE)}
          icon="https://img.icons8.com/plumpy/24/000000/shopping-basket.png"
          label="Store"
        ></NavItem>
        <NavItem
          onClick={() => setTab(Tabs.PROFILE , "profile")}
          state={ activateTabState(Tabs.PROFILE)}
          icon="https://img.icons8.com/plumpy/24/000000/user-male-circle.png"
          label="Settings"
        ></NavItem>
      </NavigationMenu>
    </DashboardPage>
  );
}
