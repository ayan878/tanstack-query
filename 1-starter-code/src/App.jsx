import React from "react";
import { useQuery } from "react-query";

const fetchUser = (username) => {
  return fetch(`https://api.github.com/users/${username}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Error: ${res.status} ${res.statusText}`);
      }
      return res.json();
    })
    .catch((error) => {
      console.error("Fetch error:", error);
      throw error;
    });
};

const GitHubUser = ({ username }) => {
  const userQuery = useQuery([username], () => fetchUser(username));

  if (userQuery.isLoading) return <p>Loading...</p>;
  if (userQuery.isError) return <p>{userQuery.error.message}</p>;

  return <pre>{JSON.stringify(userQuery.data, null, 2)}</pre>;
};

function App() {
  return (
    <div>
      <GitHubUser username="uidotdev" />
    </div>
  );
}

export default App;
