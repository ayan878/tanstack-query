import { useState, useEffect } from "react";
import IssuesList from "../components/IssuesList";
import LabelList from "../components/LabelList";
import { StatusSelect } from "./StatusSelect";
import { useQuery } from "react-query";

export default function Issues() {
  const [labels, setLabels] = useState([]);
  const [status, setStatus] = useState("");
 
  return (
    <div>
      <main>
        <section>
          <IssuesList labels={labels} status={status} />
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
          <button>Add Issue</button>
        </aside>
      </main>
    </div>
  );
}
