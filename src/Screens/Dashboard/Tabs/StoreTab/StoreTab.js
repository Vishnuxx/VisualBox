import React from "react";
import { EmptyBar, StoreMenu, StorePage } from "./Components";

export function StoreTab() {
  return (
    <StorePage>
      <StoreMenu>
        <h1>Store</h1>
      </StoreMenu>
      <EmptyBar></EmptyBar>
    </StorePage>
  );
}
