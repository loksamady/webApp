import React from "react";
import UserList from "./components/UserList";

const App: React.FC = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Mini User Viewer</h1>
      <UserList />
    </div>
  );
};

export default App;
