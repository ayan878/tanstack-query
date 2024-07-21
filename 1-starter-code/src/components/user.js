import { useState } from "react";
import { useQuery } from "react-query";

const user = () => {
    const [userId,setUserId]=useState("u_1");

    const {data,isLoading}=useQuery(["users",userId], () => {
    return fetch(`https://ui.dev/api/courses/react-query/users/${id}`).then((res) =>
      res.json()
    );
     return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {data.map((user) => {
            <UserPickers
            <li key={user.id}>
              {user.name} style={{color:user.color}}
            </li>;
          })}
        </>
      )}
    </div>
  );

export default user;