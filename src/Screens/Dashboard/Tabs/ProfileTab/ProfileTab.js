import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { auth } from "../../../../Services/Appwrite";
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
   var [details, setDetails] = useState({
     name: "",
     email: "",
   });
   useEffect(() => {
     auth.checkAuthenticated(
       (res) => {
         setDetails({
           name: res.name,
           email: res.email
         })
       },
       (err) => {}
     );
   }, []);

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
                  name={details.name}
                  email={details.email}
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
