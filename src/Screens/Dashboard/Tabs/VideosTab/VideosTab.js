import React from "react";
import { EmptyBar, VideosPage, VideoMenu } from "./Components";

export function VideosTab() {
  return (
    <VideosPage>
      <VideoMenu>
        <h1>Videos</h1>
      </VideoMenu>
      <EmptyBar></EmptyBar>
    </VideosPage>
  );
}
