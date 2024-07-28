import React from "react";
import ReactDOM from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes.tsx";

import "./index.css";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      afterSignOutUrl="/"
      appearance={{
        variables: {
          colorPrimary: "#7F5EE0",
          colorBackground: "#1f242e",
          colorDanger: "#E03D3D",
          colorText: "#A2B2C1",
          fontSize: "1.4rem",
        },
        elements: {
          rootBox: {
            boxShadow: "none",
            borderRadius: "0.375rem",
          },
          cardBox: {
            width: "40rem",
          },
          button: {
            height: "3.5rem",
            fontWeight: "400",
          },
          buttonArrowIcon: {
            display: "none",
          },
          formFieldInput__identifier: {
            "&:last-child": {
              border: "1px solid #2e3441",
              boxShadow: "none",
              "&:focus-within": {
                border: "1px solid #7F5EE0",
                boxShadow: "none",
              },
            },
          },
          formFieldLabel: {
            fontWeight: "400",
          },
          input: {
            padding: "0.7rem",
            maxHeight: "3.5rem",
            backgroundColor: "transparent",
            color: "#A2B2C1",
            boxShadow: "none",
          },
          socialButtonsBlockButton: {
            borderWidth: "1px",
          },
          socialButtonsBlockButton__google: {
            color: "#A2B2C1",
            backgroundColor: "#292f3b",
          },
          formFieldInput: {
            height: "50px",
          },
        },
      }}
    >
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>
);
