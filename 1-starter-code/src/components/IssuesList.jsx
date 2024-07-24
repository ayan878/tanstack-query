import { useQuery } from "react-query";
import Issues from "../pages/Issues";
import { IssueItem } from "./IssueItem";
import LabelList from "./LabelList";

export default function IssuesList({ labels, status }) {
  const issueQuery = useQuery(["issues", { labels, status }], () => {
    // turn it query string that we attach to url `labels[]`. [] this indicate that we have multiple items that are listed on label
    const labelsString = labels.map((label) => `labels[]=${label}`).join("&");
    const statusString = status ? `&status=${status}` : "";
    return fetch(`/api/issues/?${labelsString}${statusString}`).then((res) => res.json());
  });

  if (issueQuery.isLoading) return <p>Loading...</p>;
  if (issueQuery.isError) return <p>Error: {issueQuery.error.message}</p>;

  // shortcut to copy props ctrl+alt+down/up and then ctrl+shift+right-arrow and also add comma in it using same cmd.
  return (
    <div>
      <h2>Issues List</h2>
      <ul className="issues-list">
        {issueQuery.data.map((issue) => (
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
    </div>
  );
}
