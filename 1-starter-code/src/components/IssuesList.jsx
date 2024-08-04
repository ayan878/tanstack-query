// import { useQuery } from "react-query";
// import Issues from "../pages/Issues";
// import { IssueItem } from "./IssueItem";
// import LabelList from "./LabelList";
// import { useState } from "react";

// export default function IssuesList({ labels, status }) {
//   const issuesQuery = useQuery(["issues", { labels, status }], () => {
//     // turn it query string that we attach to url `labels[]`. [] this indicate that we have multiple items that are listed on label
//     const labelsString = labels.map((label) => `labels[]=${label}`).join("&");
//     const statusString = status ? `&status=${status}` : "";
//     return fetch(`/api/issues/?${labelsString}${statusString}`).then((res) =>
//       res.json()
//     );
//   });

//   // shortcut to copy props ctrl+alt+down/up and then ctrl+shift+right-arrow and also add comma in it using same cmd.

//   const [searchValue, setSearchValue] = useState("");

//   const searchQuery = useQuery(
//     ["issues", "search", searchValue],
//     () => {
//       // fetch(`/api/search/issues?q=${searchValue}`).then((res) => res.json());
//         fetch(
//         `https://ui.dev/api/courses/react-query/search/issues?q=${searchValue}`
//       ).then((res) => res.json()),
//     },
//     { enabled: searchValue.length > 0 }
//   );
//   console.log('result',searchQuery.data);

//   return (
//     <div>
//       <form
//         onSubmit={(event) => {
//           event.preventDefault();
//           setSearchValue(event.target.elements.search.value);
//         }}
//       >
//         <label htmlFor="search">Search Issues</label>
//         <input
//           type="search"
//           placeholder="Search"
//           name="search"
//           id="search"
//           onChange={(event) => {
//             if (event.target.value.length === 0) {
//               setSearchValue("");
//             }
//           }}
//         />
//       </form>
//       <h2>Issues List</h2>
//       {issuesQuery.isLoading ? (
//         <p>Loading...</p>
//       ) : searchQuery.fetchStatus === "idle" &&
//         searchQuery.isLoading === true ? (
//         <ul className="issues-list">
//           {issuesQuery.data.map((issue) => (
//             <IssueItem
//               key={issue.id}
//               title={issue.title}
//               number={issue.number}
//               assignee={issue.assignee}
//               commentCount={issue.comments.length}
//               createdBy={issue.createdBy}
//               createdDate={issue.createdDate}
//               labels={issue.labels}
//               status={issue.status}
//             />
//           ))}
//         </ul>
//       ) : (
//         <>
//           <h2>Search Results</h2>
//           {searchQuery.isLoading ? (
//             <p>Loading...</p>
//           ) : (
//             <>
//               <p>{searchQuery.data.count} Results</p>
//               <ul className="issues-list">
//                 {searchQuery.data.items.map((issue) => (
//                   <IssueItem
//                     key={issue.id}
//                     title={issue.title}
//                     number={issue.number}
//                     assignee={issue.assignee}
//                     commentCount={issue.comments.length}
//                     createdBy={issue.createdBy}
//                     createdDate={issue.createdDate}
//                     labels={issue.labels}
//                     status={issue.status}
//                   />
//                 ))}
//               </ul>
//             </>
//           )}
//         </>
//       )}
//     </div>
//   );
// }

import { useState } from "react";
import { useQuery } from "react-query";
import { IssueItem } from "./IssueItem";

export default function IssuesList({ labels, status }) {
  const issuesQuery = useQuery(["issues", { labels, status }], () => {
    const statusString = status ? `&status=${status}` : "";
    const labelsString = labels.map((label) => `labels[]=${label}`).join("&");
    return fetch(`/api/issues?${labelsString}${statusString}`).then((res) =>
      res.json()
    );
  });
  const [searchValue, setSearchValue] = useState("");

  const searchQuery = useQuery(
    ["issues", "search", searchValue],
    () =>
      fetch(
        `https://ui.dev/api/courses/react-query/search/issues?q=${searchValue}`
      ).then((res) => res.json()),
    {
      enabled: searchValue.length > 0,
    },
  );


  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          //search is the name of the input field inside the form
          setSearchValue(event.target.elements.search.value);
        }}
      >
        <label htmlFor="search">Search Issues</label>
        <input
          type="search"
          placeholder="Search"
          name="search"
          id="search"
          onChange={(event) => {
            if (event.target.value.length === 0) {
              setSearchValue("");
            }
          }}
        />
      </form>
      <h2>Issues List</h2>
      {issuesQuery.isLoading ? (
        <p>Loading...</p>
      ) : searchQuery.fetchStatus === "idle" &&
        searchQuery.isLoading === true ? (
        <ul className="issues-list">
          {issuesQuery.data.map((issue) => (
            <IssueItem
              key={issue.id}
              title={issue.title}
              number={issue.number}
              assignee={issue.assignee}
              commentCount={issue.comments.length}
              createdBy={issue.createdBy}
              createdDate={issue.createdDate}
              labels={issue.labels}
              status={issue.status}
            />
          ))}
        </ul>
      ) : (
        <>
          <h2>Search Results</h2>
          {searchQuery.isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              <p>{searchQuery.data.count} Results</p>
              <ul className="issues-list">
                {searchQuery.data.items.map((issue) => (
                  <IssueItem
                    key={issue.id}
                    title={issue.title}
                    number={issue.number}
                    assignee={issue.assignee}
                    commentCount={issue.comments.length}
                    createdBy={issue.createdBy}
                    createdDate={issue.createdDate}
                    labels={issue.labels}
                    status={issue.status}
                  />
                ))}
              </ul>
            </>
          )}
        </>
      )}
    </div>
  );
}
