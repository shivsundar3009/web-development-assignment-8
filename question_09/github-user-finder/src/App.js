import React, { useState } from "react";
import UserInput from "./components/UserInput";
import UserDisplay from "./components/UserDisplay";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(null);

  const fetchUser = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.ok) {
        const data = await response.json();
        setUser(data);
      } else {
        throw new Error("User not found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="githubUser">
      <h1>Github User Finder</h1>
      <UserInput onSearch={fetchUser} />
      <UserDisplay user={user} />
    </div>
  );
};

export default App;