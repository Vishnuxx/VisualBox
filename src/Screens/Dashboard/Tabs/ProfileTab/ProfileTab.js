import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import {
  Contents,
  LogoutButton,
  Option,
  ProfileMenu,
  ProfileNameAndIcon,
  ProfilePage,
  SubHeadings,
} from "./Components";
import { ManageTeams } from "./OptionComponents/ManageTeams/ManageTeams";

export function ProfileTab() {
  const navigete = useNavigate();

  return (
    <ProfilePage>
      <ProfileMenu>
        <h1>Profile</h1>
      </ProfileMenu>
      <Contents>
        <Routes>
          <Route
            path="*"
            element={
              <>
                <ProfileNameAndIcon
                  name="Vishnu"
                  email="email"
                ></ProfileNameAndIcon>
                <SubHeadings>Teams</SubHeadings>
                <Option onClick={()=>navigete("teams")} head="Manage Teams" para="view manage your teams" />
                <SubHeadings>Privacy</SubHeadings>
                <Option head="ChangePassword" para="para one" />
                <LogoutButton></LogoutButton>
              </>
            }
          />

          <Route path="teams/*" element={
            <ManageTeams></ManageTeams>
          }/>
        </Routes>
      </Contents>
      {/* <EmptyBar></EmptyBar> */}
    </ProfilePage>
  );
}
