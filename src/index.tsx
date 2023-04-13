import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const SideBar = ({
  backgroundColor = "black",
}: {
  backgroundColor?: string;
}) => {
  return (
    <div
      style={{ backgroundColor, color: "white", width: 250, height: "100vh" }}
    >
      Sidebar
    </div>
  );
};
export { SideBar };
