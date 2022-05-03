import React from "react";
import { Contents, EmptyBar, ProfileIcon, ProfileMenu, ProfileName, ProfilePage, } from "./Components";

export function SettingsTab() {
  return (
    <ProfilePage>
      <ProfileMenu>
        <h1>Profile</h1>
      </ProfileMenu>
      <Contents>
        <ProfileIcon></ProfileIcon>
        <ProfileName name="Vishnu"></ProfileName>
        <ProfileName name="Email@gmail.com"></ProfileName>
      </Contents>
      {/* <EmptyBar></EmptyBar> */}
    </ProfilePage>
  );
}
