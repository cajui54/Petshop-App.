import React from "react";
import ListClient from "../_components/list-main";
import ScreenAmountClient from "../_components/screen-amount-client";
import { ContextCalendayProvider } from "@/app/context/contextCalendary";

const AdminPage = () => {
  return (
    <ContextCalendayProvider>
      <div>
        <ScreenAmountClient />
        <ListClient />
      </div>
    </ContextCalendayProvider>
  );
};

export default AdminPage;
