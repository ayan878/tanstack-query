import { useState } from "react";
import IssuesList from "../components/IssuesList";
import LabelList from "../components/LabelList";

export default function Issues() {
  const [labels, setLabels] = useState([]);

  const [status, setStatus] = useState("");

  return (
    <div>
      <main>
        <section>
          <h1>Issues</h1>
          <IssuesList labels={labels} />
        </section>
        <aside>
          <LabelList
            selected={labels}
            toggle={(label) => {
              setLabels((currentLabels) =>
                currentLabels.includes(label)
                  ? currentLabels.filter(
                      (currentLabel) => currentLabel !== label
                    )
                  : currentLabels.concat(label)
              );
            }}
          />
          <h3>Status</h3>
          <StatusSelect
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          />
        </aside>
      </main>
    </div>
  );
}

const possibleStatus = [
  { id: "backlog", label: "Backlog" },
  { id: "todo", label: "Todo" },
  { id: "inProgress", label: "In Progress" },
  { id: "done", label: "Done" },
  { id: "cancelled", label: "Cancelled" },
];
function StatusSelect(value, onChange) {
  return (
    <select value={value} onChange={onChange} className="status-select">
      {possibleStatus.map((status) => (
        <option key={status.id} value={status.id}>
          {status.label}
        </option>
      ))}
    </select>
  );
}
