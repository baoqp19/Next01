import Navigation from "@/components/Navigation/Navigation";
import React from "react";

const ClientLayout = ({ children }) => {
  return (
    <div>
      <>
        <header>
          <h1>Header Client</h1>
        </header>

        <main>
          <Navigation />
          <h1>{children}</h1>
        </main>

        <footer>
          <h1>Footer Client</h1>
        </footer>
      </>
    </div>
  );
};

export default ClientLayout;
